import Header from "../../../../Components/Header"
import SidebarInformation from "../../../../Components/SidebarInformation"

const Manipulation = () => {
    return (
      <div className="min-h-screen overflow-hidden pb-[60px]">
          <Header title={'Papan Proyek A'} />
          <div className="mt-[80px] flex w-screen px-8">
              <SidebarInformation />
              <div className="w-[70%] ml-8 h-max bg-mainColor2 p-3 rounded-[10px]">
                  <h2 className="text-center ml-auto mr-auto font-bold mt-2 text-[20px]">Kegiatan Rekayasa</h2>
                  <table className="mt-4 w-full">
                    <thead>
                      <tr className="w-full">
                        <th className="text-left pl-6">Struktur</th>
                        <th className="text-left pl-6">MEP</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-left pl-6">
                        <td className="text-left pl-6">1. Trial mix fc 40. fc55 (Outrigger)</td>
                        <td className="text-left pl-6">1. Pengecekan Mockup IHB Lt 9 North tower</td>
                      </tr>
                      <tr>
                        <td className="text-left pl-6">1. Trial mix fc 40. fc55 (Outrigger)</td>
                        <td className="text-left pl-6">1. Pengecekan Mockup IHB Lt 9 North tower</td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="py-6"></td>
                      </tr>
                    </tbody>  
                    <thead>
                        <tr className="w-full">
                          <th className="text-left pl-6">Arsitektur</th>
                          <th className="text-left pl-6">Meeting</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-left pl-6">1. Trial mix fc 40. fc55 (Outrigger)</td>
                          <td className="text-left pl-6">1. Pengecekan Mockup IHB Lt 9 North tower</td>
                        </tr>
                        <tr>
                          <td className="text-left pl-6">1. Trial mix fc 40. fc55 (Outrigger)</td>
                          <td className="text-left pl-6">1. Pengecekan Mockup IHB Lt 9 North tower</td>
                        </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
    )
  }
  
  export default Manipulation
  