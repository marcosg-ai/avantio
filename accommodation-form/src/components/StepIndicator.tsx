import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const StepIndicator = () => {
  const step = useSelector((state: RootState) => state.form.step);

  return (
    <div className="flex w-full items-center justify-center mb-4">
      <div className=" flex flex-col justify-center w-3/4">
        <ol className="flex items-center justify-center w-full text-sm text-gray-500 font-medium sm:text-base">
          {/* STEP 1 ACCOMMODATION */}
          <li className="flex md:w-full items-center text-gray-600 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-8 ">
            <div className="flex items-center whitespace-nowrap after:content-['/'] sm:after:hidden after:mx-2 ">
              <span
                className={`w-6 h-6 ${step == 1 ? "bg-card" : "bg-gray-100"} border border-gray-200 rounded-full flex justify-center items-center mr-3 lg:w-10 lg:h-10`}
              >
                <svg
                  width="1.5em"
                  height="1.5em"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    d="M17 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M9 17H15"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>{" "}
            </div>
          </li>

          {/* STEP 2 OWNER */}
          <li className="flex md:w-full items-center text-gray-600 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-8 ">
            <div className="flex items-center whitespace-nowrap after:content-['/'] sm:after:hidden after:mx-2 ">
              <span
                className={`w-6 h-6 ${step == 2 ? "bg-card" : "bg-gray-100"} border border-gray-200 rounded-full flex justify-center items-center mr-3 lg:w-10 lg:h-10`}
              >
                <svg
                  width="1.5em"
                  height="1.5em"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    d="M7 18V17C7 14.2386 9.23858 12 12 12V12C14.7614 12 17 14.2386 17 17V18"
                    stroke="currentColor"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="1.5"
                  ></circle>
                </svg>
              </span>{" "}
            </div>
          </li>

          {/* STEP 3 CONFIRMATION */}
          <li className="flex items-center text-gray-600 ">
            <div className="flex items-center whitespace-nowrap ">
              <span
                className={`w-6 h-6 ${step == 3 ? "bg-card" : "bg-gray-100"} border border-gray-200 rounded-full flex justify-center items-center mr-3 lg:w-10 lg:h-10`}
              >
                <svg
                  width="1.5em"
                  height="1.5em"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M19.6224 10.3954L18.5247 7.7448L20 6L18 4L16.2647 5.48295L13.5578 4.36974L12.9353 2H10.981L10.3491 4.40113L7.70441 5.51596L6 4L4 6L5.45337 7.78885L4.3725 10.4463L2 11V13L4.40111 13.6555L5.51575 16.2997L4 18L6 20L7.79116 18.5403L10.397 19.6123L11 22H13L13.6045 19.6132L16.2551 18.5155C16.6969 18.8313 18 20 18 20L20 18L18.5159 16.2494L19.6139 13.598L21.9999 12.9772L22 11L19.6224 10.3954Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>{" "}
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};
