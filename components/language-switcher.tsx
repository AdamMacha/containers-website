"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/providers/language-provider";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "cs" ? "en" : "cs")}
      className="font-medium"
    >
      {language === "cs" ? "EN" : "CZ"}
    </Button>
  );
}