"use client";
import React, { useEffect, useState } from "react";
import { fetchMedals } from "@/src/domain/repositories/MedalRepositories";
import { sortMedals } from "@/src/domain/useCases/sortMedals";
import Header from "@/src/components/Header";
import { Medal } from "@/src/domain/entities/Medal";
import MedalTable from "@/src/components/MedalTable";
import LoadingMessage from "@/src/components/LoadingMessage";
import ErrorMessage from "@/src/components/Error";

export default function MedalCountContainer() {
  const [medals, setMedals] = useState<Medal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sort, setSort] = useState("gold");

  useEffect(() => {
    setLoading(true);
    fetchMedals()
      .then((data) => {
        setMedals(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load medal data. Please try again later.");
        setLoading(false);
      });
  }, []);

  const sorted = sortMedals(medals, sort);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-8">
      <Header />
      {loading ? (
        <LoadingMessage message="Loading medal data..." />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <MedalTable medals={sorted} sort={sort} onSort={setSort} />
      )}
    </div>
  );
} 