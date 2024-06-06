import { Col, Row } from "antd"
import Sidebar from "./Sidebar"
import PanelHeader from "./PanelHeader"

import '../../../assets/layout.css'

const Layout = ({ children }) => {



  return (
    <>
      <Row style={{ minHeight: "100vh" }} className="" >
        <Col lg={4} xs={0} sm={0} className="fixedColumn leftColumn border-end" >
          <Sidebar />
        </Col>

        <Col lg={20} xs={24} className="centerColumn" >
          <PanelHeader />
          <div className="py-2 px-4">{children}</div>
        </Col>
      </Row>
    </>
  )
}

export default Layout