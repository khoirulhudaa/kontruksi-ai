import { useEffect, useState } from "react";
import { Device } from "../../../../Assets";
import Header from "../../../../Components/Header";

const Notification = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    const isDesktop = screenWidth >= 900;

  return (
    <>
        {
            isDesktop ? (
                <div className="w-screen min-h-screen pb-[40px]">
                   <Header title={'Notifikasi'} />
                    <div className="w-[70vw] mt-[120px] mx-auto bg-mainColor2 flex flex-col items-center justify-center rounded-[10px] px-6 pb-6 pt-3">
                        <p className="text-mainColor1 my-3 text-center">Today</p>
                        <div className="w-max h-[80px] p-5 rounded-[5px] mb-4 bg-[#FFBC96] text-black justify-between flex items-center">
                            <div className="w-max">
                                <div className="w-[45px] bg-mainColor1 rounded-full h-[45px] text-black flex items-center justify-center">
                                    RD
                                </div>
                            </div>
                            <div className="w-max mx-8">
                                <p className="text-[14px]">Engineer Roy approved checklist 1 / subgroup 1</p>
                            </div>
                            <div className="w-max flex flex-col justify-between items-end">
                                <p className="mb-6 text-[14px]">12:10 PM</p>
                                <p className="text-[14px]">Clear</p>
                            </div>
                        </div>
                        <div className="w-max h-[80px] p-5 rounded-[5px] mb-4 bg-[#FFBC96] text-black justify-between flex items-center">
                            <div className="w-max">
                                <div className="w-[45px] bg-mainColor1 rounded-full h-[45px] text-black flex items-center justify-center">
                                    RD
                                </div>
                            </div>
                            <div className="w-max mx-8">
                                <p className="text-[14px]">Engineer Roy approved checklist 1 / subgroup 1</p>
                            </div>
                            <div className="w-max flex flex-col justify-between items-end">
                                <p className="mb-6 text-[14px]">12:10 PM</p>
                                <p className="text-[14px]">Clear</p>
                            </div>
                        </div>
                        <div className="w-max h-[80px] p-5 rounded-[5px] mb-4 bg-[#FFBC96] text-black justify-between flex items-center">
                            <div className="w-max">
                                <div className="w-[45px] bg-mainColor1 rounded-full h-[45px] text-black flex items-center justify-center">
                                    RD
                                </div>
                            </div>
                            <div className="w-max mx-8">
                                <p className="text-[14px]">Engineer Roy approved checklist 1 / subgroup 1</p>
                            </div>
                            <div className="w-max flex flex-col justify-between items-end">
                                <p className="mb-6 text-[14px]">12:10 PM</p>
                                <p className="text-[14px]">Clear</p>
                            </div>
                        </div>
                        <div className="w-max h-[80px] p-5 rounded-[5px] mb-4 bg-white text-black justify-between flex items-center">
                            <div className="w-max">
                                <div className="w-[45px] bg-mainColor1 rounded-full h-[45px] text-black flex items-center justify-center">
                                    RD
                                </div>
                            </div>
                            <div className="w-max mx-8">
                                <p className="text-[14px]">Engineer Roy approved checklist 1 / subgroup 1</p>
                            </div>
                            <div className="w-max flex flex-col justify-between items-end">
                                <p className="mb-6 text-[14px]">12:10 PM</p>
                                <p className="text-[14px]">Clear</p>
                            </div>
                        </div>

                        <p className="text-mainColor1 my-3 text-center">Yesterday</p>
                        <div className="w-max h-[80px] p-5 rounded-[5px] mb-4 bg-white text-black justify-between flex items-center">
                            <div className="w-max">
                                <div className="w-[45px] bg-mainColor1 rounded-full h-[45px] text-black flex items-center justify-center">
                                    RD
                                </div>
                            </div>
                            <div className="w-max mx-8">
                                <p className="text-[14px]">Engineer Roy approved checklist 1 / subgroup 1</p>
                            </div>
                            <div className="w-max flex flex-col justify-between items-end">
                                <p className="mb-6 text-[14px]">12:10 PM</p>
                                <p className="text-[14px]">Clear</p>
                            </div>
                        </div>
                        <div className="w-max h-[80px] p-5 rounded-[5px] mb-4 bg-white text-black justify-between flex items-center">
                            <div className="w-max">
                                <div className="w-[45px] bg-mainColor1 rounded-full h-[45px] text-black flex items-center justify-center">
                                    RD
                                </div>
                            </div>
                            <div className="w-max mx-8">
                                <p className="text-[14px]">Engineer Roy approved checklist 1 / subgroup 1</p>
                            </div>
                            <div className="w-max flex flex-col justify-between items-end">
                                <p className="mb-6 text-[14px]">12:10 PM</p>
                                <p className="text-[14px]">Clear</p>
                            </div>
                        </div>
                    </div>
                </div>
            ):
                <div className="w-screen h-screen flex flex-col items-center justify-center">
                    <img src={Device} alt="notFound" className="mb-[24px] w-[200px]" />
                    <p className="text-[18px] font-normal">Kami sarankan akses melalui desktop.</p>
                </div>
        }
    </>
  )
}

export default Notification
