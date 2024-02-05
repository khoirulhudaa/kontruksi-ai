import { useEffect, useState } from "react"
import { Device } from "../../../../Assets"
import Header from "../../../../Components/Header"
import InputField from "../../../../Components/Input"
import SidebarInformation from "../../../../Components/SidebarInformation"

const information = () => {

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
                    <div className="mt-[80px] flex w-screen px-8">
                        <SidebarInformation />
                        <div className="w-[70%] ml-8 h-max bg-mainColor2 p-5 rounded-[10px]">
                            <h2 className="text-center ml-auto mr-auto font-bold mt-2 text-[20px]">Informasi Proyek</h2>
                            <form className="mt-8">
                                <div className="mb-5">
                                    <InputField 
                                        name="proyek_name"
                                        label="Nama proyek"
                                        id="name"
                                        value={'Indonesia 1'}
                                        typeInput="result"
                                    />
                                </div>
                                <div className="mb-5">
                                    <InputField 
                                        name="type"
                                        label="Jenis Bangunan"
                                        id="type"
                                        value={'Perkantoran, Service Apartment & Retail'}
                                        typeInput="result"
                                    />
                                </div>
                                <div className="mb-5">
                                    <InputField 
                                        name="proyek_name"
                                        label="Lokasi Proyek"
                                        id="location"
                                        value={'Indonesia 1 j2kjsdksjdksjk '}
                                        typeInput="textarea-input"
                                    />
                                </div>
                                <div className="mb-5">
                                    <InputField 
                                        name="owner"
                                        label="Pemilik"
                                        id="owner"
                                        value={'PT Surya Indonesia Satu Property'}
                                        typeInput="result"
                                    />
                                </div>
                                <div className="text-center w-[240px] rounded-lg bg-black px-2 py-1 text-white mx-auto my-5">
                                    Konsultan
                                </div>
                                <div className="mb-5">
                                    <InputField 
                                        name="Arsitektur"
                                        label="Konsultan Arsitektur"
                                        id="Arsitektur"
                                        value={'A.M. Associate (Sing) Pte. Ltd PT. Anggara Archi Team'}
                                        typeInput="textarea-input"
                                    />
                                </div>
                                <div className="mb-5">
                                    <InputField 
                                        name="Struktur"
                                        label="Konsultan Struktur"
                                        id="Struktur"
                                        value={'PT. Davy Sukamta Partnership'}
                                        typeInput="textarea-input"
                                    />
                                </div>
                                <div className="mb-5">
                                    <InputField 
                                        name="MEP"
                                        label="Konsultan MEP"
                                        id="MEP"
                                        value={'Meinhardt Singapore Pte. Ltd PT. Arnan Pratama Consultant'}
                                        typeInput="textarea-input"
                                    />
                                </div>
                                <div className="mb-5">
                                    <InputField 
                                        name="Interior"
                                        label="Konsultan Interior"
                                        id="Interior"
                                        value={'AMA Pte. Ltd.'}
                                        typeInput="textarea-input"
                                    />
                                </div>
                                <div className="mb-5">
                                    <InputField 
                                        name="Landscape"
                                        label="Konsultan Landscape"
                                        id="Landscape"
                                        value={'SALD Pte. Ltd.'}
                                        typeInput="textarea-input"
                                    />
                                </div>
                                <div className="mb-5">
                                    <InputField 
                                        name="Civil"
                                        label="Civil & Infrastruktur"
                                        id="Civil"
                                        value={'Aramsa Infrayasa'}
                                        typeInput="textarea-input"
                                    />
                                </div>
                                <div className="mb-5">
                                    <InputField 
                                        name="Facade"
                                        label="Konsultan Facade"
                                        id="Facade"
                                        value={'Aurecon (Singapore) Pte. Ltd. Paul Adam'}
                                        typeInput="textarea-input"
                                    />
                                </div>
                                <div className="mb-5">
                                    <InputField 
                                        name="AMDAL"
                                        label="Konsultan AMDAL"
                                        id="AMDAL"
                                        value={'Aurecon (Singapore) Pte. Ltd. Paul Adam'}
                                        typeInput="textarea-input"
                                    />
                                </div>
                                <div className="mb-5">
                                    <InputField 
                                        name="MK"
                                        label="Konsultan MK"
                                        id="MK"
                                        value={'PT. Tethagra Catur Matra'}
                                        typeInput="textarea-input"
                                    />
                                </div>
                                <div className="text-center w-[240px] rounded-lg bg-black px-2 py-1 text-white mx-auto my-5">
                                    Luas Proyek
                                </div>
                                <div className="mb-5">
                                    <InputField 
                                        name="LuasArea"
                                        label="Luas Area Proyek"
                                        id="LuasArea"
                                        value={'19.044 m^2'}
                                        typeInput="textarea-input"
                                    />
                                </div>
                                <div className="mb-5">
                                    <InputField 
                                        name="LuasTerbangun"
                                        label="Luas Proyek Terbangun"
                                        id="LuasTerbangun"
                                        value={'11.044 m^2'}
                                        typeInput="textarea-input"
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

export default information
