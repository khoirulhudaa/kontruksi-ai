import { useEffect, useState } from "react"
import Header from "../../../../Components/Header"
import InputField from "../../../../Components/Input"
import Button from "../../../../Components/Button"
import { Device } from "../../../../Assets"

const CheckListItem = () => {

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
        <div className='min-h-screen overflow-x-hidden'>
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
          </div>

          <div className="mt-8 w-[80vw] h-max rounded-[10px] bg-mainColor2 p-8 mx-auto">
            <h1 className="font-bold text-[22px] text-center">Lantai 1 - Zona A1</h1>
            <h1 className="font-bold text-[22px] text-center">Struktur / Kolom Beton Bertulang / Persiapan </h1>

            <div className="w-[80%] mt-10 mx-auto flex flex-col justify-center items-center">
                <form className="w-full">
                  <div className="mb-3">
                    <InputField 
                        name="-"
                        label="Jenis Pekerjaan"
                        value={'Kondisi pengisian material'}
                        typeInput="result"
                        onChange={() => null}
                      />
                  </div>
                  <div className="mb-3">
                    <InputField 
                        name="-"
                        label="Kondisi Diterima"
                        value={'Tidak boleh ada kerusakan, kayu busuk'}
                        typeInput="result"
                        onChange={() => null}
                      />
                  </div>
                  <h2 className="text-mainColor1 mt-[40px] mb-[24px] text-center">Prosedur Pengecekan</h2>
                  <div className="mb-3">
                    <InputField 
                        name="-"
                        label="Waktu"
                        value={'Saat kedatangan'}
                        typeInput="result"
                        onChange={() => null}
                      />
                  </div>
                  <div className="mb-3">
                    <InputField 
                        name="-"
                        label="Frekuensi"
                        value={'Saat pengiriman'}
                        typeInput="result"
                        onChange={() => null}
                      />
                  </div>
                  <div className="mb-3">
                    <InputField 
                        name="-"
                        label="Metode"
                        value={'Visual'}
                        typeInput="result"
                        onChange={() => null}
                      />
                  </div>
                  
                  <div className="w-[200px] mx-auto my-8">
                    <Button text="Gambar" color="black" style="bg-[#7B7B7B] w-full py-4 text-white mt-10" />
                  </div>
                 
                  <div className="mb-3">
                    <InputField 
                        name="-"
                        label="Remark"
                        value={'Ambil foto pada saat pengecekan'}
                        typeInput="result"
                        onChange={() => null}
                      />
                  </div>
                  <div className="mb-3">
                    <InputField 
                        name="-"
                        label="Progress"
                        value={'Ambil foto pada saat pengecekan'}
                        typeInput="range-input"
                        onChange={() => null}
                      />
                  </div>
                </form>
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

export default CheckListItem
