import { useEffect, useState } from "react";
import { Device, Foto } from "../../../../Assets";
import Button from "../../../../Components/Button";
import Header from "../../../../Components/Header";
import InputField from "../../../../Components/Input";

const Profile = () => {
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
                <div className="w-screen min-h-screen pb-[40px]">
                   <Header title={'Profil Pengguna'} />
                    <div className="w-[70vw] mt-[120px] mx-auto bg-mainColor2 flex flex-col items-center justify-center rounded-[10px] px-6 py-6">
                        <div className="w-[190px] h-[190px] rounded-full overflow-hidden flex justify-center items-center bg-cover bg-no-repeat">
                            <img src={Foto} alt="foto-profile" />
                        </div>
                        <div className="w-max flex my-8 items-center justify-between">
                            <Button color="grey" text="Change Photo" style="mr-6" />
                            <Button color="grey" text="Edit Profile" style="ml-6" />
                        </div>

                        <div className="w-[70%]">
                            <div className="mb-3">
                                <InputField 
                                    typeInput='result'
                                    value={'Owner Wambrauw'}
                                    label={'Name'}
                                />
                            </div>
                            <div className="mb-3">
                                <InputField 
                                    typeInput='result'
                                    value={'Owner Wambrauw'}
                                    label={'ID #'}
                                />
                            </div>
                            <div className="mb-3">
                                <InputField 
                                    typeInput='result'
                                    value={'912095479882'}
                                    label={'Email'}
                                />
                            </div>
                            <div className="mb-3">
                                <InputField 
                                    typeInput='result'
                                    value={'Konstruksi.AI'}
                                    label={'Company'}
                                />
                            </div>
                            <div className="mb-3">
                                <InputField 
                                    typeInput='result'
                                    value={'Inspector'}
                                    label={'Role'}
                                />
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

export default Profile
