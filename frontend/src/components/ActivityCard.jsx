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
import { Link, NavLink } from "react-router-dom";

const ActivityCard = ({ title, description, testStatus, id }) => {



    return (
        <>

            <Card className="w-1/4">
                <CardHeader>
                    <CardTitle>{title} : {id} </CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>{testStatus ? "Tested" : "Not Tested"}</CardDescription>
                </CardContent>
                <CardFooter className="flex w-full justify-between">
                    <CardDescription>{description}</CardDescription>
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
