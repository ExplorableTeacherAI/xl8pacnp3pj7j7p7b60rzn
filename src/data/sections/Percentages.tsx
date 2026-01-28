import { useState } from "react";
import { Section } from "@/components/templates";
import { Heading } from "@/components/molecules/Heading";
import { InteractiveParagraph } from "@/components/molecules/InteractiveParagraph";
import { Stepper } from "@/components/annotations/Stepper";
import { Percent, Tag, Sparkles } from "lucide-react";

/**
 * Section 3: Percentages
 * Students learn that percentages mean "per 100" and how to calculate discounts.
 */
export const PercentagesSection = () => {
  const [originalPrice, setOriginalPrice] = useState(80);
  const [discountPercent, setDiscountPercent] = useState(25);

  const discountAmount = (originalPrice * discountPercent) / 100;
  const salePrice = originalPrice - discountAmount;

  return (
    <Section id="percentages">
      <Heading level={1}>Understanding Percentages</Heading>

      <InteractiveParagraph className="mb-6 text-lg leading-relaxed">
        The word <strong>percent</strong> comes from Latin meaning "per hundred."
        So when we say 25%, we mean 25 out of every 100.
      </InteractiveParagraph>

      {/* Visual representation of percentage */}
      <div className="my-8 bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-xl p-6">
        <p className="text-center text-lg mb-4">
          <span className="font-bold text-rose-600">{discountPercent}%</span> means{" "}
          <span className="font-bold">{discountPercent}</span> out of{" "}
          <span className="font-bold">100</span>
        </p>

        {/* Grid visualization */}
        <div className="flex justify-center">
          <div className="grid grid-cols-10 gap-0.5 p-2 bg-white rounded-lg shadow-inner">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-sm transition-colors duration-200 ${
                  i < discountPercent ? "bg-rose-500" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-3">
          {discountPercent} squares are colored out of 100
        </p>
      </div>

      <Heading level={2} className="mt-10">Calculating Discounts</Heading>

      <InteractiveParagraph className="mb-6 text-lg leading-relaxed">
        When shopping, you'll often see sale signs like "25% OFF!" Let's learn how to calculate
        the actual savings.
      </InteractiveParagraph>

      <InteractiveParagraph className="mb-6 text-lg leading-relaxed">
        Imagine you find a jacket with an original price of $
        <Stepper
          id="original-price"
          value={originalPrice}
          onChange={setOriginalPrice}
          min={10}
          max={200}
          step={5}
          color="#e11d48"
          bgColor="rgba(225, 29, 72, 0.1)"
        />{" "}
        and it's on sale for{" "}
        <Stepper
          id="discount-percent"
          value={discountPercent}
          onChange={setDiscountPercent}
          min={5}
          max={90}
          step={5}
          color="#e11d48"
          bgColor="rgba(225, 29, 72, 0.1)"
        />
        % off.
      </InteractiveParagraph>

      {/* Price Tag Visualization */}
      <div className="my-8 flex justify-center">
        <div className="relative">
          {/* Sale badge */}
          <div className="absolute -top-4 -right-4 bg-rose-500 text-white px-3 py-1 rounded-full font-bold text-sm flex items-center gap-1 shadow-lg z-10">
            <Sparkles className="w-4 h-4" />
            {discountPercent}% OFF
          </div>

          {/* Price tag */}
          <div className="bg-white border-2 border-gray-300 rounded-2xl p-8 shadow-xl min-w-[280px]">
            {/* Hole for string */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-200 rounded-full border-2 border-gray-300" />

            <div className="flex items-center justify-center gap-2 mb-4">
              <Tag className="w-6 h-6 text-gray-400" />
              <span className="text-gray-500 font-medium">Price Tag</span>
            </div>

            {/* Original price - crossed out */}
            <div className="text-center mb-2">
              <span className="text-gray-400 line-through text-2xl">
                ${originalPrice.toFixed(2)}
              </span>
            </div>

            {/* Sale price */}
            <div className="text-center">
              <span className="text-4xl font-bold text-rose-600">
                ${salePrice.toFixed(2)}
              </span>
            </div>

            {/* Savings */}
            <div className="mt-4 pt-4 border-t border-dashed border-gray-300 text-center">
              <span className="text-emerald-600 font-semibold">
                You save ${discountAmount.toFixed(2)}!
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Step by step calculation */}
      <div className="my-8 bg-white border-2 border-gray-200 rounded-xl p-6">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Percent className="w-5 h-5 text-rose-500" />
          How to Calculate:
        </h3>

        <div className="space-y-4">
          <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
            <span className="bg-rose-100 text-rose-600 font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
            <div>
              <p className="font-medium">Find the discount amount</p>
              <p className="text-gray-600">
                ${originalPrice} × {discountPercent}% = ${originalPrice} × {discountPercent}/100 = <span className="font-bold text-rose-600">${discountAmount.toFixed(2)}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
            <span className="bg-rose-100 text-rose-600 font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
            <div>
              <p className="font-medium">Subtract from original price</p>
              <p className="text-gray-600">
                ${originalPrice} - ${discountAmount.toFixed(2)} = <span className="font-bold text-emerald-600">${salePrice.toFixed(2)}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <InteractiveParagraph className="mt-6 text-lg leading-relaxed text-gray-600">
        Try changing the original price and discount percentage above to see how much you would save on different items!
      </InteractiveParagraph>
    </Section>
  );
};

export default PercentagesSection;
