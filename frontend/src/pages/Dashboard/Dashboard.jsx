import { Link, Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar"


const Dashboard = () => {
    return (
        <section className="flex">
            <div className="w-[15vw] border-2  h-screen sticky">
                <ul>
                    <li>
                        <Link to="/dashboard/home">
                            Dashboard
                        </Link>
                    </li>
                    <li>

                        <Link to="/dashboard/create-rule">
                            Create Rules
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/view-rule">
                            View Rules
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="w-full h-screen">
                <Navbar />
                {/* TODO: Sidebar */}
                <Outlet />
            </div>
        </section>
    )
}

export default Dashboard
