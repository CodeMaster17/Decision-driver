
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import DashboardHome from './pages/Dashboard/DashboardHome'
import RuleComponent from './pages/Dashboard/ViewRule'
import ManageRule from './pages/Dashboard/ManageRule'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="/dashboard/home" element={<DashboardHome />} />
          <Route path="/dashboard/create-rule" element={<ManageRule />} />
          <Route path="/dashboard/view-rules" element={<RuleComponent />} />
        </Route>

      </Routes>

    </Router>
  )
}

export default App
