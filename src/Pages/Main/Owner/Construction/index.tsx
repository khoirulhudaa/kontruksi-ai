import Header from "../../../../Components/Header"
import SidebarInformation from "../../../../Components/SidebarInformation"

const Contsruction = () => {
    return (
      <div className="min-h-screen overflow-hidden pb-[60px]">
          <Header title={'Papan Proyek A'} />
          <div className="mt-[80px] flex w-screen px-8">
              <SidebarInformation />
              <div className="w-[70%] ml-8 h-max bg-mainColor2 p-3 rounded-[10px]">
                  <h2 className="text-center ml-auto mr-auto font-bold mt-2 text-[20px]">Kegiatan Kontruksi</h2>
                  <table className="mt-4 w-full">
                    <thead>
                      <tr className="w-full">
                        <th className="text-left pl-6">Struktur</th>
                        <th className="text-left pl-6">Finishing</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-left pl-6">
                        <td className="text-left pl-6">1. Pekerjaan pasang scaffolding Lt.44-45 North tower</td>
                        <td className="text-left pl-6">1. Structure clearance area Garden lt. Podium</td>
                      </tr>
                      <tr>
                        <td className="text-left pl-6">2. Pekerjaan pasang parapet B1 ramp North Tower</td>
                        <td className="text-left pl-6">2. Install blockwall area Ruangan AHU lt. 33 North Tower</td>
                      </tr>
                    </tbody>  
                  </table>
              </div>
          </div>
      </div>
    )
  }
  
  export default Contsruction
  