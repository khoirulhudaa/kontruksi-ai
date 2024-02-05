import { useEffect, useState } from "react";
import Header from "../../../../Components/Header";
import SidebarInformation from "../../../../Components/SidebarInformation";
import { Device } from "../../../../Assets";
import { twMerge } from 'tailwind-merge';

const text = ['text-white'];
const content = ['bg-blue-500'];

const merge1 = twMerge(text, content);

const Labor = () => {
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

    const dataHeader = [
      {day: 'Minggu', date: '02/10/2024'},
      {day: 'Senin', date: '02/10/2024'},
      {day: 'Selasa', date: '02/10/2024'},
      {day: 'Rabu', date: '02/10/2024'},
      {day: 'Kamis', date: '02/10/2024'},
      {day: 'Jumat', date: '02/10/2024'},
      {day: 'Sabtu', date: '02/10/2024'},
    ]

    const dataBody = [
      {
        type: 'STR',
        jenis: 'AWT - Wire Mesh dan Meta idex',
        minggu: '1',
        senin: '1',
        selasa: '1',
        rabu: '1',
        kamis: '1',
        jumat: '1',
        sabtu: '1',
      },
      {
        type: 'STR',
        jenis: 'AWT - Wire Mesh dan Meta idex',
        minggu: '1',
        senin: '1',
        selasa: '1',
        rabu: '1',
        kamis: '1',
        jumat: '1',
        sabtu: '1',
      },
      {
        type: 'ARSITEKTUR',
        jenis: 'AWT - Wire Mesh dan Meta idex',
        minggu: '2',
        senin: '2',
        selasa: '2',
        rabu: '2',
        kamis: '2',
        jumat: '2',
        sabtu: '2',
      },
      {
        type: 'ARSITEKTUR',
        jenis: 'AWT - Wire Mesh dan Meta idex',
        minggu: '2',
        senin: '2',
        selasa: '2',
        rabu: '2',
        kamis: '2',
        jumat: '2',
        sabtu: '2',
      },
      {
        type: 'ARSITEKTUR',
        jenis: 'AWT - Wire Mesh dan Meta idex',
        minggu: '2',
        senin: '2',
        selasa: '2',
        rabu: '2',
        kamis: '2',
        jumat: '2',
        sabtu: '2',
      },
      {
        type: 'K3',
        jenis: 'ABA - Scaffolding',
        minggu: '3',
        senin: '3',
        selasa: '3',
        rabu: '3',
        kamis: '3',
        jumat: '3',
        sabtu: '3',
      },
      {
        type: 'K3',
        jenis: 'ABA - Scaffolding',
        minggu: '3',
        senin: '3',
        selasa: '3',
        rabu: '3',
        kamis: '3',
        jumat: '3',
        sabtu: '3',
      },
      {
        type: 'MEP',
        jenis: 'Binkei',
        minggu: '4',
        senin: '4',
        selasa: '4',
        rabu: '4',
        kamis: '4',
        jumat: '4',
        sabtu: '4',
      },
    ]

    const renderTableRow = (data: any, key: number) => (
      <tr key={key}>
        <td>{data.jenis}</td>
        <td>{data.minggu}</td>
        <td>{data.senin}</td>
        <td>{data.selasa}</td>
        <td>{data.rabu}</td>
        <td>{data.kamis}</td>
        <td>{data.jumat}</td>
        <td>{data.sabtu}</td>
      </tr>
    );

    const renderTableRowsByType = (type?: string) => {
      if (dataBody.length > 0) {
        return dataBody
          .filter((data) => data.type === type)
          .map((data, index) => renderTableRow(data, index));
      } else {
        return (
          <tr className="text-left">
            <td colSpan={8} className="text-left pl-2">
              {type === 'ARSITEKTUR' ? '2. ARSITEKTUR' : type}
            </td>
          </tr>
        );
      }
    };

    const resultTotalTypeByDay = (data: any) => {
      const datas = [
        data.reduce((sum: number, item: any) => sum + item.minggu, 0),
        data.reduce((sum: number, item: any) => sum + item.senin, 0),
        data.reduce((sum: number, item: any) => sum + item.selasa, 0),
        data.reduce((sum: number, item: any) => sum + item.rabu, 0),
        data.reduce((sum: number, item: any) => sum + item.kamis, 0),
        data.reduce((sum: number, item: any) => sum + item.jumat, 0),
        data.reduce((sum: number, item: any) => sum + item.sabtu, 0),
      ]
    
      return (
        <tr key={1} className="text-white">
          <td className="text-white text-left pl-2 bg-blue-500">TOTAL</td>
          {
            datas.map((data: any, index: number) => (
              <td key={index} className={`${merge1}`}>{data}</td>
            ))
          }
        </tr>
      )
    }
  
    const isDesktop = screenWidth >= 900;

    return (
      <>
        {
            isDesktop ? (
                <div className="min-h-screen overflow-hidden pb-[60px]">
                <Header title={'Papan Proyek A'} />
                <div className="mt-[80px] flex w-screen px-8">
                    <SidebarInformation />
                    <div className="w-[70%] ml-8 h-max bg-mainColor2 p-3 rounded-[10px]">
                        <h2 className="text-center ml-auto mr-auto font-bold mt-2 text-[20px]">Jumlah Tenaga Kerja</h2>
                        <table className="mt-4 w-full">
                          <thead>
                            <tr className="w-full">
                              <th>Jenis</th>
                              <th>Minggu</th>
                              <th>Senin</th>
                              <th>Selesa</th>
                              <th>Rabu</th>
                              <th>Kamis</th>
                              <th>Jumat</th>
                              <th>Sabtu</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>-</td>
                              <td>1</td>
                              <td>1</td>
                              <td>1</td>
                              <td>1</td>
                              <td>1</td>
                              <td>1</td>
                              <td>1</td>
                            </tr>
                            {/* Tambahkan baris lainnya sesuai kebutuhan */}
                          </tbody>
                        </table>

                        <h2 className="text-center ml-auto mr-auto font-bold mt-12 text-[20px]">MAN POWER</h2>
                        <table className="mt-6 w-full">
                          <thead>
                            <tr className="w-full text-white">
                              <th className="bg-blue-500 ">Jenis</th>
                              {
                                dataHeader.map((data: any, index: number) => (
                                  <th key={index} className="text-center bg-blue-500">
                                    <div className="w-full h-full text-center border-b border-white">
                                      <p className="relative bottom-1">
                                        {data.day}
                                      </p>
                                    </div>
                                    <div className="w-full h-full relative top-1 text-center">
                                    <p className="relative top-1">
                                        {data.date}
                                      </p>
                                    </div>
                                  </th>
                                ))
                              }
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="text-left">
                              <td colSpan={8} className="text-left pl-2">1. STR</td>
                            </tr>
                            {renderTableRowsByType('STR')}
                            
                            <tr className="text-left">
                              <td colSpan={8} className="text-left pl-2">2. ARSITEKTUR</td>
                            </tr>
                            {renderTableRowsByType('ARSITEKTUR')}

                            <tr className="text-left">
                              <td colSpan={8} className="text-left pl-2">3. K3</td>
                            </tr>
                            {renderTableRowsByType('K3')}

                            <tr className="text-left">
                              <td colSpan={8} className="text-left pl-2">4. MEP</td>
                            </tr>
                            {renderTableRowsByType('MEP')}
                            {
                              resultTotalTypeByDay(dataBody)
                            }
                          </tbody>
                        </table>
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
  
  export default Labor
  