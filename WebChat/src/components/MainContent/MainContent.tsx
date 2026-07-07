import { useState } from "react";
import { MessageInput } from "../UI";

export function MainContent() {
  const [chatOpen, setChatOpen] = useState<boolean>(true);

  return (
    <div className="bg-(--bg) w-full min-w-4xl h-full p-2 flex flex-col justify-between">
      {chatOpen ? (
        <>
          <div>Header</div>
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
