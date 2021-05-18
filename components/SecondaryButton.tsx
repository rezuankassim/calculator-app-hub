import { ReactNode } from "react";
import ClassNames from "../utils/ClassNames";

type SecondaryButton = {
  click: CallableFunction;
  children: ReactNode;
  classes?: string;
};

export default function SecondaryButton({
  click,
  children,
  classes,
}: SecondaryButton) {
  return (
    <button
      type="button"
      className={ClassNames(
        classes,
        "px-[10px] pt-[9px] pb-[15px] bg-button-secondary text-[16px] leading-[40px] tracking-[-0.27px] text-button-secondary rounded-[5px] shadow-button-secondary md:pl-[14px] md:pr-[13px] md:pt-[10px] hover:bg-button-secondary-hover"
      )}
      onClick={() => click()}
    >
      {children}
    </button>
  );
}
