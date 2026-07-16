"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface OTPContextValue {
  digits: string[];
  maxLength: number;
  setDigit: (index: number, value: string) => void;
  refs: React.MutableRefObject<Array<HTMLInputElement | null>>;
}

const OTPContext = React.createContext<OTPContextValue | null>(null);

export interface InputOTPProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  maxLength?: number;
  onChange?: (value: string) => void;
  children: React.ReactNode;
}

export function InputOTP({
  children,
  maxLength = 6,
  onChange,
  className,
  ...props
}: InputOTPProps) {
  const [digits, setDigits] = React.useState<string[]>(
    Array.from({ length: maxLength }, () => "")
  );
  const refs = React.useRef<Array<HTMLInputElement | null>>(
    Array.from({ length: maxLength }, () => null)
  );

  React.useEffect(() => {
    onChange?.(digits.join(""));
  }, [digits, onChange]);

  const setDigit = (index: number, value: string) => {
    setDigits((current) => {
      const next = [...current];
      next[index] = value;
      return next;
    });
  };

  return (
    <OTPContext.Provider value={{ digits, maxLength, setDigit, refs }}>
      <div className={cn("flex flex-col gap-2", className)} {...props}>
        {children}
      </div>
    </OTPContext.Provider>
  );
}

export function InputOTPGroup({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "flex flex-wrap justify-center gap-2 max-w-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface InputOTPSlotProps extends React.ComponentPropsWithoutRef<"input"> {
  index: number;
}

export const InputOTPSlot = React.forwardRef<HTMLInputElement, InputOTPSlotProps>(
  ({ index, className, ...props }, forwardedRef) => {
    const context = React.useContext(OTPContext);
    if (!context) {
      throw new Error("<InputOTPSlot> must be used inside <InputOTP>");
    }

    const { digits, setDigit, maxLength, refs } = context;
    const value = digits[index] || "";
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    React.useEffect(() => {
      if (forwardedRef) {
        if (typeof forwardedRef === "function") {
          forwardedRef(inputRef.current);
        } else {
          forwardedRef.current = inputRef.current;
        }
      }
      refs.current[index] = inputRef.current;
    }, [forwardedRef, index, refs]);

    const focusInput = (nextIndex: number) => {
      refs.current[nextIndex]?.focus();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = event.target.value.replace(/\D/g, "");
      const nextValue = rawValue.slice(-1);
      setDigit(index, nextValue);

      if (nextValue && index < maxLength - 1) {
        focusInput(index + 1);
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Backspace") {
        if (value === "" && index > 0) {
          focusInput(index - 1);
        }
      }
    };

    return (
      <input
        ref={inputRef}
        type="text"
        inputMode="numeric"
        maxLength={1}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={cn(
          "h-14 min-w-[3rem] flex-1 rounded-xl border border-slate-300 bg-slate-50 text-center text-xl font-semibold text-black outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200",
          className
        )}
        {...props}
      />
    );
  }
);

InputOTPSlot.displayName = "InputOTPSlot";
