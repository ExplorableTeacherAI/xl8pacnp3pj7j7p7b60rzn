import { useState } from "react";
import { Section } from "@/components/templates";
import { Heading } from "@/components/molecules/Heading";
import { InteractiveParagraph } from "@/components/molecules/InteractiveParagraph";
import { ShoppingCart, Check, X, Star, Trophy, RefreshCw } from "lucide-react";

/**
 * Section 5: Putting It All Together
 * A shopping challenge that combines ratios, unit rates, percentages, and proportions.
 */

interface ChallengeCardProps {
  title: string;
  description: string;
  optionA: { label: string; value: number; explanation: string };
  optionB: { label: string; value: number; explanation: string };
  correctAnswer: "A" | "B";
  skill: string;
  onAnswer: (correct: boolean) => void;
}

const ChallengeCard = ({ title, description, optionA, optionB, correctAnswer, skill, onAnswer }: ChallengeCardProps) => {
  const [selected, setSelected] = useState<"A" | "B" | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (option: "A" | "B") => {
    if (showResult) return;
    setSelected(option);
    setShowResult(true);
    onAnswer(option === correctAnswer);
  };

  const isCorrect = selected === correctAnswer;

  return (
    <div className={`bg-white border-2 rounded-2xl p-5 transition-all ${
      showResult
        ? isCorrect
          ? "border-emerald-400 shadow-lg shadow-emerald-100"
          : "border-red-300 shadow-lg shadow-red-100"
        : "border-gray-200 hover:border-indigo-300 hover:shadow-md"
    }`}>
      {/* Skill badge */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
          {skill}
        </span>
        {showResult && (
          <span className={`flex items-center gap-1 text-sm font-medium ${isCorrect ? "text-emerald-600" : "text-red-500"}`}>
            {isCorrect ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
            {isCorrect ? "Correct!" : "Try again next time"}
          </span>
        )}
      </div>

      {/* Question */}
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      {/* Options */}
      <div className="space-y-2">
        <button
          onClick={() => handleSelect("A")}
          disabled={showResult}
          className={`w-full p-3 rounded-xl border-2 text-left transition-all ${
            showResult
              ? correctAnswer === "A"
                ? "border-emerald-400 bg-emerald-50"
                : selected === "A"
                ? "border-red-300 bg-red-50"
                : "border-gray-200 bg-gray-50 opacity-60"
              : "border-gray-200 hover:border-indigo-400 hover:bg-indigo-50"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-medium">{optionA.label}</span>
            {showResult && correctAnswer === "A" && <Check className="w-5 h-5 text-emerald-600" />}
          </div>
          {showResult && (
            <p className="text-xs text-gray-500 mt-1">{optionA.explanation}</p>
          )}
        </button>

        <button
          onClick={() => handleSelect("B")}
          disabled={showResult}
          className={`w-full p-3 rounded-xl border-2 text-left transition-all ${
            showResult
              ? correctAnswer === "B"
                ? "border-emerald-400 bg-emerald-50"
                : selected === "B"
                ? "border-red-300 bg-red-50"
                : "border-gray-200 bg-gray-50 opacity-60"
              : "border-gray-200 hover:border-indigo-400 hover:bg-indigo-50"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-medium">{optionB.label}</span>
            {showResult && correctAnswer === "B" && <Check className="w-5 h-5 text-emerald-600" />}
          </div>
          {showResult && (
            <p className="text-xs text-gray-500 mt-1">{optionB.explanation}</p>
          )}
        </button>
      </div>
    </div>
  );
};

export const ShoppingChallengeIntro = () => {
  return (
    <Section id="shopping-challenge-intro">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4">
          <ShoppingCart className="w-8 h-8 text-white" />
        </div>
        <Heading level={1}>Shopping Challenge!</Heading>
        <InteractiveParagraph className="text-lg text-gray-600 max-w-2xl mx-auto">
          Time to put your skills to the test! Help make smart shopping decisions using
          everything you've learned about ratios, unit rates, percentages, and proportions.
        </InteractiveParagraph>
      </div>
    </Section>
  );
};

export const ShoppingChallengeCards = () => {
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);

  const handleAnswer = (correct: boolean) => {
    if (correct) setScore(s => s + 1);
    setAnswered(a => a + 1);
  };

  const challenges = [
    {
      title: "Best T-Shirt Deal",
      description: "Which store offers a better deal on t-shirts?",
      optionA: {
        label: "Store A: 4 shirts for $32",
        value: 8,
        explanation: "Unit rate: $32 ÷ 4 = $8 per shirt"
      },
      optionB: {
        label: "Store B: 5 shirts for $35",
        value: 7,
        explanation: "Unit rate: $35 ÷ 5 = $7 per shirt ✓"
      },
      correctAnswer: "B" as const,
      skill: "Unit Rates"
    },
    {
      title: "Bigger Discount",
      description: "A $60 jacket is on sale. Which discount saves you more?",
      optionA: {
        label: "30% off",
        value: 18,
        explanation: "$60 × 30% = $18 saved ✓"
      },
      optionB: {
        label: "$15 off",
        value: 15,
        explanation: "Fixed $15 discount"
      },
      correctAnswer: "A" as const,
      skill: "Percentages"
    },
    {
      title: "Snack Ratio",
      description: "You want cookies and chips in a 3:2 ratio. If you buy 9 cookie packs, how many chip bags?",
      optionA: {
        label: "6 chip bags",
        value: 6,
        explanation: "3:2 = 9:? → ? = 9 × 2 ÷ 3 = 6 ✓"
      },
      optionB: {
        label: "5 chip bags",
        value: 5,
        explanation: "Incorrect ratio calculation"
      },
      correctAnswer: "A" as const,
      skill: "Proportions"
    },
    {
      title: "Bulk Buy Math",
      description: "If 6 notebooks cost $15, how much for 10 notebooks?",
      optionA: {
        label: "$20",
        value: 20,
        explanation: "Incorrect: Would be $2 each, but 10 × $2 = $20"
      },
      optionB: {
        label: "$25",
        value: 25,
        explanation: "$15 ÷ 6 = $2.50 each, 10 × $2.50 = $25 ✓"
      },
      correctAnswer: "B" as const,
      skill: "Unit Rates + Proportions"
    },
  ];

  const allAnswered = answered === challenges.length;

  return (
    <>
      {challenges.map((challenge, index) => (
        <Section key={index} id={`challenge-${index}`} padding="sm">
          <ChallengeCard {...challenge} onAnswer={handleAnswer} />
        </Section>
      ))}

      {/* Score display */}
      <Section id="challenge-score" padding="sm">
        <div className={`rounded-2xl p-6 text-center transition-all ${
          allAnswered
            ? score === challenges.length
              ? "bg-gradient-to-br from-amber-400 to-orange-500 text-white"
              : score >= challenges.length / 2
              ? "bg-gradient-to-br from-emerald-400 to-teal-500 text-white"
              : "bg-gradient-to-br from-indigo-400 to-purple-500 text-white"
            : "bg-gray-100"
        }`}>
          {allAnswered ? (
            <>
              <Trophy className="w-12 h-12 mx-auto mb-3" />
              <p className="text-2xl font-bold mb-1">
                {score === challenges.length ? "Perfect Score!" : score >= challenges.length / 2 ? "Great Job!" : "Keep Practicing!"}
              </p>
              <p className="text-lg opacity-90">
                You got {score} out of {challenges.length} correct
              </p>
              <div className="flex justify-center gap-1 mt-3">
                {Array.from({ length: challenges.length }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${i < score ? "fill-current" : "opacity-40"}`}
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="text-gray-600 font-medium">Your Progress</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">
                {answered} / {challenges.length}
              </p>
              <p className="text-sm text-gray-500 mt-1">challenges completed</p>
            </>
          )}
        </div>
      </Section>
    </>
  );
};

export default ShoppingChallengeCards;
