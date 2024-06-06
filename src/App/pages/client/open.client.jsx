import { GiOpenFolder } from "react-icons/gi"
import { useFetchList } from "../../../actions/_common"
import { useGetOpenTickets } from "../../../actions/_ticket"
import { ticketAPI } from "../../../helpers/API"
import Heading from "../../component/common/Heading"
import ClientTable from "../../component/panel/client/client.table"
import { Input, Pagination } from "antd"
import TableSkeloton from "../../component/common/TableSkeloton"

const OpenTc = () => {

  // const { openTickets, loading } = useGetOpenTickets()
  const { list, loading } = useFetchList(`${ticketAPI}/my-opens`)



  return (
    <>

      <Heading
        desc={""}
        title={"Open Tickets"}
        icon={<GiOpenFolder size={20} />}
      />

      <div className="mb-2">
        <Input placeholder="Search Open Ticket" />
      </div>
      {loading ? <TableSkeloton /> : <ClientTable list={list?.tickets} from={"open-tickets"} />}

      <Pagination defaultCurrent={6} total={500} />

    </>
  )
}

export default OpenTc