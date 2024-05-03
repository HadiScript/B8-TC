import { ConfigProvider, FloatButton } from "antd"
import AppRouting from "./AppRouting"
import { useState } from "react";
import ThemeDrawer from "./component/common/theme.drawer";
import { useTheme } from "../context/theme.context";


const data = {
  borderRadius: 6,
  colorPrimary: '#083344',
  Button: {
    colorPrimary: '#164e63',
  },
};


const App = () => {

  const [toggle, setToggle] = useState(false)

  const { currentTheme, theme } = useTheme();





  return (
    <ConfigProvider

      theme={{
        token: {
          colorPrimary: theme.colorPrimary,
          borderRadius: theme.borderRadius,
        },
        components: {
          Button: {
            colorPrimary: theme.Button?.colorPrimary,
            algorithm: theme.Button?.algorithm,
          },
        },
      }}>
      {currentTheme}
      <AppRouting />
      <FloatButton onClick={() => setToggle(!toggle)} />

      <ThemeDrawer open={toggle} onClose={() => setToggle(false)} />
    </ConfigProvider>
  )
}
export default App