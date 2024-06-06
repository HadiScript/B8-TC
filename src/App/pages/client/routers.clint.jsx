import { Outlet, useNavigate } from "react-router-dom"
import Layout from "../../component/panel/Layout"
import axios from "axios"
import { authAPI } from "../../../helpers/API"
import toast from "react-hot-toast"
import { useEffect } from "react"
import { useAuth } from "../../../context/auth.context"

const ClientRouting = () => {
  const router = useNavigate()
  const [auth] = useAuth()


  // auth token &&
  const fetchingCurrentUser = async () => {
    try {
      await axios.get(`${authAPI}/current-client`);
    } catch (error) {
      console.log(error);
      router('/')
    }
  }

  useEffect(() => {
    if (auth?.token) fetchingCurrentUser()
  }, [auth && auth?.token])


  return (
    <Layout>

      <Outlet />

    </Layout>
  )
}

export default ClientRouting