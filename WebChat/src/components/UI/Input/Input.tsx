import { useState } from "react";
import type { ChangeEventHandler, HTMLInputAutoCompleteAttribute } from "react";

type InputProps = {
  label?: string;
  id?: string;
  name?: string;
  type?: "text" | "email" | "number" | "password";
  autoComplete?: HTMLInputAutoCompleteAttribute;
  value?: string | number | readonly string[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  maxLength?: number;
};

export function Input({
  label,
  id,
  placeholder,
  type = "text",
  name,
  autoComplete = "off",
  value,
  onChange,
  maxLength
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;  

  return (
    <div className="w-full flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="font-medium">
          {label}
        </label>
      )}

      <div className="bg-white w-full p-2 px-3 border-[2px] flex items-center rounded-md border-(--social-bg)">
        <input
          id={id}
          type={inputType}
          name={name}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="w-full outline-none"
          value={value}
          onChange={onChange}
          maxLength={maxLength}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="ml-2 text-sm text-(--text-h)"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
    </div>
  );
}
