import { Skeleton } from "../ui/skeleton"


const RuleCardSkeleton = () => {
    return (
        <div className="flex flex-wrap gap-8">
            <Skeleton className="w-1/4 h-32" />
            <Skeleton className="w-1/4 h-32" />
            <Skeleton className="w-1/4 h-32" />
            <Skeleton className="w-1/4 h-32" />
            <Skeleton className="w-1/4 h-32" />
        </div>
    )
}

export default RuleCardSkeleton
