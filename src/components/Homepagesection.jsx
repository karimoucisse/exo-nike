import { IoIosArrowForward } from "react-icons/io";
import Card from "./Card";

const OPTIONS = { dragFree: true };
const SLIDE_COUNT = 16;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const Homepagesection = ({ title, values }) => {

  return (
    <div class="mt-6 mb-8 px-5">
      <div class="flex justify-between mb-6">
        <p class="text-[24px] font-semi-bold">{title}</p>
        <div class="flex items-center gap-2 text-[#B3B2B3] text-sm hover:text-gray-400">
          <p>Voir</p>
          <IoIosArrowForward />
        </div>
      </div>
      <Card values={values} />
    </div>
  );
};

export default Homepagesection;
