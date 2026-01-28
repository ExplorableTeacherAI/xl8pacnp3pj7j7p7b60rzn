import { useState } from "react";
import { Section } from "@/components/templates";
import { Heading } from "@/components/molecules/Heading";
import { InteractiveParagraph } from "@/components/molecules/InteractiveParagraph";
import { Stepper } from "@/components/annotations/Stepper";
import { Store, Tag, Trophy } from "lucide-react";

/**
 * Section 2: Unit Rates
 * Students learn to find the price per item to compare deals.
 */
export const UnitRatesSection = () => {
  const [storeAItems, setStoreAItems] = useState(3);
  const [storeAPrice, setStoreAPrice] = useState(12);
  const [storeBItems, setStoreBItems] = useState(5);
  const [storeBPrice, setStoreBPrice] = useState(18);

  const unitRateA = storeAPrice / storeAItems;
  const unitRateB = storeBPrice / storeBItems;
  const betterDeal = unitRateA < unitRateB ? "A" : unitRateA > unitRateB ? "B" : "tie";

  return (
    <>
      {/* Explanation Section */}
      <Section id="unit-rates-explanation">
        <Heading level={1}>Unit Rates</Heading>

        <InteractiveParagraph className="mb-6 text-lg leading-relaxed">
          A <strong>unit rate</strong> tells you the cost for just ONE item.
          It helps you compare prices even when stores sell different quantities.
        </InteractiveParagraph>

        <InteractiveParagraph className="mb-6 text-lg leading-relaxed">
          To find the unit rate, simply <strong>divide the total price by the number of items</strong>:
        </InteractiveParagraph>

        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-5 mb-6">
          <p className="text-center text-xl">
            Unit Rate = <span className="font-bold">Total Price</span> ÷ <span className="font-bold">Number of Items</span>
          </p>
        </div>

        <InteractiveParagraph className="mb-4 text-lg leading-relaxed">
          For example, if a store sells{" "}
          <Stepper
            id="store-a-items"
            value={storeAItems}
            onChange={setStoreAItems}
            min={1}
            max={12}
            step={1}
            color="#059669"
            bgColor="rgba(5, 150, 105, 0.1)"
          />{" "}
          t-shirts for $
          <Stepper
            id="store-a-price"
            value={storeAPrice}
            onChange={setStoreAPrice}
            min={1}
            max={100}
            step={1}
            color="#059669"
            bgColor="rgba(5, 150, 105, 0.1)"
          />
          , the unit rate is:
        </InteractiveParagraph>

        <div className="bg-white border-2 border-emerald-300 rounded-xl p-4 mb-6 text-center">
          <p className="text-2xl">
            ${storeAPrice} ÷ {storeAItems} = <span className="font-bold text-emerald-600">${unitRateA.toFixed(2)}</span> per shirt
          </p>
        </div>

        <InteractiveParagraph className="text-lg leading-relaxed text-gray-600">
          Try adjusting the numbers to see how the unit rate changes. The lower the unit rate, the better the deal!
        </InteractiveParagraph>
      </Section>

      {/* Comparison Section */}
      <Section id="unit-rates-comparison">
        <Heading level={2}>Which Store Has the Better Deal?</Heading>

        <InteractiveParagraph className="mb-6 text-lg leading-relaxed">
          Compare two stores by adjusting their prices and quantities:
        </InteractiveParagraph>

        <div className="space-y-4">
          {/* Store A */}
          <div className={`relative bg-white border-2 rounded-xl p-5 transition-all ${betterDeal === "A" ? "border-emerald-400 shadow-lg shadow-emerald-100" : "border-gray-200"}`}>
            {betterDeal === "A" && (
              <div className="absolute -top-3 -right-3 bg-emerald-500 text-white p-2 rounded-full">
                <Trophy className="w-4 h-4" />
              </div>
            )}
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <Store className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-emerald-700">Store A</h3>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5 text-gray-400" />
                <span className="text-lg">
                  <Stepper
                    id="store-a-items-compare"
                    value={storeAItems}
                    onChange={setStoreAItems}
                    min={1}
                    max={12}
                    step={1}
                    color="#059669"
                    bgColor="rgba(5, 150, 105, 0.1)"
                  />{" "}
                  shirts for $
                  <Stepper
                    id="store-a-price-compare"
                    value={storeAPrice}
                    onChange={setStoreAPrice}
                    min={1}
                    max={100}
                    step={1}
                    color="#059669"
                    bgColor="rgba(5, 150, 105, 0.1)"
                  />
                </span>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Unit Rate</p>
                <p className="text-2xl font-bold text-emerald-600">${unitRateA.toFixed(2)}</p>
                <p className="text-xs text-gray-400">per shirt</p>
              </div>
            </div>
          </div>

          {/* VS Divider */}
          <div className="flex items-center justify-center">
            <div className="bg-gray-200 text-gray-600 font-bold px-4 py-2 rounded-full text-sm">
              VS
            </div>
          </div>

          {/* Store B */}
          <div className={`relative bg-white border-2 rounded-xl p-5 transition-all ${betterDeal === "B" ? "border-blue-400 shadow-lg shadow-blue-100" : "border-gray-200"}`}>
            {betterDeal === "B" && (
              <div className="absolute -top-3 -right-3 bg-blue-500 text-white p-2 rounded-full">
                <Trophy className="w-4 h-4" />
              </div>
            )}
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Store className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-700">Store B</h3>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5 text-gray-400" />
                <span className="text-lg">
                  <Stepper
                    id="store-b-items"
                    value={storeBItems}
                    onChange={setStoreBItems}
                    min={1}
                    max={12}
                    step={1}
                    color="#2563eb"
                    bgColor="rgba(37, 99, 235, 0.1)"
                  />{" "}
                  shirts for $
                  <Stepper
                    id="store-b-price"
                    value={storeBPrice}
                    onChange={setStoreBPrice}
                    min={1}
                    max={100}
                    step={1}
                    color="#2563eb"
                    bgColor="rgba(37, 99, 235, 0.1)"
                  />
                </span>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Unit Rate</p>
                <p className="text-2xl font-bold text-blue-600">${unitRateB.toFixed(2)}</p>
                <p className="text-xs text-gray-400">per shirt</p>
              </div>
            </div>
          </div>
        </div>

        {/* Result */}
        <div className={`mt-6 p-5 rounded-xl text-center ${
          betterDeal === "A"
            ? "bg-emerald-50 border border-emerald-200"
            : betterDeal === "B"
            ? "bg-blue-50 border border-blue-200"
            : "bg-gray-50 border border-gray-200"
        }`}>
          {betterDeal === "tie" ? (
            <p className="text-xl font-semibold text-gray-700">
              Both stores have the same unit rate!
            </p>
          ) : (
            <p className="text-xl font-semibold">
              <span className={betterDeal === "A" ? "text-emerald-600" : "text-blue-600"}>
                Store {betterDeal}
              </span>{" "}
              has the better deal! You save{" "}
              <span className="font-bold">
                ${Math.abs(unitRateA - unitRateB).toFixed(2)}
              </span>{" "}
              per shirt.
            </p>
          )}
        </div>
      </Section>
    </>
  );
};

export default UnitRatesSection;
