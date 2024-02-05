import React from "react"
import Button from "./Button"
import { SidebarProps } from "../Models/ComponentModels"

const Sidebar: React.FC<SidebarProps> = ({
    data,
    onClick,
}) => {
  return (
    <div className="w-[30%] h-max flex rounded-[10px] flex-col p-5 bg-mainColor2 justify-between items-center">
        <div className="relative w-full  min-h-[500px]">
            <h2 className="mb-6 font-bold text-center text-[20px]">Map Lantai</h2>
            {
                data && data.length > 0 ? (
                    data.map((data: any, index: number) => (
                        <Button key={index} text={data?.text} onClick={onClick} color="orange" typeButton="large" style="mb-3 w-full" />
                    ))
                ):
                    null
            }
        </div>
        <Button text="Kembali" color="black" style="bg-black text-white w-full mt-10" />
    </div>
  )
}

export default Sidebar
