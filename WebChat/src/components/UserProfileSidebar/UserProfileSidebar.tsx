import { Avatar, Button } from "../UI";

interface UserInfoProps {
  onClose: () => void;
  isOpen: boolean;
}

export function UserProfileSidebar({ onClose, isOpen }: UserInfoProps) {
  const styles =
    "bg-(--bg) transition transition-[width] delay-150 duration-300 ease-in-out overflow-hidden flex flex-col items-center gap-2";

  return (
    <div
      className={!isOpen ? `${styles} w-0` : `${styles} w-140`}
      onTransitionStart={() => {}}
      onTransitionEnd={() => { }}
    >
      <Button onClick={onClose}>Close</Button>
      <Avatar size="lg" />
      <h2>Jhon Smith</h2>
    </div>
  );
}
