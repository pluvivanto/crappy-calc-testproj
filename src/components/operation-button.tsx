import { Dispatch, SetStateAction } from "react";

export default function OpsBtn({
  content,
  state,
  setState,
}: {
  content: string;
  state: string[];
  setState: Dispatch<SetStateAction<string[]>>;
}) {
  const clearScreen = () => {
    setState(["0"]);
  };

  const appendOpSign = () => {
    if (state.length > 10) return;
    setState([...state, content]);
  };

  const calcEq = () => {
    const equation = state.join("");
    if (!/[+\-*/]/.test(equation)) {
      setState([equation]);
      return;
    }

    const handleErr = () => {
      setState(["ERROR"]);
      setTimeout(clearScreen, 2000);
    };

    if (!/^\d+([+\-*/]\d+)*$/.test(equation)) {
      handleErr();
      return;
    }

    const numbers = equation.match(/\d+/g)?.map(Number) || [];
    const operators = equation.match(/[+\-*/]/g) || [];

    let res = numbers[0];
    for (let i = 0; i < operators.length; i++) {
      const op = operators[i];
      const param = numbers[i + 1];
      switch (op) {
        case "+":
          res += param;
          break;
        case "-":
          res -= param;
          break;
        case "*":
          res *= param;
          break;
        case "/":
          if (param === 0) {
            handleErr();
            return;
          }
          res = Math.floor(res / param);
          break;
        default:
          break;
      }
    }
    if (res < 0 || res >= 1000000000) {
      handleErr();
      return;
    }
    setState(res.toString().split(""));
  };

  return (
    <div
      className="btn btn-secondary btn-xl btn-circle"
      onClick={() => {
        switch (content) {
          case "+":
          case "-":
          case "*":
          case "/":
            appendOpSign();
            break;
          case "C":
            clearScreen();
            break;
          case "=":
            calcEq();
            break;
          default:
            break;
        }
      }}
    >
      <div className="flex content-center items-center align-center text-center">
        {content}
      </div>
    </div>
  );
}
