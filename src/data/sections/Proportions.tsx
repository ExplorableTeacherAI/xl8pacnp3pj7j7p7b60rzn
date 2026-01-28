import { useState, useEffect } from "react";
import { Section } from "@/components/templates";
import { Heading } from "@/components/molecules/Heading";
import { InteractiveParagraph } from "@/components/molecules/InteractiveParagraph";
import { Stepper } from "@/components/annotations/Stepper";
import { Scale, Package, HelpCircle } from "lucide-react";

/**
 * Section 4: Proportions
 * Students learn to set up and solve proportions using cross-multiplication.
 */

// Explanation component (left side)
export const ProportionsExplanation = () => {
  return (
    <Section id="proportions-explanation">
      <Heading level={1}>Proportions</Heading>

      <InteractiveParagraph className="mb-6 text-lg leading-relaxed">
        A <strong>proportion</strong> is an equation that says two ratios are equal.
        If you know three values, you can find the fourth!
      </InteractiveParagraph>

      <div className="my-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-5">
        <p className="text-center text-xl mb-2">
          If <span className="font-bold text-amber-600">a/b</span> = <span className="font-bold text-orange-600">c/d</span>
        </p>
        <p className="text-center text-gray-600">
          Then <span className="font-bold">a × d</span> = <span className="font-bold">b × c</span>
        </p>
        <p className="text-center text-sm text-gray-500 mt-2">
          (This is called <em>cross-multiplication</em>)
        </p>
      </div>

      <Heading level={2} className="mt-8">How It Works</Heading>

      <InteractiveParagraph className="mb-4 text-lg leading-relaxed">
        Imagine you're at a store and see this sign:
      </InteractiveParagraph>

      <div className="bg-amber-100 border-2 border-amber-300 rounded-lg p-4 text-center mb-6">
        <p className="text-2xl font-bold text-amber-800">
          🛒 3 apples for $6
        </p>
      </div>

      <InteractiveParagraph className="mb-4 text-lg leading-relaxed">
        Now you want to know: <em>"How much would 7 apples cost?"</em>
      </InteractiveParagraph>

      <div className="space-y-3 my-6">
        <div className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg">
          <span className="bg-amber-100 text-amber-700 font-bold w-7 h-7 rounded-full flex items-center justify-center text-sm">1</span>
          <p>Set up the proportion: <span className="font-mono bg-gray-100 px-2 py-1 rounded">3/6 = 7/?</span></p>
        </div>
        <div className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg">
          <span className="bg-amber-100 text-amber-700 font-bold w-7 h-7 rounded-full flex items-center justify-center text-sm">2</span>
          <p>Cross-multiply: <span className="font-mono bg-gray-100 px-2 py-1 rounded">3 × ? = 6 × 7</span></p>
        </div>
        <div className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg">
          <span className="bg-amber-100 text-amber-700 font-bold w-7 h-7 rounded-full flex items-center justify-center text-sm">3</span>
          <p>Solve: <span className="font-mono bg-gray-100 px-2 py-1 rounded">? = 42 ÷ 3 = $14</span></p>
        </div>
      </div>

      <InteractiveParagraph className="text-gray-600">
        Try it yourself with the calculator on the right!
      </InteractiveParagraph>
    </Section>
  );
};

// Interactive calculator component (right side)
export const ProportionsCalculator = () => {
  const [knownItems, setKnownItems] = useState(3);
  const [knownPrice, setKnownPrice] = useState(12);
  const [wantedItems, setWantedItems] = useState(7);
  const [answer, setAnswer] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState(false);

  // Calculate the answer
  const correctAnswer = (knownPrice * wantedItems) / knownItems;

  useEffect(() => {
    setShowSolution(false);
    setAnswer(null);
  }, [knownItems, knownPrice, wantedItems]);

  return (
    <Section id="proportions-calculator">
      <div className="bg-white border-2 border-amber-200 rounded-2xl p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-6">
          <Scale className="w-6 h-6 text-amber-600" />
          <h3 className="text-xl font-bold text-amber-800">Proportion Solver</h3>
        </div>

        {/* Known ratio */}
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-500 mb-2">If you know that:</p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-amber-600" />
              <Stepper
                id="known-items"
                value={knownItems}
                onChange={setKnownItems}
                min={1}
                max={20}
                step={1}
                color="#d97706"
                bgColor="rgba(217, 119, 6, 0.1)"
              />
              <span className="text-gray-700">items</span>
            </div>
            <span className="text-xl font-bold text-gray-400">=</span>
            <div className="flex items-center gap-1">
              <span className="text-gray-700">$</span>
              <Stepper
                id="known-price"
                value={knownPrice}
                onChange={setKnownPrice}
                min={1}
                max={100}
                step={1}
                color="#d97706"
                bgColor="rgba(217, 119, 6, 0.1)"
              />
            </div>
          </div>
        </div>

        {/* Unknown */}
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-500 mb-2">How much would this cost?</p>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 flex items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-orange-600" />
              <Stepper
                id="wanted-items"
                value={wantedItems}
                onChange={setWantedItems}
                min={1}
                max={50}
                step={1}
                color="#ea580c"
                bgColor="rgba(234, 88, 12, 0.1)"
              />
              <span className="text-gray-700">items</span>
            </div>
            <span className="text-xl font-bold text-gray-400">=</span>
            <div className="flex items-center gap-1 bg-white border-2 border-dashed border-orange-300 rounded-lg px-4 py-2">
              <HelpCircle className="w-5 h-5 text-orange-400" />
              <span className="text-orange-600 font-bold">?</span>
            </div>
          </div>
        </div>

        {/* Visual proportion */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6">
          <p className="text-center text-lg font-mono">
            <span className="text-amber-600">{knownItems}</span>
            <span className="text-gray-400"> / </span>
            <span className="text-amber-600">${knownPrice}</span>
            <span className="text-gray-600 mx-3">=</span>
            <span className="text-orange-600">{wantedItems}</span>
            <span className="text-gray-400"> / </span>
            <span className="text-orange-600 font-bold">?</span>
          </p>
        </div>

        {/* Show solution button */}
        {!showSolution ? (
          <button
            onClick={() => setShowSolution(true)}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            Show Solution
          </button>
        ) : (
          <div className="space-y-4">
            {/* Solution steps */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <p className="text-sm text-emerald-700 mb-2">Cross-multiply:</p>
              <p className="text-center font-mono text-lg">
                {knownItems} × ? = {knownPrice} × {wantedItems}
              </p>
              <p className="text-center font-mono text-lg mt-1">
                {knownItems} × ? = {knownPrice * wantedItems}
              </p>
              <p className="text-center font-mono text-lg mt-1">
                ? = {knownPrice * wantedItems} ÷ {knownItems}
              </p>
            </div>

            {/* Answer */}
            <div className="bg-emerald-500 text-white rounded-xl p-5 text-center">
              <p className="text-sm opacity-90 mb-1">Answer:</p>
              <p className="text-3xl font-bold">
                ${correctAnswer.toFixed(2)}
              </p>
              <p className="text-sm opacity-90 mt-2">
                {wantedItems} items would cost ${correctAnswer.toFixed(2)}
              </p>
            </div>

            <button
              onClick={() => setShowSolution(false)}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg transition-all"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </Section>
  );
};

export const ProportionsSection = () => {
  return (
    <>
      <ProportionsExplanation />
      <ProportionsCalculator />
    </>
  );
};

export default ProportionsSection;
