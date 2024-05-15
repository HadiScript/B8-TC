import { Outlet, useNavigate } from "react-router-dom"
import Layout from "../../component/panel/Layout"
import { useAuth } from "../../../context/auth.context"
import { useEffect } from "react"
import axios from "axios"
import { authAPI } from "../../../helpers/API"

const AdminRouting = () => {

  const router = useNavigate()
  const [auth] = useAuth()


  // auth token &&
  const fetchingCurrentUser = async () => {
    try {
      await axios.get(`${authAPI}/current-admin`);
    } catch (error) {
      console.log(error);
      router('/')
    }
  }

  useEffect(() => {
    if (auth?.token) fetchingCurrentUser()
  }, [auth && auth?.token])


  return (
    <Layout><Outlet /></Layout>
  )
}

export default AdminRouting