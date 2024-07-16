import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {

    const [dialogOpen, setDialogOpen] = useState(false)
    function OpenDialog() {
        setDialogOpen(true)
        console.log(dialogOpen)
    }
    function closeModal() {
        setDialogOpen(false)
    }
    useEffect(() => {
        OpenDialog()
    }, [])

    return (
        <>
            <AlertDialog open={dialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <div className="w-full h-40" >
                            <img src="/bank.jpg" alt="BankImage" className="size-40" />
                        </div>
                        <AlertDialogTitle>
                            Disclaimer: This application is not for regular users.
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            This application is not meant for regular users. It is built for the decision makers in banks.
                            <br />
                            <br />
                            Rule builder applications are commonly used in the banking and financial sector to automate and manage decision-making processes, such as lending loans, assessing credit risk, and making business decisions.
                            <br />
                            <br />
                            But ofcourse you can try it!!
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={closeModal}>Ok</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <div className=" w-full  h-screen flex gap-8">
                <div className="w-1/2 pl-20 flex gap-8 items-center custom-img">
                    <div className='w-full'>
                        <h1 className='lg:text-6xl 2xl:text-7xl font-bold text-black'>Rule Building</h1>
                        <h3 className='lg:text-6xl 2xl:text-7xl font-bold text-black mt-5'>Made Easy through</h3>
                        <h3 className='lg:text-6xl 2xl:text-7xl font-bold text-[#ADFA1D] mt-5 flex items-center gap-4'>Decision Driver

                        </h3>
                        <Link to="/dashboard/home" className="flex justify-center rounded bg-primary p-2 font-medium text-white w-[130px] mt-8 ">
                            Dashboard ➜
                        </Link>
                        <br />
                        <div className="w-full rounded-md p-4 flex justify-start items-start gap-4 bg-[#f0f8ff]">
                            <div>
                                <img src="/idea-bulb.png" alt="" className="w-10 h-10" />
                            </div>
                            <div className="w-full">

                                <p className="2xl:text-xl">
                                    Banks extend their services to clients spanning diverse sectors,
                                    including retail, healthcare, technology, and more. these clients
                                    showcase varied behavior characterized by payment patterns,
                                    cibil score etc.
                                </p>
                                <p className="2xl:text-xl">
                                    To handle this, banks need to:
                                    <ul>
                                        <li>
                                            1. Automate their decision-making to cater to client’s digital
                                            needs
                                        </li>
                                        <li>
                                            2. Update their decision strategies quickly to remain
                                            competitive
                                        </li>
                                        <li>
                                            3. Handle complex cases to cater to all these variations
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-1/2 flex items-center'>
                    <div className='w-full 2xl:h-[600px] my-12 border-l-2 border-y-2 border-slate-300 rounded-l-2xl pl-16 py-16 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>

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
        </>
    )
}

export default Home
