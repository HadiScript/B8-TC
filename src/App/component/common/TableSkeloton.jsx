import { Grid, Progress, Skeleton } from 'antd'
import React from 'react'
import { FaChartSimple } from 'react-icons/fa6'

const TableSkeloton = () => {

  // const points = Grid.useBreakpoint()
  // let size = points.md ? 700 : 300


  return (
    <>
      {[1, 2, 3, 4, 5, 6, 6].map((_, i) => <Progress key={i} status='active' showInfo={false} />)}
    </>
  )
}

export default TableSkeloton