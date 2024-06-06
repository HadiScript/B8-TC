import { Tag } from "antd"
import { PriorityColor } from "../../../../helpers/constants/Colors"

const ClientTable = ({ list, from }) => {
  return (
    <div class="table-responsive">
      <table class="table">

        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Priority</th>
            <th scope="col">Comments</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {list?.map((x, i) => <tr key={x._id}>
            <th scope="row">{++i}</th>
            <td>{x?.title}</td>
            <td>{x?.category?.name}</td>
            <td><Tag color={PriorityColor[x.priority]}>{x?.priority}</Tag></td>
            <td>{x?.comments?.length}</td>
            <td>View</td>
          </tr>)}

        </tbody>
      </table>
    </div>
  )
}

export default ClientTable