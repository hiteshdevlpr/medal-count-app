import React from "react";
import MedalTableHeaders from "./MedalTableHeaders";
import Flag from './Flag';
import { sortMedals } from "@/src/domain/useCases/sortMedals";
import { Medal } from "@/src/domain/entities/Medal";
import {MedalWithSortProps} from '@/src/domain/entities/MedalSort';

function getTotal(m: Medal) {
  return m.gold + m.silver + m.bronze;
}

export default function MedalTable({ medals, sort, onSort }: MedalWithSortProps) {
  const sorted = sortMedals(medals, sort);
  const top10 = sorted.slice(0, 10);
  return (
    <div className="overflow-x-auto w-full max-w-2xl">
      <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="p-2 border-b">Flag</th>
            <th className="p-2 border-b">Country</th>
            <MedalTableHeaders sort={sort} onSort={onSort} />
          </tr>
        </thead>
        <tbody>
          {top10.map((m) => (
            <tr key={m.code} className="text-center hover:bg-gray-50">
              <td className="p-2 border-b">
                <Flag code={m.code} />
              </td>
              <td className="p-2 border-b font-semibold">{m.code}</td>
              <td className="p-2 border-b">{m.gold}</td>
              <td className="p-2 border-b">{m.silver}</td>
              <td className="p-2 border-b">{m.bronze}</td>
              <td className="p-2 border-b">{getTotal(m)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
