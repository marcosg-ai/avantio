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
    <div className="flex w-full items-center justify-center mt-10">
      <div
        className={`flex w-9/10  ${textPrev ? "justify-between" : "justify-center"}  `}
      >
        {textPrev != "" && (
          <button
            onClick={handlePrev}
            className="text-white hover:bg-card w-25 h-8 hover:rounded-xl"
          >
            {textPrev}
          </button>
        )}
        <button
          type="submit"
          onClick={handleNext}
          className="text-white hover:bg-card w-25 h-8 hover:rounded-xl"
        >
          {textNext}
        </button>
      </div>
    </div>
  );
};
