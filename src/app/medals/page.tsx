"use client";
import React, { useEffect, useState } from "react";
import { fetchMedals } from "@/src/domain/repositories/MedalRepositories";
import { sortMedals } from "@/src/domain/useCases/sortMedals";
import Header from "@/src/components/Header";
import { Medal } from "@/src/domain/entities/Medal";
import MedalTable from "@/src/components/MedalTable";

export default function MedalCountContainer() {
  const [medals, setMedals] = useState<Medal[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [sort, setSort] = useState("gold");

  useEffect(() => {
    fetchMedals()
      .then((data) => {
        setMedals(data);
      })
      .catch(() => {
        setError("Could not load medal data. Please try again later.");
      });
  }, []);

  const sorted = sortMedals(medals, sort);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-8">
      <Header />
      {error ? <h3>An error has occured!</h3> :
      <MedalTable medals={sorted} sort={sort} onSort={setSort} />}
    </div>
  );
} 