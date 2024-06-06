import React from 'react'
import { useTheme } from '../../../context/theme.context'
import { Breadcrumb, Button } from 'antd'
import { BiHome, BiHomeAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { GiOpenFolder } from 'react-icons/gi'


// const Breadcrumbs = ({ current, previous, theme }) => <Breadcrumb
//   style={{ color: theme.light }}
//   items={[
//     {
//       href: '/',
//       title: <BiHomeAlt />,
//     },
//     {
//       href: '',
//       title: (
//         <>
//           <GiOpenFolder />
//           <span>Application List</span>
//         </>
//       ),
//     },
//     {
//       title: 'Application',
//     },
//   ]}
// />

const Heading = (
  {
    desc,
    title,
    icon,
  }
) => {

  const { theme } = useTheme()
  return (
    <div className="rounded-2 d-flex justify-content-between align-items-center p-3 mb-4 mt-3" style={{ height: "100px", width: "100%", background: `linear-gradient(${theme.secondary}, ${theme.primary})`, color: theme.light, }}>

      <div className='d-flex flex-column justify-content-center align-items-start'>
        {/* <Breadcrumbs current={"Open Tickets"} theme={theme} /> */}
        <div className="d-flex flex-column align-items-start justify-content-start ">
          <div className="d-flex justify-content-center align-items-center gap-2">
            {icon}
            <span style={{ fontWeight: "bold", fontSize: "20px" }} className='text-capitalize'>{title}</span>
          </div>
          {desc && <small><i>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</i></small>}
        </div>
      </div>


      <Button type='dashed' style={{ backgroundColor: "transparent", color: theme.light }}> Export Data In CSV </Button>

    </div>
  )
}

export default Heading