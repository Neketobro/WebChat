import { useState } from "react";
import { Button, MessageInput } from "../UI";
import { MyProfileElement } from "../MyProfileElement";

type Props = {
  onOpen: () => void;
};

export function MainContent({ onOpen }: Props) {
  const [chatOpen, setChatOpen] = useState<boolean>(true);

  return (
    <div className="bg-(--bg) w-full min-w-4xl h-full p-2 flex flex-col justify-between">
      {chatOpen ? (
        <>
          <div className="px-2 flex gap-4">
            <MyProfileElement />
            <Button onClick={onOpen}>Open</Button>
          </div>
          <div>Chat messages</div>
          <div>
            <MessageInput />
          </div>
        </>
      ) : (
        <p>Please select chat</p>
      )}
    </div>
  );
}
