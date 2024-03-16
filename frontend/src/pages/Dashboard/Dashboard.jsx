import { Outlet } from "react-router-dom"


const Dashboard = () => {
    return (
        <section className="flex">
            {/* TODO: Sidebar */}
            <Outlet />
        </section>
    )
}

export default Dashboard
