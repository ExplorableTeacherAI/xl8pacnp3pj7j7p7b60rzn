import { type ReactElement } from "react";
import { FullWidthLayout, SplitLayout } from "@/components/layouts";
import { Section } from "@/components/templates";
import { IntroToRatiosSection } from "./sections/IntroToRatios";
import { UnitRatesSection } from "./sections/UnitRates";

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

  // Section 2: Unit Rates (Split Layout)
  <FullWidthLayout key="unit-rates" maxWidth="xl">
    <Section id="unit-rates-wrapper" padding="lg">
      <UnitRatesSection />
    </Section>
  </FullWidthLayout>,
];
