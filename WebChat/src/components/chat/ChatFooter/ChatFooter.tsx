import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { IconButton, MessageInput } from "../../UI";

export function ChatFooter() {
  return (
    <>
      <MessageInput />
      <IconButton size="lg" onClick={()=>{}} icon={<PaperAirplaneIcon />} />
    </>
  );
}
