import Head from "next/head";
import { useState } from "react";
import numberFormatter from "../utils/numberFormatter";

export default function Home() {
  const [output, setOutput] = useState(0);
  const [isResult, setIsResult] = useState(false);

  const input = (input: String) => {
    setOutput(parseInt(output.toString() + input));
  };

  const del = () => {
    if (isResult || !output) {
      return;
    }

    if (output.toString().length == 1) {
      setOutput(0);

      return;
    }

    setOutput(parseInt(output.toString().slice(0, -1)));
  };

  return (
    <div className="theme-one">
      <div className="px-6 pt-7 pb-[31px] bg-primary h-screen">
        <div className="flex items-center justify-between">
          <h1 className="text-[32px] leading-[36px] tracking-[-0.53px] text-primary font-bold">
            calc
          </h1>
        </div>

        <div className="flex items-center justify-end mt-8 w-full rounded-[10px] bg-darker px-6 py-[26px] text-[32px] leading-[36px] tracking-[-0.53px] text-primary">
          <span>{numberFormatter(output)}</span>
        </div>

        <div className="grid grid-cols-4 gap-[13px] mt-6 p-6 bg-secondary rounded-[10px]">
          <button
            type="button"
            className="px-[10px] pt-[10px] pb-[14px] bg-button-primary text-[28px] leading-[40px] tracking-[-0.47px] text-secondary rounded-[5px] shadow-button-primary"
            onClick={() => input("7")}
          >
            7
          </button>

          <button
            type="button"
            className="px-[10px] pt-[10px] pb-[14px] bg-button-primary text-[28px] leading-[40px] tracking-[-0.47px] text-secondary rounded-[5px] shadow-button-primary"
            onClick={() => input("8")}
          >
            8
          </button>

          <button
            type="button"
            className="px-[10px] pt-[10px] pb-[14px] bg-button-primary text-[28px] leading-[40px] tracking-[-0.47px] text-secondary rounded-[5px] shadow-button-primary"
            onClick={() => input("9")}
          >
            9
          </button>

          <button
            type="button"
            className="px-[10px] pt-[9px] pb-[15px] bg-button-secondary text-[16px] leading-[40px] tracking-[-0.27px] text-white rounded-[5px] shadow-button-secondary"
            onClick={() => del()}
          >
            DEL
          </button>

          <button
            type="button"
            className="px-[10px] pt-[10px] pb-[14px] bg-button-primary text-[28px] leading-[40px] tracking-[-0.47px] text-secondary rounded-[5px] shadow-button-primary"
            onClick={() => input("4")}
          >
            4
          </button>

          <button
            type="button"
            className="px-[10px] pt-[10px] pb-[14px] bg-button-primary text-[28px] leading-[40px] tracking-[-0.47px] text-secondary rounded-[5px] shadow-button-primary"
            onClick={() => input("5")}
          >
            5
          </button>

          <button
            type="button"
            className="px-[10px] pt-[10px] pb-[14px] bg-button-primary text-[28px] leading-[40px] tracking-[-0.47px] text-secondary rounded-[5px] shadow-button-primary"
            onClick={() => input("6")}
          >
            6
          </button>

          <button
            type="button"
            className="px-[10px] pt-[9px] pb-[15px] bg-button-primary text-[28px] leading-[40px] tracking-[-0.47px] text-secondary rounded-[5px] shadow-button-primary"
          >
            +
          </button>

          <button
            type="button"
            className="px-[10px] pt-[10px] pb-[14px] bg-button-primary text-[28px] leading-[40px] tracking-[-0.47px] text-secondary rounded-[5px] shadow-button-primary"
            onClick={() => input("1")}
          >
            1
          </button>

          <button
            type="button"
            className="px-[10px] pt-[10px] pb-[14px] bg-button-primary text-[28px] leading-[40px] tracking-[-0.47px] text-secondary rounded-[5px] shadow-button-primary"
            onClick={() => input("2")}
          >
            2
          </button>

          <button
            type="button"
            className="px-[10px] pt-[10px] pb-[14px] bg-button-primary text-[28px] leading-[40px] tracking-[-0.47px] text-secondary rounded-[5px] shadow-button-primary"
            onClick={() => input("3")}
          >
            3
          </button>

          <button
            type="button"
            className="px-[10px] pt-[9px] pb-[15px] bg-button-primary text-[28px] leading-[40px] tracking-[-0.47px] text-secondary rounded-[5px] shadow-button-primary"
          >
            -
          </button>

          <button
            type="button"
            className="px-[10px] pt-[10px] pb-[14px] bg-button-primary text-[28px] leading-[40px] tracking-[-0.47px] text-secondary rounded-[5px] shadow-button-primary"
          >
            .
          </button>

          <button
            type="button"
            className="px-[10px] pt-[10px] pb-[14px] bg-button-primary text-[28px] leading-[40px] tracking-[-0.47px] text-secondary rounded-[5px] shadow-button-primary"
          >
            0
          </button>

          <button
            type="button"
            className="px-[10px] pt-[10px] pb-[14px] bg-button-primary text-[28px] leading-[40px] tracking-[-0.47px] text-secondary rounded-[5px] shadow-button-primary"
          >
            /
          </button>

          <button
            type="button"
            className="px-[10px] pt-[9px] pb-[15px] bg-button-primary text-[28px] leading-[40px] tracking-[-0.47px] text-secondary rounded-[5px] shadow-button-primary"
          >
            x
          </button>

          <button
            type="button"
            className="col-span-2 px-[10px] pt-[9px] pb-[15px] bg-button-secondary text-[16px] leading-[40px] tracking-[-0.27px] text-white rounded-[5px] shadow-button-secondary"
          >
            RESET
          </button>

          <button
            type="button"
            className="col-span-2 px-[10px] pt-[9px] pb-[15px] bg-button-tertiary text-[16px] leading-[40px] tracking-[-0.27px] text-white rounded-[5px] shadow-button-tertiary"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
