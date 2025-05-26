import React from "react";
import {Sort} from "@/src/domain/entities/Sort";

const SORT_OPTIONS = ["gold", "silver", "bronze", "total"];

export default function MedalTableHeaders({ sort, onSort }: Sort) {
  return (
    <>
      {SORT_OPTIONS.map((col) => (
        <th
          key={col}
          className={`p-2 border-b cursor-pointer hover:bg-gray-100 ${sort === col ? "bg-yellow-100" : ""}`}
          onClick={() => onSort(col)}
        >
          {col.charAt(0).toUpperCase() + col.slice(1)}
        </th>
      ))}
    </>
  );
} 