import { MdCreate } from "react-icons/md"
import Heading from "../../component/common/Heading"
import { Button, Card, Form, Input, Select } from "antd"

import { useGetCategory } from "../../../actions/_cats"
import { useTicketCreate } from "../../../actions/_ticket"
import { catsAPI } from "../../../helpers/API"
import { useFetchList } from "../../../actions/_common"



const SubmitTicket = () => {
  // const { categories, loading } = useGetCategory()
  const { list, loading } = useFetchList(catsAPI)
  const { ticketCreation, loading: ticketCreateLoading } = useTicketCreate()



  return (
    <>
      <Heading
        desc={""}
        title={"Create Ticket"}
        icon={<MdCreate size={20} />}
      />

      {/* <Card> */}
      <Form onFinish={ticketCreation}>
        <div className="row align-items-start">
          <div className="col-md-3 col-12">
            <b>Title of your ticket*</b>
            <p>In publishing and graphic design, Lorem ipsum is a</p>
          </div>
          <div className="col-md-9 col-12">
            <Form.Item
              name="title"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
        </div>


        <div className="row align-items-start mt-4">
          <div className="col-md-3 col-12">
            <b>Write Descriptions*</b>
            <p>In publishing and graphic design, Lorem ipsum is a</p>
          </div>
          <div className="col-md-9 col-12">
            <Form.Item
              name="description"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
          </div>
        </div>


        <div className="row align-items-start mt-4">
          <div className="col-md-3 col-12">
            <b>Select a category*</b>
            <p>{loading ? "please wait..." : "In publishing and graphic design, Lorem ipsum is a"}</p>
          </div>
          <div className="col-md-9 col-12">
            <Form.Item
              name="category"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Select placeholder="category">
                {list?.categories.map(x => <Select.Option key={x._id} value={x?._id}>{x?.name}</Select.Option>)}
              </Select>
            </Form.Item>
          </div>
        </div>


        <div className="row align-items-start mt-4">
          <div className="col-md-3 col-12">
            <b>Urgency*</b>
            <p>In publishing and graphic design, Lorem ipsum is a</p>
          </div>
          <div className="col-md-9 col-12">
            <Form.Item
              name="priority"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Select placeholder="Urgency">
                <Select.Option value="Low">Low</Select.Option>
                <Select.Option value="Medium">Medium</Select.Option>
                <Select.Option value="High">High</Select.Option>
                <Select.Option value="Critical">Critical</Select.Option>
              </Select>
            </Form.Item>
          </div>
        </div>

        <Form.Item className="mt-4">
          <Button loading={ticketCreateLoading} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {/* </Card> */}
    </>
  )
}

export default SubmitTicket