"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/hooks/useTranslation";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">KontejnerZaBabku.cz</h3>
            <p className="text-gray-400">
              {t("footer.description")}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.pricing")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("contact.info.title")}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Praha, Průhonice</li>
              <li>Česká republika</li>
              <li>+420 608 850 040</li>
              <li>janovskyroman@seznam.cz</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} KontejnerZaBabku.cz. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}