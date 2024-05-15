import { Alert } from 'antd'

const MyErrors = ({ error }) => {
  return <Alert message={error} type="error" showIcon closable />
}

export default MyErrors