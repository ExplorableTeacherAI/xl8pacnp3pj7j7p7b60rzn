import { useState } from "react";
import { Section } from "@/components/templates";
import { Heading } from "@/components/molecules/Heading";
import { InteractiveParagraph } from "@/components/molecules/InteractiveParagraph";
import { Stepper } from "@/components/annotations/Stepper";
import { ShoppingBag, Shirt } from "lucide-react";

/**
 * Section 1: Introduction to Ratios
 * Students learn what ratios are and how to express them using a shopping context.
 */
export const IntroToRatiosSection = () => {
  const [shirts, setShirts] = useState(3);
  const [pants, setPants] = useState(2);

  // Calculate GCD for simplified ratio
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  const divisor = gcd(shirts, pants);
  const simplifiedShirts = shirts / divisor;
  const simplifiedPants = pants / divisor;

  return (
    <Section id="intro-to-ratios">
      <Heading level={1}>What is a Ratio?</Heading>

      <InteractiveParagraph className="mb-6 text-lg leading-relaxed">
        A <strong>ratio</strong> is a way to compare two quantities. When you go shopping,
        you often compare things—like how many shirts you're buying compared to how many pants.
      </InteractiveParagraph>

      <InteractiveParagraph className="mb-6 text-lg leading-relaxed">
        Imagine you're at the mall and you put{" "}
        <Stepper
          id="shirts-stepper"
          value={shirts}
          onChange={setShirts}
          min={1}
          max={10}
          step={1}
          color="#2563eb"
          bgColor="rgba(37, 99, 235, 0.1)"
        />{" "}
        shirts and{" "}
        <Stepper
          id="pants-stepper"
          value={pants}
          onChange={setPants}
          min={1}
          max={10}
          step={1}
          color="#7c3aed"
          bgColor="rgba(124, 58, 237, 0.1)"
        />{" "}
        pants into your shopping bag.
      </InteractiveParagraph>

      {/* Visual Shopping Bag */}
      <div className="my-8 flex justify-center">
        <div className="relative bg-gradient-to-b from-amber-50 to-amber-100 border-2 border-amber-300 rounded-b-3xl p-6 min-w-[300px] shadow-lg">
          {/* Bag handles */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-16">
            <div className="w-3 h-8 bg-amber-400 rounded-t-full"></div>
            <div className="w-3 h-8 bg-amber-400 rounded-t-full"></div>
          </div>
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-4 border-4 border-amber-400 rounded-t-full border-b-0"></div>

          <div className="flex items-center justify-center gap-8 py-4">
            {/* Shirts */}
            <div className="flex flex-col items-center">
              <div className="flex flex-wrap justify-center gap-2 max-w-[120px]">
                {Array.from({ length: shirts }).map((_, i) => (
                  <div
                    key={`shirt-${i}`}
                    className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shadow-md transform hover:scale-110 transition-transform"
                  >
                    <Shirt className="w-6 h-6 text-white" />
                  </div>
                ))}
              </div>
              <span className="mt-3 text-sm font-semibold text-blue-600">
                {shirts} {shirts === 1 ? "Shirt" : "Shirts"}
              </span>
            </div>

            {/* Divider */}
            <div className="text-3xl font-bold text-gray-400">:</div>

            {/* Pants */}
            <div className="flex flex-col items-center">
              <div className="flex flex-wrap justify-center gap-2 max-w-[120px]">
                {Array.from({ length: pants }).map((_, i) => (
                  <div
                    key={`pants-${i}`}
                    className="w-10 h-10 bg-violet-500 rounded-lg flex items-center justify-center shadow-md transform hover:scale-110 transition-transform"
                  >
                    <span className="text-white text-lg">👖</span>
                  </div>
                ))}
              </div>
              <span className="mt-3 text-sm font-semibold text-violet-600">
                {pants} {pants === 1 ? "Pair" : "Pairs"}
              </span>
            </div>
          </div>

          {/* Shopping bag icon */}
          <div className="absolute -bottom-3 -right-3 bg-amber-200 p-2 rounded-full">
            <ShoppingBag className="w-5 h-5 text-amber-600" />
          </div>
        </div>
      </div>

      {/* Ratio Display */}
      <div className="my-8 bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-200 rounded-xl p-6 text-center">
        <p className="text-lg text-gray-600 mb-3">The ratio of shirts to pants is:</p>
        <div className="flex items-center justify-center gap-4 text-3xl font-bold">
          <span className="text-blue-600">{shirts}</span>
          <span className="text-gray-400">:</span>
          <span className="text-violet-600">{pants}</span>
        </div>
        {(shirts !== simplifiedShirts || pants !== simplifiedPants) && (
          <p className="mt-3 text-gray-500">
            Simplified: <span className="font-semibold text-blue-600">{simplifiedShirts}</span>
            <span className="mx-1">:</span>
            <span className="font-semibold text-violet-600">{simplifiedPants}</span>
          </p>
        )}
      </div>

      {/* Ways to Write a Ratio */}
      <Heading level={2} className="mt-10">Three Ways to Write a Ratio</Heading>

      <InteractiveParagraph className="mb-4 text-lg leading-relaxed">
        There are three common ways to express the same ratio:
      </InteractiveParagraph>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm text-gray-500 mb-2">Using a colon</p>
          <p className="text-2xl font-bold">
            <span className="text-blue-600">{shirts}</span>
            <span className="text-gray-400 mx-1">:</span>
            <span className="text-violet-600">{pants}</span>
          </p>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm text-gray-500 mb-2">Using words</p>
          <p className="text-2xl font-bold">
            <span className="text-blue-600">{shirts}</span>
            <span className="text-gray-600 mx-2">to</span>
            <span className="text-violet-600">{pants}</span>
          </p>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm text-gray-500 mb-2">As a fraction</p>
          <p className="text-2xl font-bold">
            <span className="text-blue-600">{shirts}</span>
            <span className="text-gray-400 mx-1">/</span>
            <span className="text-violet-600">{pants}</span>
          </p>
        </div>
      </div>

      <InteractiveParagraph className="mt-6 text-lg leading-relaxed text-gray-600">
        Try changing the number of shirts and pants above using the{" "}
        <span className="text-blue-600 font-semibold">blue</span> and{" "}
        <span className="text-violet-600 font-semibold">purple</span> numbers to see how the ratio changes!
      </InteractiveParagraph>
    </Section>
  );
};

export default IntroToRatiosSection;
