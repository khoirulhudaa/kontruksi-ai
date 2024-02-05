import { Link, useNavigate } from "react-router-dom"
import Button from "./Button"

const SidebarInformation = () => {

    const navigate = useNavigate()

    const dataSidebar = [
        {
            text: 'Informasi Proyek',
            onclick: () => navigate('/information/owner')
        },
        {
            text: 'Progres Proyek',
            onclick: () => navigate('/progress/owner')
        },
        {
            text: 'Kurva S',
            onclick: () => navigate('/curva/owner')
        },
        {
            text: 'Cuaca',
            onclick: () => navigate('/information/owner')
        },
        {
            text: 'Jumlah Tenaga Kerja',
            onclick: () => navigate('/labor/owner')
        },
        {
            text: 'Rekapan dan Kegiatan K3',
            onclick: () => navigate('/recap/owner')
        },
        {
            text: 'Status Dokumen Non-Conformance',
            onclick: () => navigate('/document/owner')
        },
        {
            text: 'Kegiatan Rekayasa',
            onclick: () => navigate('/manipulation/owner')
        },
        {
            text: 'Kegiatan Konstruksi',
            onclick: () => navigate('/construction/owner')
        },
        {
            text: 'Material / Equipment On Site',
            onclick: () => navigate('/material/owner')
        },
        {
            text: 'Masalah Prioritas',
            onclick: () => navigate('/priority-problem/owner')
        },
        {
            text: 'Masalah Lainnya',
            onclick: () => navigate('/other-problem/owner')
        },
        {
            text: 'Daftar Laporan',
            onclick: () => navigate('/report/owner')
        },
        {
            text: 'Persetujuan Laporan',
            onclick: () => navigate('/agreement/owner')
        },
    ]
  return (
    <div className="w-[30%] h-max flex rounded-[10px] flex-col p-5 bg-mainColor2 justify-between items-center">
        <div className="relative w-full  min-h-[500px]">
            <h2 className="mb-6 font-bold text-center text-[20px]">Daftar Isi</h2>
            {
                dataSidebar && dataSidebar.length > 0 ? (
                    dataSidebar.map((data: any, index: number) => (
                        <Button key={index} text={data?.text} onClick={data?.onclick} color="orange" typeButton="large" style="mb-3 w-full" />
                    ))
                ):
                    null
            }
        </div>
        <Link to={'/sitemap/owner'} className="w-full">
            <Button text="Sitemap" color="blue" style="bg-[#0E17FA] text-white py-5 w-full mt-10" />
        </Link>
    </div>
  )
}

export default SidebarInformation
