"use client";

import { useState } from "react";
import DisplayPanel from "./display-panel";
import NumBtn from "./number-button";
import OpsBtn from "./operation-button";

export default function CalcBoard() {
  const [state, setState] = useState(["0"]);

  return (
    <div className="w-fit border-5 border-gray-500 border-solid rounded-xl">
      <div className="display-window bg-black p-4 rounded-t-lg border-b-5 border-gray-500 border-solid">
        <DisplayPanel state={state} />
      </div>
      <div className="button-board bg-white grid grid-cols-4 gap-2 w-fit h-fit p-4 rounded-b-lg">
        <NumBtn content="1" state={state} setState={setState} />
        <NumBtn content="2" state={state} setState={setState} />
        <NumBtn content="3" state={state} setState={setState} />
        <OpsBtn content="+" state={state} setState={setState} />
        <NumBtn content="4" state={state} setState={setState} />
        <NumBtn content="5" state={state} setState={setState} />
        <NumBtn content="6" state={state} setState={setState} />
        <OpsBtn content="-" state={state} setState={setState} />
        <NumBtn content="7" state={state} setState={setState} />
        <NumBtn content="8" state={state} setState={setState} />
        <NumBtn content="9" state={state} setState={setState} />
        <OpsBtn content="*" state={state} setState={setState} />
        <OpsBtn content="C" state={state} setState={setState} />
        <NumBtn content="0" state={state} setState={setState} />
        <OpsBtn content="=" state={state} setState={setState} />
        <OpsBtn content="/" state={state} setState={setState} />
      </div>
    </div>
  );
}
