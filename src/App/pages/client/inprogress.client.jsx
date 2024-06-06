import { Input, Pagination } from "antd"
import Heading from "../../component/common/Heading"
import { VscDebugContinue } from "react-icons/vsc"
import ClientTable from "../../component/panel/client/client.table"
import { useFetchList } from "../../../actions/_common"
import { ticketAPI } from "../../../helpers/API"
import TableSkeloton from "../../component/common/TableSkeloton"


const InProgress = () => {
  // const { openTickets, loading } = useGetOpenTickets()
  const { list, loading } = useFetchList(`${ticketAPI}/my-in-progress`)

  return (
    <>

      <Heading
        desc={""}
        title={"Inprogress Tickets"}
        icon={<VscDebugContinue size={20} />}
      />

      <div className="mb-2">
        <Input placeholder="Search Open Ticket" />
      </div>

      {loading ? <TableSkeloton /> : <ClientTable list={list?.tickets} from={"inprogress-tickets"} />}

      <Pagination defaultCurrent={6} total={500} />
    </>
  )
}

export default InProgress