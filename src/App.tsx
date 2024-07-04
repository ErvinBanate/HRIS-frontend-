import { ThemeProvider } from "./components/theme-provider"
import UserDash from "./UserDash"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <UserDash/>
    
    </ThemeProvider>
  )
}
export default App
