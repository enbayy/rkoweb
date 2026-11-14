function Svg({ children, className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function MenuIcon() {
  return (
    <Svg className="h-6 w-6">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  );
}

export function CloseIcon() {
  return (
    <Svg className="h-5 w-5">
      <path d="M6 6l12 12M18 6 6 18" />
    </Svg>
  );
}

export function CartIcon({ className = "h-5 w-5" }) {
  return (
    <Svg className={className}>
      <g transform="translate(0 1)">
        <path d="M6 7h12l-1 11H7L6 7z" />
        <path d="M9 7a3 3 0 0 1 6 0" />
      </g>
    </Svg>
  );
}

export function HeartIcon({ filled = false, className = "" }) {
  const tone = filled ? "fill-heart text-heart" : "fill-none text-zinc-400";
  const size = /\bh-/.test(className) ? "" : "h-5 w-5";
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${size} ${className || tone}`.trim()}
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path
        transform="translate(0 -1.8)"
        d="M12 20s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9z"
      />
    </svg>
  );
}

export function LockIcon() {
  return (
    <Svg className="h-7 w-7">
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V8a4 4 0 0 1 8 0v2" />
    </Svg>
  );
}

export function TruckIcon() {
  return (
    <Svg className="h-7 w-7">
      <path d="M3 7h11v10H3zM14 11h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="18" cy="18" r="1.6" />
    </Svg>
  );
}

export function ReturnIcon() {
  return (
    <Svg className="h-7 w-7">
      <path d="M4 12a8 8 0 1 0 2.2-5.5" />
      <path d="M4 5v5h5" />
    </Svg>
  );
}

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.16h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 13.87c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.41-.14-.95-.31-1.64-.61-2.89-1.25-4.77-4.16-4.91-4.35-.14-.2-1.17-1.55-1.17-2.96 0-1.4.74-2.1 1-2.38.26-.28.57-.35.76-.35h.55c.17 0 .41-.07.64.49.24.58.82 2 .89 2.15.07.14.12.32.02.51-.1.2-.14.32-.28.49-.14.17-.3.38-.42.51-.14.14-.28.3-.12.57.16.28.72 1.18 1.54 1.91 1.06.94 1.95 1.24 2.23 1.38.28.14.44.12.6-.07.17-.2.7-.81.88-1.09.19-.28.37-.23.62-.14.26.1 1.63.77 1.91.91.28.14.46.21.53.32.07.12.07.68-.17 1.36z" />
    </svg>
  );
}

export function SparkIcon() {
  return (
    <Svg className="h-3.5 w-3.5">
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" />
    </Svg>
  );
}
