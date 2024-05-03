import { Col, Row, Button, Checkbox, Form, Input } from "antd"


const Login = () => {


  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row style={{ minHeight: "100vh", }}>

      <Col md={18} xs={0} style={{ backgroundColor: "#164e63" }} className="text-light ">
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
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >


          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
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
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>



      </Col>

    </Row >
  )
}
export default Login