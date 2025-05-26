import React from "react";
import MedalTableHeaders from "./MedalTableHeaders";
import Flag from './Flag';
import { sortMedals } from "@/src/domain/useCases/sortMedals";
import { Medal } from "@/src/domain/entities/Medal";
import {MedalWithSortProps} from '@/src/domain/entities/MedalSort';
import classes from './Medals.module.css';

function getTotal(m: Medal) {
  return m.gold + m.silver + m.bronze;
}

export default function MedalTable({ medals, sort, onSort }: MedalWithSortProps) {
  const sorted = sortMedals(medals, sort);
  const top10 = sorted.slice(0, 10);
  return (
    <div className="">
      <table className="">
        <thead>
          <tr>
            <th className="">Flag</th>
            <th className="">Country</th>
            <MedalTableHeaders sort={sort} onSort={onSort} />
          </tr>
        </thead>
        <tbody>
          {top10.map((m) => (
            <tr key={m.code} className="">
              <td className="">
                <Flag code={m.code} />
              </td>
              <td className={classes.medalCell}>{m.code}</td>
              <td className={classes.medalCell}>{m.gold}</td>
              <td className={classes.medalCell}>{m.silver}</td>
              <td className={classes.medalCell}>{m.bronze}</td>
              <td className={classes.medalCell}>{getTotal(m)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
