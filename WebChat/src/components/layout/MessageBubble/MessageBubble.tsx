import { ChatMessage } from "../../chat";

export function MessageBubble() {
  return (
    <div className="h-full overflow-y-auto flex flex-col gap-2 p-2">
      <ChatMessage text={"Hello worsssssssssssssssssssssssssssssssssssssss sssssssssssssssssssssssssssssss ssssssssssssssssssssssssssssss ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss ssssssssssssssssssssssssssssss ssssssssssssssssssssssssssssss ssssssssssssssssssssssssssssssssssssssssssld"} owner={"sent"} />
      <ChatMessage text={"Hello world"} owner={"received"} />
      <ChatMessage text={"Hello. My name is Jhon"} owner={"sent"} />
      <ChatMessage text={"Hello. My name is Jhon"} owner={"received"} />
      <ChatMessage text={"Hello. My name is Jhon"} owner={"sent"} />
      <ChatMessage text={"Hello. My name is Jhon"} owner={"sent"} />
      <ChatMessage text={"Hello. My name is Jhon"} owner={"received"} />
      <ChatMessage text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium delectus ipsa possimus autem voluptatibus hic fugit maiores iste ut, dignissimos cumque itaque! Nulla officiis commodi perspiciatis harum ad beatae architecto."} owner={"received"} />
      <ChatMessage text={"Hello. My name is Jhon"} owner={"received"} />
      <ChatMessage text={"Hello. My name is Jhon"} owner={"received"} />
      <ChatMessage text={"Hello. My name is Jhon"} owner={"received"} />
      <ChatMessage text={"Hello. My name is Jhon"} owner={"sent"} />
      <ChatMessage text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium delectus ipsa possimus autem voluptatibus hic fugit maiores iste ut, dignissimos cumque itaque! Nulla officiis commodi perspiciatis harum ad beatae architecto."} owner={"sent"} />
      <ChatMessage text={"Hello. My name is Jhon"} owner={"sent"} />
      <ChatMessage text={"Hello. My name is Jhon"} owner={"received"} />
    </div>
  );
}
