/**
 * Realistic cloud shapes built from overlapping circles on a flat base.
 * Circles blend visually into one unified fluffy cloud — no gaps, no harsh edges.
 * variant: 1=large(5 bumps) | 2=medium(4 bumps) | 3=small(3 bumps) | 4=wide-flat(6 bumps)
 */

const shapes = {
  1: {
    vb: '0 0 340 160',
    base: { cx: 170, cy: 136, rx: 158, ry: 26 },
    bumps: [
      { cx: 62,  cy: 108, r: 42 },
      { cx: 110, cy: 82,  r: 56 },
      { cx: 180, cy: 68,  r: 66 },
      { cx: 258, cy: 82,  r: 54 },
      { cx: 308, cy: 106, r: 40 },
    ],
  },
  2: {
    vb: '0 0 260 140',
    base: { cx: 130, cy: 118, rx: 120, ry: 23 },
    bumps: [
      { cx: 55,  cy: 96,  r: 36 },
      { cx: 110, cy: 72,  r: 52 },
      { cx: 178, cy: 76,  r: 46 },
      { cx: 224, cy: 98,  r: 32 },
    ],
  },
  3: {
    vb: '0 0 200 120',
    base: { cx: 100, cy: 100, rx: 92, ry: 20 },
    bumps: [
      { cx: 50,  cy: 82,  r: 30 },
      { cx: 100, cy: 60,  r: 44 },
      { cx: 155, cy: 78,  r: 34 },
    ],
  },
  4: {
    vb: '0 0 420 150',
    base: { cx: 210, cy: 128, rx: 200, ry: 25 },
    bumps: [
      { cx: 65,  cy: 108, r: 36 },
      { cx: 120, cy: 84,  r: 52 },
      { cx: 192, cy: 68,  r: 62 },
      { cx: 268, cy: 74,  r: 56 },
      { cx: 338, cy: 88,  r: 46 },
      { cx: 390, cy: 108, r: 32 },
    ],
  },
}

export default function Cloud({ variant = 1, color = 'white', className = '', style = {} }) {
  const { vb, base, bumps } = shapes[variant] ?? shapes[1]
  return (
    <svg
      viewBox={vb}
      xmlns="http://www.w3.org/2000/svg"
      className={`cloud-svg ${className}`}
      style={style}
      aria-hidden="true"
    >
      <ellipse cx={base.cx} cy={base.cy} rx={base.rx} ry={base.ry} fill={color} />
      {bumps.map((b, i) => (
        <circle key={i} cx={b.cx} cy={b.cy} r={b.r} fill={color} />
      ))}
    </svg>
  )
}
