export function MessageInput() {
  return (
    <div className="w-full p-[10px] border-[2px] rounded-md border-(--border)">
      <input
        className="w-full outline-hidden text-(--text)"
        type="text"
        placeholder="Enter your message..."
      />
    </div>
  );
}
