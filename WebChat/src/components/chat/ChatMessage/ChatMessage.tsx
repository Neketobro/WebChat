type Props = {
  //   id: string;
  text: string;
  owner: "sent" | "received";
  date ?: string;
};

export function ChatMessage({ owner, text, date = "12:12" }: Props) {
  const stylesContainer = {
    sent: "bg-(--accent-bg)",
    received: "bg-(--social-bg)",
  };

  const stylesText = {
    sent: "text-(--text-h)",
    received: "text-(--accent-bg)",
  };

  return (
    <div className={`w-full bg-[lightyellow] flex ${owner === 'sent' ? "justify-end" : "justify-start"}`}>
      <div className={`w-max max-w-3/5 p-2 rounded-sm wrap-break-word ${stylesContainer[owner]}`}>
        {text}
        <p className={`${stylesText[owner]} mt-1 text-xs text-end`}>{date}</p>
      </div>
      
    </div>
  );
}
