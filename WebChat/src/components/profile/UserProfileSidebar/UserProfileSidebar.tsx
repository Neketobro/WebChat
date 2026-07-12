import { XMarkIcon } from "@heroicons/react/24/outline";
import { Avatar, IconButton } from "../../UI";

interface UserInfoProps {
  onClose: () => void;
  isOpen: boolean;
  style?: string;
}

export function UserProfileSidebar({ onClose, isOpen, style}: UserInfoProps) {
  const styles =
    "bg-(--bg) transition transition-[width] duration-300 ease-in-out overflow-hidden flex flex-col items-center gap-2";

  return (
    <div
      className={!isOpen ? `${styles} ${style} w-0` : `${styles} ${style} w-140`}
      onTransitionStart={() => {}}
      onTransitionEnd={() => {}}
    >
      <IconButton onClick={onClose} icon={<XMarkIcon />} />
      <Avatar size="lg" />
      <h2>Jhon Smith</h2>
    </div>
  );
}
