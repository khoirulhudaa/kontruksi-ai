import { useEffect, useState } from "react";
import { Board1, Board2, Device } from "../../../../Assets";
import Button from "../../../../Components/Button";
import Header from "../../../../Components/Header";

const Board = () => {
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
                    <div className="w-screen h-screen">
                        <Header title={'Selamat datang pemilik proyek!'} />
                        <div className="w-screen w-[84vw] md:w-[60vw] mx-auto mt-[120px] flex flex-col justify-center items-center">
                        <div className="w-full h-[106px] border-[1px] px-6 border-slate-400 flex items-center justify-between bg-white shadow-lg mb-[31px]">
                            <div className="w-[30%]">
                                <img src={Board1} alt="board-image" />                        
                            </div>
                            <div className="w-[30%]">
                                <h2 className="text-black font-bold text-[20px] mb-[16px]">Project 1</h2>
                                <p className="font-normal text-[12px]">Brief project information</p>
                            </div>
                            <div className="w-[30%[">
                                <Button typeButton="large" text="view" color="grey" />
                            </div>
                        </div>
                        <div className="w-full h-[106px] border-[1px] px-6 border-slate-400 flex items-center justify-between bg-white shadow-lg mb-[31px]">
                            <div className="w-[30%]">
                                <img src={Board2} alt="board-image" />                
                            </div>
                            <div className="w-[30%]">
                                <h2 className="text-black font-bold text-[20px] mb-[16px]">Project 1</h2>
                                <p className="font-normal text-[12px]">Brief project information</p>
                            </div>
                            <div className="w-[30%[">
                                <Button typeButton="large" text="view" color="grey" />
                            </div>
                        </div>
                        <div className="w-full h-[106px] border-[1px] px-6 border-slate-400 flex items-center justify-between bg-white shadow-lg mb-[31px]">
                            <div className="w-[30%]">
                                <img src={Board2} alt="board-image" />                
                            </div>
                            <div className="w-[30%]">
                                <h2 className="text-black font-bold text-[20px] mb-[16px]">Project 1</h2>
                                <p className="font-normal text-[12px]">Brief project information</p>
                            </div>
                            <div className="w-[30%[">
                                <Button typeButton="large" text="view" color="grey" />
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
};

export default Board;
