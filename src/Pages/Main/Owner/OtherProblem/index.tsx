import { useEffect, useState } from "react";
import Header from "../../../../Components/Header";
import SidebarInformation from "../../../../Components/SidebarInformation";
import { Device } from "../../../../Assets";

const OtherProblem = () => {
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
                <div className="min-h-screen overflow-hidden pb-[60px]">
                <Header title={'Papan Proyek A'} />
                <div className="mt-[80px] flex w-screen px-8">
                    <SidebarInformation />
                    <div className="w-[70%] ml-8 h-max bg-mainColor2 p-3 rounded-[10px]">
                        <h2 className="text-center ml-auto mr-auto font-bold mt-2 text-[20px]">Daftar Lainnya</h2>
                        <table className="mt-4 w-full">
                          <thead>
                            <tr className="w-full">
                              <th>No</th>
                              <th className="w-[30%]">Issue</th>
                              <th className="w-[30%]">Penjelasan</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Milestone SLF</td>
                              <td>Penjelasan ulang secara singkat</td>
                              <td>-</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Milestone SLF</td>
                              <td>Penjelasan ulang secara singkat</td>
                              <td>-</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Milestone SLF</td>
                              <td>Penjelasan ulang secara singkat</td>
                              <td>-</td>
                            </tr>
                          </tbody>
                        </table>
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
  
  export default OtherProblem
  