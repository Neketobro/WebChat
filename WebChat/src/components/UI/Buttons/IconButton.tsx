import type React from "react";

type Props = {
  icon: React.ReactNode;
  onClick: () => void;
  size?: 'sm' | "md" | 'lg';
};

export function IconButton({ icon, onClick, size = "sm" }: Props) {
  const SIZES = {
    sm: 'size-6',
    md: 'size-8',
    lg: 'size-10',
  }

  return (
    <button onClick={onClick} className={`m-1 ${SIZES[size]} text-(--social-bg) hover:text-(--accent) active:scale-95 cursor-pointer`}>
      {icon}
    </button>
  );
}

// Setting
// Noitification
// Send
// Redact
// Search
// Close
// Back
// Menu
// Tablte
