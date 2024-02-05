import React from 'react'
import { TableProps } from '../Models/ComponentModels'

const Table: React.FC<TableProps> = ({
    header,
}) => {
  return (
    <table className="mt-4 w-full">
        <thead>
        <tr className="w-full">
            {
                header && header.map((data: any, index: number) => (
                    <th key={index}>{data}</th>
                ))
            }
        </tr>
        </thead>
        <tbody>
        <tr>
            <td className="bg-rangeGrey text-black">Persiapan</td>
            <td className="bg-rangeGrey text-black">1,256</td>
            <td className="bg-rangeGrey text-black">0,005</td>
            <td className="bg-rangeGrey text-black">1,519</td>
            <td className="bg-rangeGrey text-black">0,263</td>
        </tr>
        {/* Tambahkan baris lainnya sesuai kebutuhan */}
        </tbody>
    </table>
  )
}

export default Table
