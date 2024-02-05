import { useEffect, useState } from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, YAxis } from 'recharts';
import { Device } from '../../../../Assets';
import Header from "../../../../Components/Header";
import SidebarInformation from "../../../../Components/SidebarInformation";


const Curva = () => {
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

  const data = [
    {
      name: 'Page A',
      plannedProgress: 0,
      actualCosts: 0,
      actualProgress: 0,
    },
    {
      name: 'Page B',
      plannedProgress: 3000,
      actualCosts: 1398,
      actualProgress: 7210,
    },
    {
      name: 'Page C',
      plannedProgress: 2000,
      actualCosts: 9800,
      actualProgress: 5290,
    },
    {
      name: 'Page D',
      plannedProgress: 2780,
      actualCosts: 3908,
      actualProgress: 2000,
    },
    {
      name: 'Page E',
      plannedProgress: 1890,
      actualCosts: 4800,
      actualProgress: 2181,
    },
    {
      name: 'Page F',
      plannedProgress: 2390,
      actualCosts: 3800,
      actualProgress: 7500,
    },
    {
      name: 'Page G',
      plannedProgress: 3490,
      actualCosts: 4300,
      actualProgress: 2100,
    },
  ];

  const [today, setToday] = useState<any>(new Date());
  console.log(today ? today : '')
  
  useEffect(() => {
    setToday(new Date());
  }, []);


  return (
    <>
    {
      isDesktop ? (
        <div className="min-h-screen overflow-hidden pb-[60px]">
            <Header title={'Papan Proyek A'} />
            <div className="mt-[80px] flex w-screen px-8">
                <SidebarInformation />
                <div className="w-[70%] ml-8 h-max bg-mainColor2 p-5 rounded-[10px]">
                    <h2 className="text-center ml-auto mr-auto font-bold mt-2 text-[20px]">Kurva S</h2>
                    <div className="w-full h-max bg-white rounded-[20px] h-max mt-8 overflow-hidden bg-contain">
                      <LineChart
                          className='w-full'
                          width={900}
                          height={300}
                          data={data}
                          margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                      >
                        <CartesianGrid strokeDasharray="8 4" />
                        <YAxis orientation="right" />
                        <Tooltip />
                        {/* <Legend /> */}
                        <Line type="monotone" dataKey="plannedProgress" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="actualCosts" stroke="#8824d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="actualProgress" stroke="#82ca9d" />
                    </LineChart>
                    <div className="text-center mt-4">
                      Hari Saat Ini: {new Date().toLocaleDateString()}
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

export default Curva
