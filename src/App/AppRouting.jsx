import { Route, Routes } from "react-router-dom"
import Home from "./pages/common/Home"
import { paths } from "../helpers/paths"
import Login from "./pages/common/Login"
import ClientRouting from "./pages/client/routers.clint"
import AdminRouting from "./pages/admin/AdminRouting"
import SubmitTicket from "./pages/client/submit"
import ClientDashboard from "./pages/client"
import AdminCategory from "./pages/admin/AdminCategory"
import OpenTc from "./pages/client/open.client"
import InProgress from "./pages/client/inprogress.client"
import ClientProfile from "./pages/client/profile.client"

// agents
import { AgentRouting, Bucket, AgentReopenTickets, AgentHandover, AgentAssignedTickets, AgentDashboard, AgentPickTickets } from './pages/agent'
import AgentOpenTicket from "./pages/agent/details/openTicketDetail.agent"
import AgentOpenTicketDetail from "./pages/agent/details/openTicketDetail.agent"



const AppRouting = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<Home />} />
      <Route path={paths.login} element={<Login />} />


      {/* /client */}
      <Route path={paths.client} element={<ClientRouting />}>
        <Route path={''} element={<ClientDashboard />} />
        <Route path={paths.submit} element={<SubmitTicket />} />

        <Route path={paths.openClient} element={<OpenTc />} />
        <Route path={paths.inprogressClient} element={<InProgress />} />
        <Route path={paths.profileClient} element={<ClientProfile />} />

      </Route>



      {/* agent */}
      <Route path={paths.agent} element={<AgentRouting />}>

        <Route path={''} element={<AgentDashboard />} />
        <Route path={paths.agentBucket} element={<Bucket />} />
        <Route path={paths.agentReopen} element={<AgentReopenTickets />} />
        <Route path={paths.agentHandover} element={<AgentHandover />} />

        <Route path={paths.agentAssigned} element={<AgentAssignedTickets />} />
        <Route path={paths.agentPickTickets} element={<AgentPickTickets />} />
        <Route path={'/agent/ticket/:id'} element={<AgentOpenTicketDetail />} />

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