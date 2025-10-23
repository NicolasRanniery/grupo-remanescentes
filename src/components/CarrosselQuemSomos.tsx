import { CircleChevronRight, CircleChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import { texts } from "../../public/carrossel";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";


export default function CarrosselQuemSomos() {

  const handlers = useSwipeable({
  onSwipedLeft: () => setCurr((c) => (c + 1) % texts.length),
  onSwipedRight: () => setCurr((c) => (c - 1 + texts.length) % texts.length),
});

  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? texts.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === texts.length - 1 ? 0 : curr + 1));

  return (
    <div className="w-full lg:w-1/2 px-4 lg:px-0">
      {/* Carrossel */}
      <div {...handlers} className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {texts.map((item, index) => (
            <div className="w-full shrink-0 px-2 md:px-4" key={index}>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 text-[#303030] font-texgyretermes italic">
                {item.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6 md:mb-8 font-source-serif-4 text-justify">
                {item.description.split('\n').map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Botões */}
      <div className="relative z-10 flex gap-2 mt-2 px-2 md:px-4">
        <Button
          className="hover:bg-[#535353] bg-[#292929] rounded-full text-[#cdad7d] p-2 sm:p-3"
          onClick={prev}
          >
          <CircleChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
        <Button
          className="hover:bg-[#535353] bg-[#292929] rounded-full text-[#cdad7d] p-2 sm:p-3"
          onClick={next}
        >
          <CircleChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      </div>
    </div>
  );
}
