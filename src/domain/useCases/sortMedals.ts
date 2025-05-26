import { Medal } from '../entities/Medal'

function getTotal(m: Medal) {
  return m.gold + m.silver + m.bronze;
}

export function sortMedals(medals: Medal[], sort: string): Medal[] {
  return [...medals].sort((a, b) => {
    if (sort === "total") {
      const totalA = getTotal(a);
      const totalB = getTotal(b);
      if (totalB !== totalA) return totalB - totalA;
      if (b.gold !== a.gold) return b.gold - a.gold;
      return 0;
    }
    if (sort === "gold") {
      if (b.gold !== a.gold) return b.gold - a.gold;
      if (b.silver !== a.silver) return b.silver - a.silver;
      return 0;
    }
    if (sort === "silver") {
      if (b.silver !== a.silver) return b.silver - a.silver;
      if (b.gold !== a.gold) return b.gold - a.gold;
      return 0;
    }
    if (sort === "bronze") {
      if (b.bronze !== a.bronze) return b.bronze - a.bronze;
      if (b.gold !== a.gold) return b.gold - a.gold;
      return 0;
    }
    return 0;
  });
} 