import { useState } from "react";
import { Button } from "../UI";

export function UserInfo() {
  const [isOpen, setOpen] = useState<string>('');
  const animationClose = () => {
 setOpen('animate-close');
  }

  return (
    <div className={`bg-(--bg) w-140 ${isOpen} overflow-hidden`}>
      <div>UserInfo</div>
      <Button onClick={animationClose}>Close</Button>
    </div>
  )
}
