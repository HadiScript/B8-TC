import { createContext, useContext, useState } from "react"

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: ""
  })


  return (
    <AuthContext.Provider value={[auth, setAuth]}> {children} </AuthContext.Provider>
  )
}
export default AuthProvider





