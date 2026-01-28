import { type ReactElement } from "react";
import { FullWidthLayout, SplitLayout, GridLayout } from "@/components/layouts";
import { Section } from "@/components/templates";
import { IntroToRatiosSection } from "./sections/IntroToRatios";
import { UnitRatesSection } from "./sections/UnitRates";
import { PercentagesSection } from "./sections/Percentages";
import { ProportionsExplanation, ProportionsCalculator } from "./sections/Proportions";
import { ShoppingChallengeIntro, ShoppingChallengeCards } from "./sections/ShoppingChallenge";

/**
 * ------------------------------------------------------------------
 * LESSON: Ratios and Proportional Relationships
 * ------------------------------------------------------------------
 * An interactive lesson for high school students exploring ratios,
 * unit rates, percentages, and proportions through shopping examples.
 */

export const sections: ReactElement[] = [
  // Section 1: Introduction to Ratios
  <FullWidthLayout key="intro-ratios" maxWidth="xl">
    <IntroToRatiosSection />
  </FullWidthLayout>,

  // Section 2: Unit Rates
  <FullWidthLayout key="unit-rates" maxWidth="xl">
    <UnitRatesSection />
  </FullWidthLayout>,

  // Section 3: Percentages
  <FullWidthLayout key="percentages" maxWidth="xl">
    <PercentagesSection />
  </FullWidthLayout>,

  // Section 4: Proportions (Split Layout)
  <SplitLayout key="proportions" ratio="1:1" gap="lg" align="start">
    <ProportionsExplanation />
    <ProportionsCalculator />
  </SplitLayout>,

  // Section 5: Shopping Challenge Intro
  <FullWidthLayout key="challenge-intro" maxWidth="xl">
    <ShoppingChallengeIntro />
  </FullWidthLayout>,

  // Section 5: Shopping Challenge Cards (Grid Layout)
  <GridLayout key="challenge-cards" columns={2} gap="md">
    <ShoppingChallengeCards />
  </GridLayout>,
];
