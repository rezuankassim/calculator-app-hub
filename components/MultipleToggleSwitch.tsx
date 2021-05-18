import { useState } from "react";
import { Switch } from "@headlessui/react";
import ClassNames from "../utils/ClassNames";

type MultipleToggleSwitch = {
  value: any;
  options: Array<any>;
  onChange: CallableFunction;
  position?: string;
};

export default function MultipleToggleSwitch({
  value,
  options = [],
  onChange,
  position,
}: MultipleToggleSwitch) {
  const [selected, setSelected] = useState(1);

  return (
    <div className="relative">
      <Switch.Group>
        <div className="flex items-end space-x-[21px] h-11">
          <Switch.Label className="text-[12px] text-primary leading-[13px] tracking-[1px]">
            THEME
          </Switch.Label>

          <Switch
            checked={false}
            onChange={() => onChange()}
            className="bg-secondary w-[71px] h-[26px] rounded-full p-[5px] group"
          >
            <span className="sr-only">Themes</span>
            <span
              aria-hidden="true"
              className={ClassNames(
                position ? position : "translate-x-0",
                "mb-1 pointer-events-none inline-block h-4 w-4 rounded-full bg-button-tertiary transform ring-0 transition ease-in-out duration-200"
              )}
            />
          </Switch>
        </div>

        <div className="absolute top-0 right-0 flex items-center space-x-[10px] mr-[7px]">
          {options.map((option) => (
            <p className="text-primary text-sm leading-[13px] tracking-[0px] w-3">
              {option}
            </p>
          ))}
        </div>
      </Switch.Group>
    </div>
  );
}
