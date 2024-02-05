import Header from "../../../../Components/Header"
import SidebarInformation from "../../../../Components/SidebarInformation"

const Material = () => {
    return (
      <div className="min-h-screen overflow-hidden pb-[60px]">
          <Header title={'Papan Proyek A'} />
          <div className="mt-[80px] flex w-screen px-8">
              <SidebarInformation />
              <div className="w-[70%] ml-8 h-max bg-mainColor2 p-3 rounded-[10px]">
                  <h2 className="text-center ml-auto mr-auto font-bold mt-2 text-[20px]">Material / Equipment On Site</h2>
                  <table id="table2" className="mt-4 w-full">
                    <thead>
                      <tr className="w-full">
                        <th className="text-left pl-6">No</th>
                        <th className="text-left pl-6">Tanggal</th>
                        <th className="text-left pl-6">Keterangan</th>
                        <th className="text-left pl-6">JML</th>
                        <th className="text-left pl-6">SAT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-left pl-6">
                        <td className="text-left pl-6">1</td>
                        <td className="text-left pl-6">5/12/2023</td>
                        <td className="text-left pl-6">Homogeonus Title FF11 750 x 1500</td>
                        <td className="text-left pl-6">11800</td>
                        <td className="text-left pl-6">M2</td>
                      </tr>
                      <tr>
                      <td className="text-left pl-6">2</td>
                        <td className="text-left pl-6">5/12/2023</td>
                        <td className="text-left pl-6">Besi beton ex Master Steel</td>
                        <td className="text-left pl-6">15</td>
                        <td className="text-left pl-6">Ton</td>
                      </tr>
                    </tbody>  
                  </table>
              </div>
          </div>
      </div>
    )
  }
  
  export default Material
  