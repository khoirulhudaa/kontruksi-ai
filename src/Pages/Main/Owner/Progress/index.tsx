import { useEffect, useState } from "react";
import { Device } from "../../../../Assets";
import Header from "../../../../Components/Header";
import ProgressBar from "../../../../Components/Progress";
import SidebarInformation from "../../../../Components/SidebarInformation";

const Progress = () => {
    // const [active, setActive] = useState<boolean>(false)
    // const [date, setDate] = useState<string>('')
    // const [activeName, setActiveName] = useState<string>('')

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
                    <div className="w-[70%] ml-8 h-max bg-mainColor2 p-5 rounded-[10px]">
                      <div className="w-full h-max bg-mainColor2">
                          <h2 className="text-center ml-auto mr-auto font-bold mt-2 text-[20px]">Progres Pekerjaan</h2>
                          <div className="my-8 h-max w-full">
                            <ProgressBar label="Persiapan" percentation={'1.5% / 1.2%'} />
                            <ProgressBar label="B. Utama" percentation={'26.1% / 49.3%'} />
                            <ProgressBar label="B. Penunjang" percentation={'2.2% / 2.4%'} />
                            <ProgressBar label="Pos Jaga" percentation={'0.4% / 0.0%'} />
                            <ProgressBar label="B. Utilitas" percentation={'3.1% / 3.9%'} />
                            <ProgressBar label="Landscape" percentation={'4.0% / 0.4%'} />
                            <ProgressBar label="TOTAL" percentation={'37.5% / 57.4%'} />
                          </div>
                      </div>
                      <div className="w-[96%] mt-10 ml-8 h-max bg-mainColor2 p-3 rounded-[10px]">
                          <h2 className="text-center ml-auto mr-auto font-bold mt-2 text-[20px]">Data Progres Pekerjaan Tabular</h2>
                          <table className="mt-4 w-full">
                            <thead>
                              <tr className="w-full">
                                <th>Item Pekerjaan</th>
                                <th>Rencana s/d Minggu Ini (%)</th>
                                <th>Realisasi Minggu Ini (%)</th>
                                <th>Realisasi s/d Minggu Ini (%)</th>
                                <th>Deviasi (%)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Persiapan</td>
                                <td>1,256</td>
                                <td>0,005</td>
                                <td>1,519</td>
                                <td>0,263</td>
                              </tr>
                              <tr>
                                <td>Persiapan</td>
                                <td>1,256</td>
                                <td>0,005</td>
                                <td>1,519</td>
                                <td>0,263</td>
                              </tr>
                              <tr>
                                <td>Persiapan</td>
                                <td>1,256</td>
                                <td>0,005</td>
                                <td>1,519</td>
                                <td>0,263</td>
                              </tr>
                              <tr>
                                <td>Persiapan</td>
                                <td>1,256</td>
                                <td>0,005</td>
                                <td>1,519</td>
                                <td>0,263</td>
                              </tr>
                              <tr>
                                <td className="bg-rangeGrey text-black">Persiapan</td>
                                <td className="bg-rangeGrey text-black">1,256</td>
                                <td className="bg-rangeGrey text-black">0,005</td>
                                <td className="bg-rangeGrey text-black">1,519</td>
                                <td className="bg-rangeGrey text-black">0,263</td>
                              </tr>
                              {/* Tambahkan baris lainnya sesuai kebutuhan */}
                            </tbody>
                          </table>
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

export default Progress
