import { Route, Routes } from "react-router-dom"
import Home from "./pages/common/Home"
import { paths } from "../helpers/paths"
import Login from "./pages/common/Login"
import ClientRouting from "./pages/client/ClientRouting"
import AgentRouting from "./pages/agent/AgentRouting"
import AdminRouting from "./pages/admin/AdminRouting"
import SubmitTicket from "./pages/client/SubmitTicket"
import ClientDashboard from "./pages/client"
import Bucket from "./pages/agent/Bucket"
import AdminCategory from "./pages/admin/AdminCategory"


const AppRouting = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<Home />} />
      <Route path={paths.login} element={<Login />} />


      {/* /client */}
      <Route path={paths.client} element={<ClientRouting />}>
        <Route path={''} element={<ClientDashboard />} />
        <Route path={paths.submit} element={<SubmitTicket />} />
      </Route>



      {/* agent */}
      <Route path={paths.agent} element={<AgentRouting />}>
        {/* client's agent */}
        <Route path={paths.bucket} element={<Bucket />} />



      </Route>


      {/* admin */}
      <Route path={paths.admin} element={<AdminRouting />}>
        {/* admin's routes */}
        <Route path={paths.category} element={<AdminCategory />} />


      </Route>





      <Route path="*" element={<> Not Found </>} />
    </Routes>
  )
}
export default AppRouting