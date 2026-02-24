export default function Cloud({ width = 160, color = 'white', style = {}, className = '' }) {
  const h = width * 0.55
  return (
    <svg
      width={width}
      height={h}
      viewBox="0 0 160 88"
      fill={color}
      style={style}
      className={`cloud-deco ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="80" cy="72" rx="72" ry="18" />
      <ellipse cx="50" cy="54" rx="34" ry="28" />
      <ellipse cx="88" cy="46" rx="40" ry="34" />
      <ellipse cx="118" cy="58" rx="28" ry="22" />
    </svg>
  )
}
