import axios from "axios"
import { useState } from "react"
import { authAPI } from "../helpers/API"
import { useAuth } from "../context/auth.context"
import { useNavigate } from "react-router-dom"
import Cookie from 'js-cookie'
import CryptoJS from "crypto-js";

export const _useAuth = () => {
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState("")
  const [auth, setAuth] = useAuth()
  const router = useNavigate()

  const handleSubmit = async (values) => {
    try {
      setLoading(true)
      const { data } = await axios.post(`${authAPI}/signin`, values,);

      setAuth(data);
      const mySec = CryptoJS.AES.encrypt(JSON.stringify(data), import.meta.env.VITE_KEY).toString()
      if (values.remember) {
        Cookie.set('authTicket', mySec, { expires: 2 })
      }

      if (!values.remember) {
        sessionStorage.setItem("authTicket", mySec)
      }
      router('/')

    } catch (error) {
      console.log(error, "from login");
      setErr(error?.response?.data?.message)
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    Cookie.remove("authTicket");
    sessionStorage.removeItem("authTicket");

    setAuth({
      user: null,
      token: ""
    });
    router('/')
  }

  return {
    loading,
    handleSubmit,
    err,
    logout
  }

}