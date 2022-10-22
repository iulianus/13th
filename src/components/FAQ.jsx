import { useState } from "react";

export const FAQ = () => (
  <section class="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <img
      class="absolute bottom-0 left-1/2 transform -translate-x-1/2"
      src="flaro-assets/images/faqs/gradient.svg"
      alt=""
    />
    <div class="relative z-10 container px-4 mx-auto">
      <div class="md:max-w-4xl mx-auto">
        <p class="mb-7 custom-block-subtitle text-center">
          Have any questions?
        </p>
        <h2 class="mb-16 custom-block-big-title text-center">
          Frequently Asked Questions
        </h2>
        <div class="mb-11 flex flex-wrap -m-1">
          <div class="w-full p-1">
            <FAQBox
              title="Do you provide any free plan?"
              content="Lorem ipsum dolor sit amet, to the consectr adipiscing elit.
              Volutpat tempor to the condi mentum vitae vel purus. Lorem ipsum
              dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to
              the condi mentum vitae vel purus. Lorem ipsum dolor sit amet, to the
              consectr adipiscing elit. Volutpat tempor to the condi mentum vitae
              vel purus."
              defaultOpen
            />
          </div>
          <div class="w-full p-1">
            <FAQBox
              title="How to claim your 25% discount offer?"
              content="Lorem ipsum dolor sit amet, to the consectr adipiscing elit.
              Volutpat tempor to the condi mentum vitae vel purus. Lorem
              ipsum dolor sit amet, to the consectr adipiscing elit.
              Volutpat tempor to the condi mentum vitae vel purus."
              defaultOpen
            />
          </div>
          <div class="w-full p-1">
            <FAQBox
              title="What&rsquo;s your refund policy?"
              content="Lorem ipsum dolor sit amet, to the consectr adipiscing elit.
              Volutpat tempor to the condi mentum vitae vel purus."
              defaultOpen
            />
          </div>
          <div class="w-full p-1">
            <FAQBox
              title="How to get support for the product?"
              content=" Lorem ipsum dolor sit amet, to the consectr adipiscing elit.
              Volutpat tempor to the condi mentum vitae vel purus. Lorem
              ipsum dolor sit amet, to the consectr adipiscing elit.
              Volutpat tempor to the condi mentum vitae vel purus. Lorem
              ipsum dolor sit amet, to the consectr adipiscing elit.
              Volutpat tempor to the condi mentum vitae vel purus. Lorem
              ipsum dolor sit amet, to the consectr adipiscing elit.
              Volutpat tempor to the condi mentum vitae vel purus."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      class="pt-6 pb-2 px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div class="flex flex-col p-2  justify-center items-start">
        <h3 class=" custom-content-title">{title}</h3>
        <p
          className={`text-customGrayText pt-4 transition-all duration-500 overflow-hidden ${
            isOpen ? "max-h-96 mb-4" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div class="absolute top-8 right-8">
        <svg
          width="28px"
          height="30px"
          viewbox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
