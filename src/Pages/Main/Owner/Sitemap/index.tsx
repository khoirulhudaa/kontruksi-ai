import { useEffect, useState } from "react"
import { Device, Map } from "../../../../Assets"
import Button from "../../../../Components/Button"
import Header from "../../../../Components/Header"
import InputField from "../../../../Components/Input"
import Sidebar from "../../../../Components/Sidebar"

const Sitemap = () => {

    const [date, setDate] = useState<string>('')
    const [activeName, setActiveName] = useState<string>('')
    const [active, setActive] = useState<boolean>(false)
    const [activeSidebar, setActiveSidebar] = useState<string>('')

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

    const dataSidebar = [
        {
            text: 'Lantai 1',
            onClick: () => setActiveSidebar('Lantai1')
        },
        {
            text: 'Lantai 2',
            onClick: () => setActiveSidebar('Lantai2')
        },
        {
            text: 'Lantai 3',
            onClick: () => setActiveSidebar('Lantai3')
        },
        {
            text: 'Lantai 4',
            onClick: () => setActiveSidebar('Lantai4')
        },
        {
            text: 'Lantai 5',
            onClick: () => setActiveSidebar('Lantai5')
        },
    ]

    return (
        <>
            {
                isDesktop ? (
                    <div className="min-h-screen overflow-x-hidden pb-8">
                        <Header title={'Papan Proyek A'} />
                        <div className="w-screen">
                            <div className="w-max mt-[60px] ml-auto mr-auto flex items-center">
                                <InputField 
                                    typeInput="date-input" 
                                    value={date} 
                                    onChange={(e: any) => {
                                        setActive(!active)
                                        setDate(e)
                                    }}
                                    placeholder="Masukan tanggal"
                                    active={active}
                                    activeName={activeName}
                                    onClick={() => setActive(!active)}
                                    id="date"
                                    name="date" 
                                    onFocus={() => {
                                        setActive(true)
                                        setActiveName('date')
                                    }}
                                    onBlur={() => {
                                        setActive(false)
                                        setActiveName('')
                                    }}
                                />
                                <Button text="Perarui" color="orange" style="ml-4" />
                            </div>
                            <div className="mt-8 flex w-screen px-8">
                                <Sidebar active={activeSidebar} data={dataSidebar} />
                                <div className="w-[70%] ml-8 h-max bg-mainColor2 p-3 rounded-[10px]">
                                    <h2 className="text-center ml-auto mr-auto font-bold text-[20px]">Sitemap Lantai1</h2>
                                    <div className="w-full mt-8 flex items-center justify-between">
                                        <div className="w-[22%] mx-2 h-max flex flex-col items-center justify-center">
                                            <p className="mb-4">Tipe action plan</p>
                                            <InputField 
                                                name="typeAction" 
                                                id="typeAction"
                                                typeInput="select-input" 
                                                onFocus={() => {
                                                    setActive(true)
                                                    setActiveName('typeAction')
                                                }}
                                                activeName={activeName}
                                                active={active}
                                                onBlur={() => {
                                                    setActive(false)
                                                    setActiveName('')
                                                }}
                                            />
                                        </div>
                                        <div className="w-[22%] mx-2 h-max flex flex-col items-center justify-center">
                                            <p className="mb-4">Tipe action plan</p>
                                            <InputField 
                                                name="plan1" 
                                                id="plan1"
                                                typeInput="select-input" 
                                                onFocus={() => {
                                                    setActive(true)
                                                    setActiveName('plan1')
                                                }}
                                                activeName={activeName}
                                                active={active}
                                                onBlur={() => {
                                                    setActive(false)
                                                    setActiveName('')
                                                }}
                                            />
                                        </div>
                                        <div className="w-[22%] mx-2 h-max flex flex-col items-center justify-center">
                                            <p className="mb-4">Tipe action plan</p>
                                            <InputField 
                                                name="plan2" 
                                                id="plan2"
                                                typeInput="select-input" 
                                                onFocus={() => {
                                                    setActive(true)
                                                    setActiveName('plan2')
                                                }}
                                                activeName={activeName}
                                                active={active}
                                                onBlur={() => {
                                                    setActive(false)
                                                    setActiveName('')
                                                }}
                                            />
                                        </div>
                                        <div className="w-[22%] mx-2 h-max flex flex-col items-center justify-center">
                                            <p className="mb-4">Tipe action plan</p>
                                            <InputField 
                                                name="plan3"
                                                id="plan3"
                                                typeInput="select-input" 
                                                onFocus={() => {
                                                    setActive(true)
                                                    setActiveName('plan3')
                                                }}
                                                activeName={activeName}
                                                active={active}
                                                onBlur={() => {
                                                    setActive(false)
                                                    setActiveName('')
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-8 w-full overflow-hidden flex justify-center items-center rounded-md h-max">
                                        <img src={Map} alt="map" className="w-full h-full bg-coontain" />
                                    </div>
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


export default Sitemap