import { MdDashboard } from "react-icons/md"
import { paths } from "../paths"
import { useAuth } from "../../context/auth.context"

const AdminLinks = [
  {
    name: "Dashboard",
    icon: <MdDashboard />,
    path: paths.admin
  },
  // many more
]

const agentLinks = [
  {
    name: "Dashboard",
    icon: <MdDashboard />,
    path: paths.agent
  },
  // many more
]

const clientLinks = [
  {
    name: "Dashboard",
    icon: <MdDashboard />,
    path: paths.client
  },
  // many more
]


const SidebarLinks = () => {

  const [auth] = useAuth();
  const role = auth?.user?.role;

  if (!role) return [];

  return role === 'admin' ? AdminLinks : role === "agent" ? agentLinks : clientLinks
}

export default SidebarLinks