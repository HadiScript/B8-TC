import { Col, Row, Button, Checkbox, Form, Input } from "antd"
import { useTheme } from "../../../context/theme.context";
import MyErrors from "../../../helpers/errors/MyErrors";

import { _useAuth } from "../../../actions/_useAuth";
import { useAuth } from "../../../context/auth.context";
import { redirect, useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Login = () => {


  const { theme } = useTheme()
  const router = useNavigate()

  const { handleSubmit, loading, err } = _useAuth()
  const [auth] = useAuth()


  useEffect(() => {
    if (auth?.token) {
      router('/')
    }
  }, [router])


  return (
    <Row style={{ minHeight: "100vh", }}>
      <Col md={18} xs={0} style={{ backgroundColor: theme?.primary }} className="text-light ">
        <div className="p-4" >
          <h1>Ticketing System</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.orem Ipsum passages, and more recently with desktop publishing </p>
        </div>
      </Col>
      <Col md={6} xs={24} className="d-flex align-items-center p-2">

        <Form
          style={{ width: "100%" }}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
          layout="vertical"
        >


          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'please enter valid email!',
              },
            ]}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button loading={loading} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>


          {err && <MyErrors error={err} />}
        </Form>



      </Col>
    </Row >
  )
}
export default Login