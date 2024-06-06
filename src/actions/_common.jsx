import axios from "axios";
import { useEffect, useState } from "react"
import { catsAPI } from "../helpers/API";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth.context";

export const useFetchList = (url) => {
  const [auth] = useAuth()
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchList = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setList(data)
      data : {
        category : []
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error);
    }
  }


  useEffect(() => { if (auth && auth?.token) fetchList() }, [auth && auth?.token])

  return {
    loading, list
  }
}