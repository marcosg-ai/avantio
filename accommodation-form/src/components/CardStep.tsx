import { ReactChildren, ReactChild } from "react";

import { Logo } from "./Logo";
import { StepIndicator } from "./StepIndicator";

interface CardStepProps {
  children: ReactChild | ReactChildren;
  title: string;
}

export const CardStep = ({ title = "Step", children }: CardStepProps) => {
  return (
    <div className="card min-h-170 ">
      <div className="flex flex-col w-full">
        <StepIndicator />
        <h2 className="text-gray-150 text-2xl font-bold text-center mb-6">
          {title}
        </h2>
      </div>
      <div className="flex flex-row w-full justify-center">{children}</div>
    </div>
  );
};
