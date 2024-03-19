import { FiBookOpen } from "react-icons/fi"
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="w-full text-2xl border-2 flex items-center justify-between pr-8 font-semibold gap-4 pl-8 shadow-xl h-20 sticky top-0 z-20 bg-white">
      <div className=" flex items-center gap-6 p-4">
        <img src="/logo.png" alt="logo" className="w-12 h-12" />
        <h3 className='text-xl font-bold text-black flex items-center gap-4'>Decision Driver
        </h3>
      </div>
      <Link to="/dashboard/guide" className="text-black font-normal text-xl hover:underline flex gap-1 items-center"> <div className="mr-3 block"><FiBookOpen className="size-5" /></div> Guide</Link>
    </div>
  )
}

export default Navbar
