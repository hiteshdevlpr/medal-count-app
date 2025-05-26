import { Medal } from "./Medal";

export interface MedalWithSortProps {
    medals: Medal[];
    sort: string;
    onSort: (sort: string) => void;
}
