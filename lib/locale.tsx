export const locales = ["en", "es", "ar", "pt", "ph"] as const;
export type Locale = (typeof locales)[number];
