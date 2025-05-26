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
      return 0;
    }
    if (sort === "gold" || sort === "silver" || sort === "bronze") {
      if (b[sort] !== a[sort]) return b[sort] - a[sort];
      return 0;
    }
    return 0;
  });
} 