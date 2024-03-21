
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import DashboardHome from './pages/Dashboard/DashboardHome'
import RuleComponent from './pages/Dashboard/ViewRuleDetails'
import CreateRule from './pages/Dashboard/CreateRule'

import ViewAllRules from './pages/Dashboard/ViewAllRules'
import Guide from './pages/Dashboard/Guide'
import Examples from './pages/Dashboard/Examples'
import Users from './pages/Dashboard/Users'
import TestRule from './pages/Dashboard/TestRule'
import TestRuleDetails from './pages/Dashboard/TestRuleDetails'
import Navbar from './components/Navbar'
import ErrorComponent from './pages/Dashboard/ErrorComponent'

const MONGO_URI = import.meta.env.VITE_MONGODB_URI
console.log(MONGO_URI)

function App() {

  return (
    <>
      {/* <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
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
