import useEmblaCarousel from "embla-carousel-react";

const Card = ({ values }) => {
  const [emblaRef] = useEmblaCarousel({ dragFree: true });

  return (
    <section class="m-auto">
      <div class="overflow-hidden" ref={emblaRef}>
        <div class="flex touch-pinch-zoom touch-pan-y ml-[calc(var(1rem) * -1);] gap-4">
          {values.map((value, index) => (
            <div
              class="min-w-[300px] min-h-[300px] shadow-md rounded-md overflow-hidden"
              key={index}
            >
              <img class="w-full h-full" src={value} alt="nike shoes" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
