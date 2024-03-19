import { Button } from "@/components/ui/button"
import { CiLogout } from "react-icons/ci"
import { Link } from "react-router-dom"
import { IoIosRefresh } from "react-icons/io";

const ErrorComponent = () => {
    const handleReload = () => {
        window.location.reload();
    };
    return (
        <div className="w-full flex flex-col justify-center items-center h-screen">
            <p className="text-4xl">Something went wrong!</p>
            <br />
            <div className="flex gap-4">

                <Button asChild>
                    <Link to="/">
                        <div className="mr-3 block"><CiLogout className="size-6" /></div>
                        Back to home
                    </Link>
                </Button>
                <Button onClick={handleReload}>
                    Refresh
                    &nbsp;
                    <div className="mr-3 block"><IoIosRefresh className="size-5" /></div>
                </Button>
            </div>
        </div>
    )
}

export default ErrorComponent
