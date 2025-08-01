"use client";
import * as React from "react";

interface ActionButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  onClick,
  disabled = false
}) => {
  return (
    <div className="flex fixed bottom-0 w-full max-w-[clamp(360px,100vw,430px)] mx-auto flex-col gap-2 px-6 py-4 bg-white">
      <button
        onClick={onClick}
        disabled={disabled}
        className="flex relative justify-center items-center self-stretch bg-orange-400 rounded-lg h-[50px] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-500 transition-colors"
      >
        <span className="relative text-base font-medium text-zinc-50">
          {text}
        </span>
      </button>
    </div>
  );
};
