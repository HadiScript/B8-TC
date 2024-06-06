import axios from "axios"
import { ticketAPI } from "../helpers/API"
import toast from "react-hot-toast"
import MyErrors from "../helpers/errors/MyErrors"
import { useEffect, useState } from "react"
import { useAuth } from "../context/auth.context"

export const useTicketCreate = () => {
  const [loading, setLoading] = useState(false)

  const ticketCreation = async (values) => {
    setLoading(true)
    try {
      const { data } = await axios.post(`${ticketAPI}/create`, values)
      toast.success("Ticket is created")
    } catch (error) {
      console.log(error)
      toast.error(MyErrors(error))
    } finally {
      setLoading(false)
    }
  }


  return {
    loading,
    ticketCreation
  }

}



export const useGetOpenTickets = () => {

  const [auth] = useAuth()
  const [openTickets, setOpenTickets] = useState([]);
  const [loading, setLoading] = useState(false);



  const fetchOpenTickets = async () => {
    setLoading(true);
    try {
      // console.log("just entered into the fetch open ticket")
      const { data } = await axios.get(`${ticketAPI}/my-opens`);
      // console.log("after fetching data", data)

      setOpenTickets(data.tickets)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error);
    }
  }


  useEffect(() => { if (auth && auth?.token) fetchOpenTickets() }, [auth && auth?.token])

  return {
    loading, openTickets
  }
}