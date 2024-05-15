import { useEffect } from "react"
import Layout from "../../component/panel/Layout"
import axios from "axios"
import { authAPI } from "../../../helpers/API"
import { useAuth } from "../../../context/auth.context"
import { useNavigate } from "react-router-dom"

const AgentRouting = () => {

  const router = useNavigate()
  const [auth] = useAuth()


  // auth token &&
  const fetchingCurrentUser = async () => {
    try {
      await axios.get(`${authAPI}/current-agent`);
    } catch (error) {
      console.log(error);
      router('/')
    }
  }

  useEffect(() => {
    if (auth?.token) fetchingCurrentUser()
  }, [auth && auth?.token])


  return (
    <Layout>AgentRouting</Layout>
  )
}

export default AgentRouting