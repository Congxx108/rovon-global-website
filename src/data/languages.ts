export type LanguageCode = "en" | "fr" | "ar" | "es" | "pt";

export type LanguageOption = {
  code: LanguageCode;
  label: string;
  enabled: boolean;
};

export const defaultLanguage: LanguageCode = "en";

export const languages: LanguageOption[] = [
  { code: "en", label: "English", enabled: true },
  { code: "fr", label: "Fran\u00e7ais", enabled: false },
  { code: "ar", label: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629", enabled: false },
  { code: "es", label: "Espa\u00f1ol", enabled: false },
  { code: "pt", label: "Portugu\u00eas", enabled: false },
];

export const activeLanguage = languages.find((language) => language.code === defaultLanguage) ?? languages[0];

