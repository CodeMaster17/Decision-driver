
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import CreateRule from './pages/Dashboard/CreateRule'
import Dashboard from './pages/Dashboard/Dashboard'
import DashboardHome from './pages/Dashboard/DashboardHome'
import RuleComponent from './pages/Dashboard/ViewRuleDetails'
import Home from './pages/Home'

import Navbar from './components/Navbar'
import ErrorComponent from './pages/Dashboard/ErrorComponent'
import Examples from './pages/Dashboard/Examples'
import Guide from './pages/Dashboard/Guide'
import TestRule from './pages/Dashboard/TestRule'
import TestRuleDetails from './pages/Dashboard/TestRuleDetails'
import Users from './pages/Dashboard/Users'
import ViewAllRules from './pages/Dashboard/ViewAllRules'
import Login from './pages/Login'



function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path="/dashboard/guide" element={<Guide />} />
            <Route path="/dashboard/examples" element={<Examples />} />
            <Route path="/dashboard/home" element={<DashboardHome />} />
            <Route path="/dashboard/create-rule" element={<CreateRule />} />
            {/* <Route path="/dashboard/create-rule" element={<ManageRule />} >
            <Route path="/dashboard/create-rule" element={<ManageRule />} />
            <Route path="/dashboard/create-rule/view-raw" element={<RuleComponent />} />
            <Route path="/dashboard/create-rule/view-graph" element={<RuleComponent />} />
          </Route> */}
            <Route path="/dashboard/view-rule" element={<ViewAllRules />} />
            <Route path="/dashboard/view-rule/:id" element={<RuleComponent />} />
            <Route path="/dashboard/view-rule" element={<ViewAllRules />} />
            <Route path="/dashboard/view-rule/:id" element={<RuleComponent />} />
            <Route path="/dashboard/users" element={<Users />} />
            <Route path="/dashboard/test-rule" element={<TestRule />} />
            <Route path="/dashboard/test-rule/:id" element={<TestRuleDetails />} />
            <Route path="/dashboard/*" element={<ErrorComponent />} />
          </Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
