import { Alert } from "../../UI";
import { ChatItem } from "../ChatItem";

type ChatItem = {
  userId: string;
  username: string;
  lastMess: string;
  lastMessTime: string;
  lastMessCountMess: number;
};

const USERS: ChatItem[] = [
  // Пользователи, с которыми есть чат, или сохранен в контактах
  {
    userId: "user_id-25",
    username: "Alice",
    lastMess: "Hi",
    lastMessTime: "13:20",
    lastMessCountMess: 5, 
  },
  {
    userId: "user_id-3",
    username: "Michael",
    lastMess: "See you later!",
    lastMessTime: "14:05",
    lastMessCountMess: 2,
  },
];

export function ChatList() {
  const itemsCenter =
    !USERS || (USERS.length === 0 && "items-center justify-center h-screen");

  return (
    <div className={`${itemsCenter} flex flex-col gap-2 overflow-auto`}>
      {USERS && USERS.length >= 1 ? (
        USERS.map(
          ({ username, lastMess, lastMessTime, lastMessCountMess, userId }) => {
            return (
              <ChatItem
                key={userId}
                userId={userId}
                username={username}
                lastMess={lastMess}
                lastMessTime={lastMessTime}
                lastMessCountMess={lastMessCountMess}
              />
            );
          },
        )
      ) : (
        <Alert>Please select a chat</Alert>
      )}
    </div>
  );
}
