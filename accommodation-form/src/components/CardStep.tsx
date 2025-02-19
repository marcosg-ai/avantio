import { ReactChildren, ReactChild } from "react";

import { Logo } from "./Logo";

interface CardStepProps {
  children: ReactChild | ReactChildren;
  title: string;
}

export const CardStep = ({ title = "Step", children }: CardStepProps) => {
  return (
    <div className="card min-h-150">
      <Logo />

      <h2 className="text-black text-2xl font-bold text-center mb-6">
        {title}
      </h2>

      {children}
    </div>
  );
};
