import { useRef } from "react";

export function MessageInput() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const el = textareaRef.current;

    if (!el) return;

    el.style.height = "0px";
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  };

  return (
    <div className="w-full p-[10px] border-[2px] rounded-md border-(--border) overflow-y-hidden">
      <textarea
        ref={textareaRef}
        onInput={handleInput}
        className="resize-none outline-none overflow-y-auto max-h-[160px] h-[30px] w-full"
      />
    </div>
  );
}
