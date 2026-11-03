export function StarField({
  className,
  seed = 7,
  density = 90,
}: {
  className?: string;
  seed?: number;
  density?: number;
}) {
  const stars = [];
  const random = (index: number, salt: number) => {
    const value = Math.sin((index + 1) * 12.9898 + (seed + salt) * 78.233) * 43758.5453;
    return value - Math.floor(value);
  };

  for (let index = 0; index < density; index += 1) {
    const x = random(index, 1) * 1000;
    const y = random(index, 2) * 1000;
    const r = 0.6 + random(index, 3) * 1.9;
    const opacity = 0.25 + random(index, 4) * 0.65;
    stars.push(
      <circle
        key={`${seed}-${index}`}
        cx={x.toFixed(1)}
        cy={y.toFixed(1)}
        r={r.toFixed(2)}
        opacity={opacity.toFixed(2)}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <g fill="#ffffff">{stars}</g>
    </svg>
  );
}
