import { useState } from "react";
import { Avatar, Button } from "../UI";

interface UserInfoProps {
  onClose: () => void;
}

export function UserInfo({ onClose }: UserInfoProps) {
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const animation =
    "w-0 bg-(--bg) transition transition-[width] delay-150 duration-300 ease-in-out overflow-hidden ";

  return (
    <div
      className={
        isClosing
          ? animation
          : "w-140 bg-(--bg) transition transition-[width] delay-150 duration-300 ease-in-out overflow-hidden flex flex-col items-center gap-2"
      }
      onTransitionStart={() => {}}
      onTransitionEnd={() => {
        if (isClosing) {
          onClose();
        }
      }}
    >
      <Button onClick={() => setIsClosing(true)}>Close</Button>
      <Avatar size="lg" />
    </div>
  );
}
