import { Drawer } from "antd"
import { useEffect, useState } from "react"
import { useTheme } from "../../../context/theme.context"





const ThemeDrawer = ({ onClose, open }) => {
  // const {handleChange} =  useTheme()

  // const { handleChange, } = useTheme()

  const { handleChange } = useTheme()



  return (
    <Drawer title="Theme Settings" placement="bottom" onClose={onClose} open={open}>
      <div className="d-flex justify-content-center gap-2 flex-wrap ">

        <div style={{ height: "100px", width: "100px", backgroundColor: "#042f2e", }} onClick={() => handleChange('teal')} className="rounded-3" />

        <div style={{ height: "100px", width: "100px", backgroundColor: "#172554" }} onClick={() => handleChange('blue')} className="rounded-3" />


        <div style={{ height: "100px", width: "100px", backgroundColor: "#030712" }} onClick={() => handleChange('gery')} className="rounded-3" />


        <div style={{ height: "100px", width: "100px", backgroundColor: "#083344" }} onClick={() => handleChange('cyan')} className="rounded-3" />
      </div>


    </Drawer>
  )
}
export default ThemeDrawer