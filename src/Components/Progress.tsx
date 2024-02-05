import React from "react"
import { ProgressProps } from "../Models/ComponentModels"

const ProgressBar: React.FC<ProgressProps> = ({
    label,
    percentation,
}) => {
  return (
    <div className="relative w-full h-[58px] mb-4 bg-white py-4 px-6 flex items-center">
        <div className="w-[20%]">{label}</div>
        <div className="w-[60%] bg-red-400">
            <div className="w-full h-full p-2 flex relative items-center bg-rangeGrey">
            <div className="w-[20%] h-[10px] absolute z-[3] rounded-full bg-blue-500"></div>
            <div className="w-[40%] h-[10px] absolute z-[2] rounded-full bg-green-500"></div>
            <div className="w-[70%] h-[10px] absolute z-[1] rounded-full bg-orange-500"></div>
            </div>
        </div>
        <div className="w-[20%] flex justify-end">{percentation}</div>
    </div>
  )
}

export default ProgressBar
