export const Status = ({ status }: { status: string }) => {
    return (
        status === "pending"
            ? (
                <div className="flex items-center gap-2">
                    <div className="w-fit py-1 px-4 rounded-md bg-orange-500" >
                        <span className="text-xs m-0 text-white font-bold uppercase">{status}</span>
                    </div>
                </div>
            )
            : (
                <div className="flex items-center gap-2">
                    <div className="w-fit py-1 px-4 rounded-md bg-green-500" >
                        <span className="text-xs m-0 text-white font-bold uppercase">{status}</span>
                    </div>
                </div>
            )
    )
}