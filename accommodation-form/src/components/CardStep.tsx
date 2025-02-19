import { Logo } from "./Logo";

export const CardStep = ({ title = "Step", children }) => {
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
