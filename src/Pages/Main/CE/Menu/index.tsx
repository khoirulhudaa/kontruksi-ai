import { useEffect, useState } from "react";
import { Device } from "../../../../Assets";
import Button from "../../../../Components/Button";
import Header from "../../../../Components/Header";

const Menu = () => {

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
                            <Header title={'Selamat datang pemik proyek A'} />
                            <div className="relative mt-[60px] w-full h-max">
                                <Button text="Kembali" color="orange" style="ml-14" />
                                <div className="w-screen md:w-[100vw] mx-auto mt-[40px] md:flex px-6 items-center md:justify-between">
                                    <div className="w-[25%] cursor-pointer active:scale-[0.97] hover:brightness-[94%] duration-100 h-[180px] text-black flex flex-col items-center justify-center text-center bg-mainColor2 md:mb-0 mb-6 rounded-[10px] md:mx-8">
                                        <p className="text-[16px]">Database Proyek</p>
                                    </div>
                                    <div className="w-[25%] cursor-pointer active:scale-[0.97] hover:brightness-[94%] duration-100 h-[180px] text-black flex flex-col items-center justify-center text-center bg-mainColor2 md:mb-0 mb-6 rounded-[10px] md:mx-8">
                                        <p className="text-[16px]">Pembuatan Action Plan</p>
                                    </div>
                                    <div className="w-[25%] cursor-pointer active:scale-[0.97] hover:brightness-[94%] duration-100 h-[180px] text-black flex flex-col items-center justify-center text-center bg-mainColor2 md:mb-0 mb-6 rounded-[10px] md:mx-8">
                                        <p className="text-[16px]">Lihat Status Action Plan</p>
                                    </div>
                                    <div className="w-[25%] cursor-pointer active:scale-[0.97] hover:brightness-[94%] duration-100 h-[180px] text-black flex flex-col items-center justify-center text-center bg-mainColor2 md:mb-0 mb-6 rounded-[10px] md:mx-8">
                                        <p className="text-[16px]">Lihat Progres Dalam Peta</p>
                                    </div>
                                </div>
                                <div className="w-screen md:w-[100vw] mx-auto mt-[35px] md:flex px-6 md:items-center md:justify-between">    
                                    <div className="w-[25%] cursor-pointer active:scale-[0.97] hover:brightness-[94%] duration-100 h-[180px] text-black flex flex-col items-center justify-center text-center bg-mainColor2 md:mb-0 mb-6 rounded-[10px] md:mx-8">
                                        <p className="text-[16px]">Tanggapan Masalah Prioritas</p>
                                    </div>
                                    <div className="w-[25%] cursor-pointer active:scale-[0.97] hover:brightness-[94%] duration-100 h-[180px] text-black flex flex-col items-center justify-center text-center bg-mainColor2 md:mb-0 mb-6 rounded-[10px] md:mx-8">
                                        <p className="text-[16px]">Input Kegiatan Rekayasa</p>
                                    </div>
                                    <div className="w-[25%] cursor-pointer active:scale-[0.97] hover:brightness-[94%] duration-100 h-[180px] text-black flex flex-col items-center justify-center text-center bg-mainColor2 md:mb-0 mb-6 rounded-[10px] md:mx-8">
                                        <p className="mt-6 text-[12px]">Input Kegiatan Lainnya</p>
                                    </div>
                                    <div className="w-[25%] cursor-pointer active:scale-[0.97] hover:brightness-[94%] duration-100 h-[180px] text-black flex flex-col items-center justify-center text-center bg-mainColor2 md:mb-0 mb-6 rounded-[10px] md:mx-8">
                                        <p className="text-[16px]">Pembuatan Laporan</p>
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

export default Menu;
