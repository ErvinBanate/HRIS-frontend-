import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { LoginForm } from "./Pages/Login/Login"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const routes = (
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/' element={<LoginForm />}/>
      </Routes>
    </Router>
  );

  return (
    <>
    <div className="flex min-h-screen items-center justify-center">
      {routes}
    </div>
    </>
  )
}

export default App
