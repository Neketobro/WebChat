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
  minLength?: number;

  errorText?: string;
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
  maxLength,
  minLength,

  errorText = "undefiend error",
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const error = errorText ? true : false;

  const COLORSERROR = error
    ? "border-(--destructive) animate-errorBounce"
    : "border-(--social-bg)";

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="w-full flex flex-col gap-1">
      {label && (
        <span className="w-full flex justify-between items-center">
          <label htmlFor={id} className="font-medium">
            {label}
          </label>
          {value && (
            <div className="text-(--destructive) text-sm">{errorText}</div>
          )}
        </span>
      )}

      <div
        className={`bg-white w-full p-2 px-3 border-[2px] flex items-center rounded-md ${COLORSERROR}`}
      >
        <input
          id={id}
          type={inputType}
          name={name}
          autoComplete={autoComplete}
          placeholder={error ? errorText : placeholder}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          minLength={minLength}
          className={`w-full outline-none ${error && "placeholder:text-(--destructive-hover)"}`}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="ml-2 text-sm text-(--text-h) cursor-pointer"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
    </div>
  );
}
