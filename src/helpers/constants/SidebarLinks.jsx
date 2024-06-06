import { MdDashboard, MdOutlineAssignment, MdOutlineDashboard, MdOutlineSendTimeExtension, MdRepeatOneOn } from "react-icons/md"
import { paths } from "../paths"
import { useAuth } from "../../context/auth.context"
import { IoCheckmarkDoneSharp, IoCreateOutline } from "react-icons/io5"
import { FaOpenid } from "react-icons/fa"
import { TiFolderOpen } from "react-icons/ti"
import { GrInProgress } from "react-icons/gr"
import { BiUser } from "react-icons/bi"
import { VscDebugContinue } from "react-icons/vsc"
import { CgColorPicker, CgProfile } from "react-icons/cg"
import { CiPickerHalf } from "react-icons/ci"
import { BsBucket } from "react-icons/bs"

const AdminLinks = [
  {
    name: "Dashboard",
    icon: <MdDashboard size={18} className="bg-primary p-3 rounded-circle" />,
    gap: false,
    cat: "",
    path: paths.admin
  },
  // many more
]

const agentLinks = [
  {
    gap: false,
    cats: "Overview",
    name: "Dashboard",
    path: "/agent",
    icon: <MdOutlineDashboard size={19} />,
  },



  {
    gap: false,
    cats: "Tickets",
    name: "Bucket",
    path: "/agent/bucket",
    icon: <BsBucket size={19} />,
  },


  {
    gap: false,
    cats: "",
    name: "Picked",
    path: "/agent/my-picks",
    icon: <CgColorPicker size={19} />,
  },




  {
    gap: false,
    name: "Reopens",
    path: "/agent/reopen",
    icon: <MdRepeatOneOn size={18} />,
  },

  {
    gap: false,
    name: "Handovers",
    path: "/agent/handover",
    icon: <MdOutlineSendTimeExtension size={19} />,
  },

  {
    gap: false,
    name: "Assigned",
    path: "/agent/assigned",
    icon: <MdOutlineAssignment size={19} />,
  },


  {
    gap: true,
    cats: "Settings",
    name: "Profile",
    path: "/_/update-profile",
    icon: <CgProfile size={19} />,
  },




  // many more
]

const clientLinks = [
  {
    name: "Dashboard",
    icon: <MdDashboard size={18} />,
    gap: false,
    cat: "",
    path: paths.client
  },

  {
    name: "Submit Ticket",
    icon: <IoCreateOutline size={18} />,
    gap: true,
    cat: "Tickets",
    path: paths.submit
  },

  {
    name: "Open Tickets",
    icon: <TiFolderOpen size={18} />,
    gap: false,
    cat: "",
    path: paths.openClient
  },


  {
    name: "InPogress Tickets",
    icon: <VscDebugContinue size={18} />,
    gap: false,
    cat: "",
    path: paths.inprogressClient
  },

  {
    name: "Resolved Tickets",
    icon: <IoCheckmarkDoneSharp size={18} />,
    gap: false,
    cat: "",
    path: paths.resovledClient
  },


  {
    name: "Profile",
    icon: <BiUser size={18} />,
    gap: true,
    cat: "Settings",
    path: paths.profileClient
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