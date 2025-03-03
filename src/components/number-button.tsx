import React, { Dispatch, SetStateAction } from "react";

export default function NumBtn({
  content,
  state,
  setState,
}: {
  content: string;
  state: string[];
  setState: Dispatch<SetStateAction<string[]>>;
}) {
  return (
    <div
      className="btn btn-primary btn-xl btn-circle"
      onClick={() => {
        if (state.length > 10) return;
        setState(state[0] === "0" ? [content] : [...state, content]);
      }}
    >
      <div className="flex content-center items-center align-center text-center">
        {content}
      </div>
    </div>
  );
}
