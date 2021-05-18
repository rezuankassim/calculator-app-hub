import { ReactNode } from "react";
import ClassNames from "../utils/ClassNames";

type PrimaryButton = {
  click: CallableFunction;
  children: ReactNode;
  classes?: string;
};

export default function PrimaryButton({
  click,
  children,
  classes,
}: PrimaryButton) {
  return (
    <button
      type="button"
      className={ClassNames(
        classes,
        "px-[10px] pt-[10px] pb-[14px] bg-button-primary text-[28px] leading-[40px] tracking-[-0.47px] text-secondary rounded-[5px] shadow-button-primary md:pl-[14px] md:pr-[13px] md:pt-[10px] hover:bg-button-primary-hover"
      )}
      onClick={() => click()}
    >
      {children}
    </button>
  );
}
