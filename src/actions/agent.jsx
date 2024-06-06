import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../context/auth.context";
import axios from "axios";
import { baseAPI, ticketAPI } from "../helpers/API";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// export const useBucket = () => {
//   const [auth] = useAuth();
//   const authToken = auth && auth?.token;

//   const [list, setList] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchOpenTickets = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(ticketAPI);

//       setList(res?.data.tickets);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (authToken) {
//       fetchOpenTickets();
//     }
//   }, [authToken]);

//   // pick any tikcet
//   const pickAnTicket = async (ticketId) => {
//     setLoading(true);
//     try {
//       const res = await axios.put(`${ticketAPI}/pick`, { ticketId });
//       fetchOpenTickets();
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     loading,
//     list,
//     fetchOpenTickets,
//     pickAnTicket,
//   };
// };

export const useTicketsForBucket = () => {
  const fetchData = async () => {
    const res = await axios.get(ticketAPI);
    return res?.data.tickets;
  };

  // const {data, isLoading, onError, error, isSuccess } = useQuery("bucketTickets", fetchData)
  const { data, isLoading, error } = useQuery({ queryKey: ["bucketTickets"], queryFn: fetchData })

  if (error) {
    console.log(error);
  }


  return {
    data, isLoading
  }

}

export const usePicketOpenTicket = () => {

  const queryClient = useQueryClient()
  const [isLoading, setIsLoading] = useState(false)

  // const update = async (ticketId) => {
  //   const { data } = await axios.put(`${ticketAPI}/pick`, { ticketId });
  //   return data;
  // };

  // const { mutate: pickAnTicket, isLoading } = useMutation(update, {
  //   onSuccess: (data) => {
  //     // queryClient.invalidateQueries("bucketTickets")
  //     toast.success("Picked")
  //   },
  //   onError: (error) => {
  //     console.log(error);

  //   },
  // })

  const pickAnTicket = async (ticketId) => {
    setIsLoading(true);
    try {
      const res = await axios.put(`${ticketAPI}/pick`, { ticketId });
      queryClient.invalidateQueries("bucketTickets")
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };


  return {
    pickAnTicket, isLoading
  }
}


export const usePickTickets = () => {
  // ticket/my-picks

  const [auth] = useAuth();
  const authToken = auth && auth?.token;

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMyPickTickets = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${ticketAPI}/my-picks`);
      // console.log(res);
      setList(res?.data.tickets);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [authToken]);

  useEffect(() => {
    fetchMyPickTickets();
  }, [fetchMyPickTickets]);

  return {
    loading,
    list,
  };
};



export const useSingleTicket = (id) => {
  const [auth] = useAuth();
  const authToken = auth && auth?.token;

  const [ticket, setTicket] = useState({});
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState("");

  const router = useNavigate();

  useEffect(() => {
    const fetchingSingleTicket = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${ticketAPI}/single/${id}`);
        setTicket(res.data.singleTicket);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (id && authToken) fetchingSingleTicket();
  }, [id, authToken]);

  const doComment = async () => {
    setLoading(true);
    try {
      const res = await axios.put(`${ticketAPI}/add-comments`, { ticketId: id, content: comment });
      if (res.status === 200) {
        // setSingleItem(res.data.singleTicket);
        toast.success("Comment Added");
        setTicket((prev) => ({ ...prev, comments: [...prev.comments, res.data.comments] }));
        setComment("");
        // fetchSingleTicket();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      setLoading(true);
      // const data = await axios.delete(`/delete/comment/${commentId}`);
      // if (data.ok) {
      toast.success("deleted");
      setTicket((prev) => ({ ...prev, comments: singleItem.comments.filter((x) => x._id !== commentId) }));
      // }
    } catch (error) {
      console.log(error);
      toast.error("Failed, try again.");
    } finally {
      setLoading(false);
    }
  };

  const EscTicket = async (ticketId, why) => {
    if (!why) {
      return toast.error("Please write something..");
    }
    setLoading(true);
    try {
      await axios.put(`${ticketAPI}/escalate`, { ticketId, why });
      router("/agent/picked-tickets");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // doComment
  // deleteComent

  const closeTicket = async () => {
    try {
      setLoading(true);
      const res = await axios.put(`${ticketAPI}/update-to-resolved/${id}`);
      if (res.status === 200) {
        toast.success(res.data.msg);
        router("/agent/resolved-ticket"); // agent resolved
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed, try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    ticket,
    EscTicket,
    closeTicket,
    doComment,
    deleteComment,
    comment,
    setComment,
  };
};




export const useAvailableAgents = (isOpen) => {
  const router = useNavigate();
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${baseAPI}/user/available-for-handover`);
      if (res.status === 200) {
        setList(res.data.users);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchUserData();
    }
  }, [isOpen]);

  let reason = "no reason at all.";

  const handoverTc = async (ticketId, newAgentId) => {
    setLoading(true);
    try {
      const res = await axios.put("ticket/handover-ticket", { ticketId, newAgentId, reason });
      toast.success(`Moved to ${newAgentId}`);
      router("/agent/picked-tickets");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    list,
    handoverTc,
  };
};
