import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className=" w-full  h-screen flex">
            <div className="w-1/2 pl-20 flex items-center">
                <div className='w-full'>
                    <h1 className='text-7xl font-bold text-black'>Rule Building</h1>
                    <h3 className='text-7xl font-bold text-black mt-5'>Made Easy</h3>
                    <Link to="/dashboard/home" className="flex justify-center rounded bg-primary p-2 font-medium text-gray w-[130px] mt-8">
                        Dashboard ➜
                    </Link>
                </div>
            </div>
            <div className='w-1/2 flex items-center'>
                <div className='w-full h-[600px] my-12 border-l-2 border-y-2 border-slate-300 rounded-l-2xl pl-16 py-16 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>

                    <h1 className='w-full text-3xl font-bold text-black border-l-2 border-y-2 border-slate-300 rounded-l-lg flex py-2 pl-5'>Features</h1>
                    <div className='mt-10 ml-10 text-xl font-semibold text-black leading-[3.5rem]'>
                        <p><span className='text-primary'>➜</span> Dynamic Rule Builder</p>
                        <p><span className='text-primary'>➜</span> Interactive UI</p>
                        <p><span className='text-primary'>➜</span> Dynamic SQL Generation</p>
                        <p><span className='text-primary'>➜</span> Testing on real database</p>
                        <p><span className='text-primary'>➜</span> Combine multiple rules</p>
                        <p><span className='text-primary'>➜</span> Make rule and their respective action</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
