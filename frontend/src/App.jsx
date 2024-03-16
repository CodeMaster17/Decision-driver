
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import DashboardHome from './pages/Dashboard/DashboardHome'
import RuleComponent from './pages/Dashboard/ViewRule'
import CreateRule from './pages/Dashboard/CreateRule'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="/dashboard/home" element={<DashboardHome />} />
          <Route path="/dashboard/create-rule" element={<CreateRule />} />
          <Route path="/dashboard/view-rules" element={<RuleComponent />} />
          {/* <Route path="/create-action" element={<h1>Create Action</h1>} />
          <Route path="/view-rules" element={<h1>View Rules</h1>} />
          <Route path="/view-actions" element={<h1>View Actions</h1>} /> */}
        </Route>

      </Routes>

    </Router>
  )
}

export default App
