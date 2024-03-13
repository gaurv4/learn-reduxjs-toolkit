'use client'
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hooks"
import { increament, decreament } from "@/app/redux/slices/counter"

const counter = () => {
    const count = useAppSelector((state) => state.counter)
    const dispatch = useAppDispatch()
    return (
        <>
            <div className="flex flex-col gap-7 mt-28 justify-center items-center">
                <h1 className="text-6xl">{count}</h1>
                <div className="flex gap-4">
                    <button 
                        onClick={() => dispatch(increament())} 
                        className="border rounded-md py-1 px-3">
                        increment
                    </button>
                    <button 
                        onClick={() => dispatch(decreament())} 
                        className="border rounded-md py-1 px-3">
                        decrement
                    </button>
                </div>
            </div>
        </>
    )
}

export default counter
