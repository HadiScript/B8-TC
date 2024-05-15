import SidebarLinks from "../../../helpers/constants/SidebarLinks"

const Sidebar = () => {
  const navLinks = SidebarLinks()

  return (
    <div>
      Sidebar -
      {JSON.stringify(navLinks)}
    </div>
  )
}

export default Sidebar