import { Col, Row } from "antd"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {



  return (
    <>
      <Row style={{ minHeight: "100vh" }} className="" >
        <Col lg={4} xs={0} sm={0} className="fixedColumn leftColumn border-end" >
          <Sidebar />
        </Col>

        <Col lg={20} xs={24} className="centerColumn" >
          <div> headers </div>
          <div>{children}</div>

        </Col>



      </Row>
    </>
  )
}

export default Layout