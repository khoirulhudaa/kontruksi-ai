import { useEffect, useState } from "react";
import { Device } from "../../../../Assets";
import Header from "../../../../Components/Header";
import SidebarInformation from "../../../../Components/SidebarInformation";
// import { twMerge } from 'tailwind-merge';

// const text = ['text-white'];
// const content = ['bg-blue-500'];

// const merge1 = twMerge(text, content);

const StatusDocument = () => {
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
                        <h2 className="text-center ml-auto mr-auto font-bold mt-2 text-[20px]">Status Dokumen Non-Conformance</h2>
                        <table className="mt-4 w-full">
                          <thead>
                            <tr className="w-full">
                              <th>No</th>
                              <th>Dokumen</th>
                              <th className="w-[40%]">Perihal</th>
                              <th>Target</th>
                              <th>Status FU</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>NCR</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>SCAR</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>SITE MEMO</td>
                              <td>-</td>
                              <td>-</td>
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
  
  export default StatusDocument
  