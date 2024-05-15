
import { BiLogIn } from "react-icons/bi"
import { Link } from "react-router-dom"
import { paths } from "../../../helpers/paths"
import { useAuth } from "../../../context/auth.context"
import TopHeader from "./TopHeader"

const Home = () => {
  const [auth] = useAuth();



  return (
    <div style={{ minHeight: "100vh" }} className="d-flex flex-column justify-content-between container">

      <TopHeader />


      <div className="">hero</div>
      <div className="">footer</div>

    </div>
  )
}
export default Home