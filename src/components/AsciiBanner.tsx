// "JAI GUPTA" as pixel rects (col, row, width-in-cells), derived from a
// figlet ANSI Shadow render — SVG so it stays crisp at any size and doesn't
// depend on block glyphs the webfont subset lacks.
const RECTS: [number, number, number][] = [
  [5, 0, 2], [9, 0, 5], [16, 0, 2], [24, 0, 6], [32, 0, 2], [38, 0, 2],
  [41, 0, 6], [49, 0, 8], [59, 0, 5],
  [5, 1, 2], [8, 1, 2], [13, 1, 2], [16, 1, 2], [23, 1, 2], [32, 1, 2],
  [38, 1, 2], [41, 1, 2], [46, 1, 2], [52, 1, 2], [58, 1, 2], [63, 1, 2],
  [5, 2, 2], [8, 2, 7], [16, 2, 2], [23, 2, 2], [28, 2, 3], [32, 2, 2],
  [38, 2, 2], [41, 2, 6], [52, 2, 2], [58, 2, 7],
  [0, 3, 2], [5, 3, 2], [8, 3, 2], [13, 3, 2], [16, 3, 2], [23, 3, 2],
  [29, 3, 2], [32, 3, 2], [38, 3, 2], [41, 3, 2], [52, 3, 2], [58, 3, 2],
  [63, 3, 2],
  [1, 4, 5], [8, 4, 2], [13, 4, 2], [16, 4, 2], [24, 4, 6], [33, 4, 6],
  [41, 4, 2], [52, 4, 2], [58, 4, 2], [63, 4, 2],
];

const COLS = 66;
const ROWS = 5;
// cell aspect: mono chars are taller than wide; 1 x 1.9 mimics the terminal grid
const CH = 1.9;

export default function AsciiBanner() {
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${COLS} ${ROWS * CH}`}
      className="w-full max-w-4xl [filter:drop-shadow(0_0_14px_rgba(255,255,255,0.28))]"
    >
      {/* offset shadow layer */}
      <g fill="rgba(255,255,255,0.18)" transform={`translate(0.55, ${0.5})`}>
        {RECTS.map(([c, r, w], i) => (
          <rect key={i} x={c} y={r * CH} width={w} height={CH - 0.28} />
        ))}
      </g>
      {/* main blocks */}
      <g fill="var(--color-text)">
        {RECTS.map(([c, r, w], i) => (
          <rect key={i} x={c} y={r * CH} width={w} height={CH - 0.28} />
        ))}
      </g>
    </svg>
  );
}
