import Head from "next/head";
import { useState } from "react";
import MultipleToggleSwitch from "../components/MultipleToggleSwitch";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import TertiaryButton from "../components/TertiaryButton";
import numberFormatter from "../utils/numberFormatter";

export default function Home() {
  const [output, setOutput] = useState("0");
  const [operationee, setOperationee] = useState("0");
  const [operation, setOperation] = useState("");
  const [activeOperation, setActiveOperation] = useState("");
  const [isResult, setIsResult] = useState(false);
  const [theme, setTheme] = useState(1);

  const input = (input: string) => {
    let dirtyOutput = output;
    setActiveOperation("");

    if (activeOperation !== "" && operationee !== "0") {
      dirtyOutput = "0";

      setOutput("0");
      setOperationee(output);
    }

    if (dirtyOutput === "0") {
      return setOutput(input);
    }

    setOutput(dirtyOutput + input);
  };

  const del = () => {
    if (isResult || !output) {
      return;
    }

    if (output.toString().length == 1) {
      return setOutput("0");
    }

    setOutput(output.slice(0, -1));
  };

  const action = (action: string) => {
    if (operation !== "") {
      equal();
    }

    if (output === "0") {
      setOperationee("0");
    } else {
      setOperationee(output);
    }

    setActiveOperation(action);
    setOperation(action);
  };

  const equal = () => {
    let firstNum = 0;
    let secondNum = 0;
    let result = 0;

    const operations: {
      [key: string]: CallableFunction;
    } = {
      plus: (firstNum: number, secondNum: number): number =>
        firstNum + secondNum,
      minus: (firstNum: number, secondNum: number): number =>
        firstNum - secondNum,
      multiply: (firstNum: number, secondNum: number): number =>
        Math.round((firstNum * secondNum + Number.EPSILON) * 100) / 100,
      divide: (firstNum: number, secondNum: number): number =>
        Math.round((firstNum / secondNum + Number.EPSILON) * 100) / 100,
    };

    setActiveOperation("");

    if (operation === "" && operationee === "0") {
      return;
    }

    if (operationee === "0" && output === "0") {
      return;
    }

    if (activeOperation !== operation) {
      if (
        (operationee !== "0" && output !== "0") ||
        (operationee !== "0" && output == "0") ||
        (operationee === "0" && output !== "0")
      ) {
        firstNum = Number(operationee);
        secondNum = Number(output);
      }
    } else {
      firstNum = Number(output);
      secondNum = Number(output);
    }

    result = operations[operation]?.(firstNum, secondNum);
    setOperationee("0");
    setIsResult(true);
    setOperation("");
    setOutput(result.toString());
  };

  const reset = () => {
    setOutput("0");
    setOperation("");
    setActiveOperation("");
    setIsResult(false);
  };

  const switchTheme = () => {
    if (theme < 3) {
      setTheme(theme + 1);
    } else {
      setTheme(1);
    }
  };

  const themePosition: { [key: number]: string } = {
    1: "translate-x-[-22px]",
    2: "translate-x-0",
    3: "translate-x-[22px]",
  };

  const themes: { [key: number]: string } = {
    1: "theme-one",
    2: "theme-two",
    3: "theme-three",
  };

  return (
    <div className={themes[theme]}>
      <div className="px-6 pt-7 pb-[31px] bg-primary h-screen md:flex md:items-center md:justify-center">
        <div className="md:w-full md:max-w-[540px]">
          <div className="flex items-center justify-between">
            <h1 className="text-[32px] leading-[36px] tracking-[-0.53px] text-primary font-bold">
              calc
            </h1>

            <MultipleToggleSwitch
              value={theme}
              options={[1, 2, 3]}
              onChange={switchTheme}
              position={themePosition[theme]}
            />
          </div>

          <div className="flex items-center justify-end mt-8 w-full rounded-[10px] bg-darker px-6 py-[26px] text-[32px] leading-[36px] tracking-[-0.53px] text-primary md:px-8 md:pt-[38px] md:pb-9">
            <span>{numberFormatter(output)}</span>
          </div>

          <div className="grid grid-cols-4 gap-[13px] mt-6 p-6 bg-secondary rounded-[10px] md:gap-x-[25px] md:gap-y-6 md:px-[30px] md:py-8">
            <PrimaryButton click={() => input("7")}>7</PrimaryButton>

            <PrimaryButton click={() => input("8")}>8</PrimaryButton>

            <PrimaryButton click={() => input("9")}>9</PrimaryButton>

            <SecondaryButton click={() => del()}>DEL</SecondaryButton>

            <PrimaryButton click={() => input("4")}>4</PrimaryButton>

            <PrimaryButton click={() => input("5")}>5</PrimaryButton>

            <PrimaryButton click={() => input("6")}>6</PrimaryButton>

            <PrimaryButton
              click={() => action("plus")}
              classes={`px-[10px] pt-[9px] pb-[15px] transform ${
                activeOperation === "plus" ? "translate-y-0.5 shadow-none" : ""
              }`}
            >
              +
            </PrimaryButton>

            <PrimaryButton click={() => input("1")}>1</PrimaryButton>

            <PrimaryButton click={() => input("2")}>2</PrimaryButton>

            <PrimaryButton click={() => input("3")}>3</PrimaryButton>

            <PrimaryButton
              click={() => action("minus")}
              classes={`px-[10px] pt-[9px] pb-[15px] transform ${
                activeOperation === "minus" ? "translate-y-0.5 shadow-none" : ""
              }`}
            >
              -
            </PrimaryButton>

            <PrimaryButton click={() => input(".")}>.</PrimaryButton>

            <PrimaryButton click={() => input("0")}>0</PrimaryButton>

            <PrimaryButton
              click={() => action("divide")}
              classes={`px-[10px] pt-[9px] pb-[15px] transform ${
                activeOperation === "divide"
                  ? "translate-y-0.5 shadow-none"
                  : ""
              }`}
            >
              /
            </PrimaryButton>

            <PrimaryButton
              click={() => action("multiply")}
              classes={`px-[10px] pt-[9px] pb-[15px] transform ${
                activeOperation === "multiply"
                  ? "translate-y-0.5 shadow-none"
                  : ""
              }`}
            >
              x
            </PrimaryButton>

            <SecondaryButton click={() => reset()} classes="col-span-2">
              RESET
            </SecondaryButton>

            <TertiaryButton click={() => equal()} classes="col-span-2">
              =
            </TertiaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
