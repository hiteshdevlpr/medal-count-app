const FLAG_INDICES: Record<string, number> = {
  "AUT": 0, "BLR": 1, "CAN": 2, "CHN": 3, "FRA": 4, "GER": 5, "ITA": 6, "NED": 7, "NOR": 8, "RUS": 9, "SUI": 10, "SWE": 11, "USA": 12
};
const FLAG_HEIGHT = 18;

export default function Flag({ code }: { code: string }) {
  const idx = FLAG_INDICES[code] ||  0;
  return (
    <div style={{ width: 32, height: 19, overflow: "hidden", display: "inline-block" }}>
      <span style={{backgroundImage: `url(/flags.png)`, backgroundSize: "cover", backgroundPosition: `0px -${idx * FLAG_HEIGHT}px`, width: "32px", height: "18px", display: "inline-block"}}></span>
    </div>
  );
}