import { Route, Routes } from "react-router-dom"
import Home from "./pages/common/Home"
import { paths } from "../helpers/paths"
import Login from "./pages/common/Login"



const AppRouting = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<Home />} />

      <Route path={paths.login} element={<Login />} />
      <Route path="*" element={<> Not Found </>} />


    </Routes>
  )
}
export default AppRouting