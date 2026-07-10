import { ChatItem } from "../ChatItem";

export function ChatList() {
    return <div className="flex flex-col gap-2">
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
    </div>
}