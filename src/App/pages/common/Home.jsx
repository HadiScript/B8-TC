import { Button, Col, Row } from "antd"
import { BiLogIn } from "react-icons/bi"
import { Link } from "react-router-dom"
import { paths } from "../../../helpers/paths"

const Home = () => {
  return (
    <div style={{ minHeight: "100vh" }} className="d-flex flex-column justify-content-between container">

      <div className="d-flex justify-content-between py-2 border-bottom">
        <h5>Hadi Scripts</h5>


        <Link to={paths.login} className="d-flex align-items-center gap-2 text-decoration-none text-dark" role="button">
          <BiLogIn />
          <span>Login</span>
        </Link>



      </div>



      <div className="">hero</div>
      <div className="">footer</div>

    </div>
  )
}
export default Home