import { type ReactElement } from "react";
import { FullWidthLayout } from "@/components/layouts";
import { IntroToRatiosSection } from "./sections/IntroToRatios";

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
];
