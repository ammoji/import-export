/** Farm to World emblem: a green globe with a sprouting leaf and a shipping wave. */
export default function BrandIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="f2w-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4CB357" />
          <stop offset="1" stopColor="#2E8B3D" />
        </linearGradient>
      </defs>
      {/* globe */}
      <circle cx="22" cy="23" r="15" fill="url(#f2w-g)" />
      <g stroke="#EAF6EC" strokeWidth="1.3" opacity="0.9">
        <ellipse cx="22" cy="23" rx="6.4" ry="15" />
        <path d="M8 18.5h28M8.6 27.5h26.8" />
        <path d="M22 8v30" />
      </g>
      {/* shipping wave across the lower globe */}
      <path
        d="M9 29c3 2.4 5.5 2.4 8.5 0 3-2.4 5.5-2.4 8.5 0 3 2.4 5.5 2.4 8.5 0"
        stroke="#EAF6EC"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* leaf sprout */}
      <path d="M22 11c0-3.4 2.8-6 6.6-6-.2 3.8-3 6.2-6.6 6z" fill="#2E7D32" />
      <path d="M22 11c-.7-2.9-3.3-4.4-6.2-4.2.3 3 3 4.4 6.2 4.2z" fill="#3FA24C" />
      <path d="M22 12.5V8.4" stroke="#2E7D32" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
