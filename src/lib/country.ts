import type { Country } from "@/data/programs";

/**
 * Flag + label for the country badge. Deliberately just two: this directory
 * is Ontario-first, and almost everything in it runs in Canada. The odd
 * US-hosted program (a summer session at a US university, say) gets flagged
 * so a student notices before they start an application that assumes a
 * Canadian mailing address, a US visa, or US-only eligibility.
 */
export const COUNTRY_META: Record<Country, { flag: string; label: string; short: string }> = {
  CA: { flag: "🇨🇦", label: "Canada", short: "CA" },
  US: { flag: "🇺🇸", label: "United States", short: "US" },
};
