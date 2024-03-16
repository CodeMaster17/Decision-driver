
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import DashboardHome from './pages/Dashboard/DashboardHome'
import RuleComponent from './pages/Dashboard/ViewRule'
import CreateRule from './pages/Dashboard/CreateRule'
import { Toaster } from 'react-hot-toast';
function App() {

  return (
    <>
      {/* <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path="/dashboard/home" element={<DashboardHome />} />
            <Route path="/dashboard/create-rule" element={<CreateRule />} />
            {/* <Route path="/dashboard/create-rule" element={<ManageRule />} >
            <Route path="/dashboard/create-rule" element={<ManageRule />} />
            <Route path="/dashboard/create-rule/view-raw" element={<RuleComponent />} />
            <Route path="/dashboard/create-rule/view-graph" element={<RuleComponent />} />
          </Route> */}
            <Route path="/dashboard/view-rule" element={<RuleComponent />} />
          </Route>

        </Routes>
        <Toaster />

      </Router>

    </>
  )
}

export default App
