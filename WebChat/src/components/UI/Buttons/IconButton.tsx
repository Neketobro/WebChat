import type React from "react";

type Props = {
  icon: React.ReactNode;
  onClick: () => void;
};

export function IconButton({ icon, onClick }: Props) {
  return (
    <button onClick={onClick} className="bg-[red] m-1 size-6 text-(--social-bg) hover:text-(--accent) active:scale-95 cursor-pointer">
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
