"use client";

import { useTranslation } from "@/lib/hooks/useTranslation";
import { NavLink } from "@/components/nav-link";
import { LanguageSwitcher } from "@/components/language-switcher";

export function Navigation() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center space-x-8">
      <NavLink href="/">{t("nav.home")}</NavLink>
      <NavLink href="/pricing">{t("nav.pricing")}</NavLink>
      <NavLink href="/contact">{t("nav.contact")}</NavLink>
      <LanguageSwitcher />
    </div>
  );
}