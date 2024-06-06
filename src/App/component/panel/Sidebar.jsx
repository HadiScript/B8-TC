import SidebarLinks from "../../../helpers/constants/SidebarLinks"
import { Link, useLocation } from "react-router-dom"
import { Divider, Menu } from "antd"
import React from "react"
import { BiLogOut } from "react-icons/bi"
import { useTheme } from "../../../context/theme.context"
import { _useAuth } from "../../../actions/_useAuth"



const useActtive = (pathFromItem, location) => {
  const { theme } = useTheme()

  return pathFromItem === location ? { color: theme.primary, borderRight: `4px solid ${theme.primary}`, background: "red", fontWeight: "500" } : {}
}



const Sidebar = () => {
  const navLinks = SidebarLinks()
  const location = useLocation().pathname;
  const { theme } = useTheme()
  const { logout } = _useAuth()

  return (
    <div className="">
      <div style={{ fontWeight: "bold", fontSize: "18px", }} className="text-center py-2">
        <span>Hadi Scripts</span>
      </div>
      <br />


      <Menu>
        {
          navLinks?.map((x, i) => <React.Fragment key={i}>
            {x.gap && <Divider orientation="left" ><small style={{ fontSize: "12px" }}>{x?.cat}</small></Divider>}
            <Menu.Item icon={
              // <div style={{ backgroundColor: theme.light, padding: "10px", borderRadius: "50%" }}>
              // </div>
              x.icon
            } key={x.name} className="nav-link" style={useActtive(x.path, location)}>
              <Link to={x.path} className="text-decoration-none">
                {x.name}
              </Link>
            </Menu.Item>
          </React.Fragment>
          )
        }

        <Menu.Item icon={<BiLogOut />} onClick={logout} >
          Logout
        </Menu.Item>
      </Menu>




    </div >
  )
}

export default Sidebar