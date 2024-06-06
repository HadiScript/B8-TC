import React from 'react'
import Heading from '../../component/common/Heading'
import { BsBucket } from 'react-icons/bs'
import { usePicketOpenTicket, useTicketsForBucket } from '../../../actions/agent'
import { Button } from 'antd'
import { IoReload } from 'react-icons/io5'

const Bucket = () => {


  const { data, isLoading } = useTicketsForBucket()
  const { pickAnTicket, isLoading: pickLoading } = usePicketOpenTicket()



  return (
    <>
      <Heading

        desc={""}
        title={"Bucket"}
        icon={<BsBucket size={20} />}

      />



      {/* <div className="d-flex justify-content-end">
        <Button icon={<IoReload />} onClick={fetchOpenTickets}>
          Reload
        </Button>
      </div> */}

      <div className="table-responsive">
        <table className="table mt-3 agent-table">
          <thead>
            <tr>
              <th scope="col"># {isLoading && "loading..."}</th>
              <th scope="col">Title</th>
              <th scope="col">Category</th>
              <th scope="col">Assigned At</th>
              <th scope="col">Status</th>

            </tr>
          </thead>

          <tbody>
            {data?.map((x, index) => <tr key={x._id}>
              <th>{++index}</th>
              <th>{x?.title}</th>
              <th>{x?.category?.name}</th>
              <th>{x?.createdAt?.slice(0, 10)}</th>
              <th>{x?.status}</th>


              <th>
                <Button loading={pickLoading} onClick={() => pickAnTicket(x._id)} type="dashed">
                  Pick
                </Button>
              </th>
            </tr>)}
          </tbody>
        </table>
      </div>


    </>
  )
}

export default Bucket