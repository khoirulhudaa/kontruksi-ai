import { useEffect, useState } from "react"
import Button from "../../../../Components/Button"
import Header from "../../../../Components/Header"
import InputField from "../../../../Components/Input"
import ListImages from "../../../../Components/ListImages"
import { Device } from "../../../../Assets"

const Image = () => {
 
    const [date, setDate] = useState<string>('')
    const [active, setActive] = useState<boolean>(false)
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
                            onClick={() => setActive(!active)}
                            name="date" 
                            onFocus={() => setActive(true)}
                            onBlur={() => setActive(false)}
                        />
                        <Button text="Perarui" color="orange" style="ml-4" />
                    </div>

                    <div className="w-[90vw] bg-mainColor2 rounded-[10px] p-8 mt-[44px] mx-auto">
                        <h2 className="font-bold text-[24px] text-center mb-4">Gambar</h2>
                        <ListImages />
                        <ListImages />
                        <ListImages />
                    </div>
                    <div className="w-[360px] mx-auto mt-[40px]">
                        <Button text="Kembali" color="black" typeButton="large" style="bg-black text-white w-full mt-10" />
                    </div>
                </div>
                </div>  
            ) :
                <div className="w-screen h-screen flex flex-col items-center justify-center">
                    <img src={Device} alt="notFound" className="mb-[24px] w-[200px]" />
                    <p className="text-[18px] font-normal">Kami sarankan akses melalui desktop.</p>
                </div> 
        }
        </>
  )
}

export default Image
