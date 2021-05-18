import { ReactNode } from "react";
import ClassNames from "../utils/ClassNames";

type TertiaryButton = {
  click: CallableFunction;
  children: ReactNode;
  classes?: string;
};

export default function TertiaryButton({
  click,
  children,
  classes,
}: TertiaryButton) {
  return (
    <button
      type="button"
      className={ClassNames(
        classes,
        "px-[10px] pt-[9px] pb-[15px] bg-button-tertiary text-[16px] leading-[40px] tracking-[-0.27px] text-button-tertiary rounded-[5px] shadow-button-tertiary md:pl-[14px] md:pr-[13px] md:pt-[10px] hover:bg-button-tertiary-hover"
      )}
      onClick={() => click()}
    >
      {children}
    </button>
  );
}
