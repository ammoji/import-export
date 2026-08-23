import type { ReactNode } from "react";

/** Small inline icon set (stroke-based, currentColor). */
const paths: Record<string, ReactNode> = {
  sprout: (
    <>
      <path d="M12 22V12" />
      <path d="M12 12C12 8 9 5 4 5c0 5 3 7 8 7z" />
      <path d="M12 14c0-3 2.5-5.5 7-5.5 0 4.5-2.5 5.5-7 5.5z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  tag: (
    <>
      <path d="M20 12l-8 8-9-9V4h7z" />
      <circle cx="7.5" cy="7.5" r="1.4" />
    </>
  ),
  ship: (
    <>
      <path d="M3 15l1.5 5h15L21 15" />
      <path d="M5 15V9h14v6" />
      <path d="M9 9V5h6v4" />
      <path d="M12 3v2" />
    </>
  ),
  handshake: (
    <>
      <path d="M8 12l3-3 3 3 3-3" />
      <path d="M3 10l4-4 5 5" />
      <path d="M21 10l-4-4-3 3" />
      <path d="M11 14l2 2 3-3" />
    </>
  ),
  check: <path d="M5 12l4 4 10-10" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M12 3a9 9 0 00-7.7 13.6L3 21l4.6-1.2A9 9 0 1012 3z" />
      <path d="M8.5 8.5c0 4 3 7 7 7 .8 0 1.5-.6 1.5-1.3 0-.3-.2-.6-.5-.7l-1.6-.6-.9 1c-1.2-.5-2.2-1.5-2.7-2.7l1-.9-.6-1.6c-.1-.3-.4-.5-.7-.5-.7 0-1.3.7-1.3 1.6z" />
    </>
  ),
  phone: (
    <path d="M5 4h4l2 5-2 1a12 12 0 005 5l1-2 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
  ),
  noEntry: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M6 6l12 12" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
};

export default function Icon({ name, className }: { name: string; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? null}
    </svg>
  );
}
