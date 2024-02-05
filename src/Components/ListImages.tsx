import { Sample } from "../Assets"

const ListImages = () => {
  return (
    <>
        <div className="w-[90%] rounded-md p-2 my-7 mx-auto text-center text-black bg-[#D9D9D9]">
        Minggu, 02-10-2022
        </div>
        <div className="w-[90%] mx-auto flex items-center flex-wrap">
            <div className="w-[18%] text-center mr-4 mb-2 h-[250px] overflow-hidden">
                <div className="w-full h-[90%] overflow-hidden">
                    <img src={Sample} alt="image" className="w-full h-full bg-contain" />
                </div>
                <p className="mt-2 text-[12px]">Keterangan gambar 1</p>
            </div>
            <div className="w-[18%] text-center mr-4 mb-2 h-[250px] overflow-hidden">
                <div className="w-full h-[90%] overflow-hidden">
                    <img src={Sample} alt="image" className="w-full h-full bg-contain" />
                </div>
                <p className="mt-2 text-[12px]">Keterangan gambar 1</p>
            </div>
            <div className="w-[18%] text-center mr-4 mb-2 h-[250px] overflow-hidden">
                <div className="w-full h-[90%] overflow-hidden">
                    <img src={Sample} alt="image" className="w-full h-full bg-contain" />
                </div>
                <p className="mt-2 text-[12px]">Keterangan gambar 1</p>
            </div>
            <div className="w-[18%] text-center mr-4 mb-2 h-[250px] overflow-hidden">
                <div className="w-full h-[90%] overflow-hidden">
                    <img src={Sample} alt="image" className="w-full h-full bg-contain" />
                </div>
                <p className="mt-2 text-[12px]">Keterangan gambar 1</p>
            </div>
            <div className="w-[18%] text-center mr-4 mb-2 h-[250px] overflow-hidden">
                <div className="w-full h-[90%] overflow-hidden">
                    <img src={Sample} alt="image" className="w-full h-full bg-contain" />
                </div>
                <p className="mt-2 text-[12px]">Keterangan gambar 1</p>
            </div>
        </div>
    </>
  )
}

export default ListImages
