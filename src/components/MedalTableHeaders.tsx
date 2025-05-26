import {useEffect} from "react";
import {Sort} from "@/src/domain/entities/Sort";
import { useRouter, useSearchParams } from "next/navigation";
const SORT_OPTIONS = ["gold", "silver", "bronze", "total"];

export default function MedalTableHeaders({ sort, onSort }: Sort) {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const sortParam = searchParams.get("sort");
    if (sortParam && sortParam !== sort) {
      onSort(sortParam);
        } else if (!sortParam && sort !== "gold") {
      onSort("gold");
    }
  }, [searchParams, sort, onSort]);

  function handleSort(newSort: string) {
    if (newSort === sort) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", newSort);
    router.replace("/?" + params.toString());
    onSort(newSort);
  }

  return (
    <>
      {SORT_OPTIONS.map((col) => (
        <th
          key={col}
          className={`p-2 border-b cursor-pointer hover:bg-gray-100 ${sort === col ? "bg-yellow-100" : ""}`}
          onClick={() => handleSort(col)}
        >
          {col.charAt(0).toUpperCase() + col.slice(1)}
        </th>
      ))}
    </>
  );
} 