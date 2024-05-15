import { Link } from "react-router-dom"
import { paths } from "../../../helpers/paths"
import { BiLogIn, BiLogOut } from "react-icons/bi"
import { useAuth } from "../../../context/auth.context"
import { MdDashboard } from "react-icons/md"
import { _useAuth } from "../../../actions/_useAuth"




const LoginComponent = ({ auth, paths }) => {
  return <>
    {
      !auth?.token && <Link to={paths.login} className="d-flex align-items-center gap-2 text-decoration-none text-dark" role="button">
        <BiLogIn />
        <span>Login</span>
      </Link>
    }
  </>
}


const ConditionalComponent = ({ role }) => {
  const { logout } = _useAuth()

  return <div className="d-flex align-items-center gap-2 text-decoration-none text-dark" >
    <Link to={`/${role}`} className="d-flex align-items-center gap-2 text-decoration-none text-dark">
      <MdDashboard />
      <span className="text-capitalize">{role} </span>
    </Link>


    <div role="button" onClick={logout} className="d-flex align-items-center gap-2">
      <BiLogOut />
      <span>logout</span>
    </div>
  </div>

}




const TopHeader = () => {
  const [auth] = useAuth()

  const role = auth?.user?.role;

  return (
    <div className="d-flex justify-content-between py-2 border-bottom">
      <h5>Hadi Scripts</h5>
      {auth?.token && <ConditionalComponent role={role} />}
      <LoginComponent paths={paths} auth={auth} />
    </div>
  )
}

export default TopHeader