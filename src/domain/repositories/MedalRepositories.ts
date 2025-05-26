import { Medal } from "../entities/Medal";

export async function fetchMedals(): Promise<Medal[]> {
const res = await fetch("/api/medals");
console.log(res);
if (!res.ok) throw new Error("Failed to fetch medal data");
  return res.json();
} 