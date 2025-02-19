interface FooterProps {
  textNext: string;
  textPrev: string;
  handleNext?: () => void;
  handlePrev?: () => void;
}

export const Footer = ({
  textNext,
  handleNext,
  textPrev = "",
  handlePrev,
}: FooterProps) => {
  return (
    <div className="flex w-full items-center justify-center">
      <div
        className={`flex w-full  ${textPrev ? "justify-between" : "justify-center"}`}
      >
        <div>
          {textPrev != "" && (
            <button
              onClick={handlePrev}
              className="text-white bg-orange-500 w-25 h-8 rounded-xl border border-orange-500 hover:bg-transparent hover:text-white hover:text-orange-500 border-2 transition"
            >
              {textPrev}
            </button>
          )}
        </div>
        <button
          type="submit"
          onClick={handleNext}
          className="text-white bg-orange-500 w-25 h-8 rounded-xl border border-orange-500 hover:bg-transparent hover:text-white hover:text-orange-500 border-2 transition"
        >
          {textNext}
        </button>
      </div>
    </div>
  );
};
