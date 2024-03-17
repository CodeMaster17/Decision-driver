/* eslint-disable react/prop-types */
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,

} from "@/components/ui/card"
import { Button } from "./ui/button"
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

const ActivityCard = ({ title, description, testStatus, id }) => {



    return (
        <>

            <Card className="w-1/4">
                <CardHeader>
                    <CardTitle className="w-full flex justify-between">
                        {title}
                        <p className="text-sm">

                            {testStatus ?
                                <button className="bg-green-400 rounded-md px-1 text-white flex justify-center items-center">
                                    <GoDotFill />
                                    Tested
                                </button>
                                :
                                <button className="bg-red-400 rounded-md px-1 text-white flex justify-center items-center">
                                    <GoDotFill />
                                    Not Tested
                                </button>
                            }
                        </p>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>{description}</CardDescription>

                </CardContent>
                <CardFooter className="flex w-full justify-between">
                    <CardDescription></CardDescription>
                    <CardDescription>
                        <Button asChild variant="ghost" className="underline">
                            <NavLink to={`/dashboard/view-rule/${id}`} >View Rule &nbsp; <FaArrowRight /> </NavLink>
                        </Button>
                    </CardDescription>

                </CardFooter>
            </Card>
        </>
    )
}

export default ActivityCard
