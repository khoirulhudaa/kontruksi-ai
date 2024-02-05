import { useEffect, useState } from "react";
import { Boaard, Device, Notif, Profile } from "../../../../Assets";
import Header from "../../../../Components/Header";

const Home = () => {

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
                            <div className="w-screen md:w-[80vw] mx-auto mt-[120px] md:mt-[143px] md:flex items-center">
                                <div className="w-[30%] w-[94%] cursor-pointer active:scale-[0.97] hover:brightness-[94%] duraiont-100 h-[180px] text-black flex flex-col items-center justify-center text-center bg-mainColor2 md:mb-0 mb-6 rounded-[10px]">
                                    <img src={Boaard} alt="icon" />
                                    <p className="mt-6 text-[20px]">Papan Utama</p>
                                </div>
                                <div className="w-[30%] w-[94%] cursor-pointer active:scale-[0.97] hover:brightness-[94%] duraiont-100 h-[180px] text-black flex flex-col items-center justify-center text-center bg-mainColor2 md:mb-0 mb-6 rounded-[10px] md:mx-[83px]">
                                    <img src={Notif} alt="icon" />
                                    <p className="mt-6 text-[20px]">Notifikasi</p>
                                </div>
                                <div className="w-[30%] w-[94%] cursor-pointer active:scale-[0.97] hover:brightness-[94%] duraiont-100 h-[180px] text-black flex flex-col items-center justify-center text-center bg-mainColor2 md:mb-0 mb-6 rounded-[10px]">
                                    <img src={Profile} alt="icon" />
                                    <p className="mt-6 text-[20px]">Profile pengguna</p>
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

export default Home;
