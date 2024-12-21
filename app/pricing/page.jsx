"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/hooks/useTranslation";
import Link from "next/link";
import Image from "next/image";

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">{t("pricing.title")}</h1>
          <p className="text-xl text-gray-600">{t("pricing.subtitle")}</p>
        </motion.div>

        {/* Container Types Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {containerTypes.map((container, index) => (
            <motion.div
              key={container.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="aspect-video relative">
                <Image
                  src={container.image}
                  alt={t(`pricing.containers.${container.type}.title`)}
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {t(`pricing.containers.${container.type}.title`)}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t(`pricing.containers.${container.type}.description`)}
                </p>
                <div className="space-y-2 mb-6">
                  {container.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <p className="text-3xl font-bold text-blue-600">{container.price} Kč</p>
                  <p className="text-sm text-gray-500">{t("pricing.vat")}</p>
                </div>
                <Link href="/contact">
                  <Button className="w-full mt-4">{t("pricing.requestQuote")}</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-6">{t("pricing.additionalInfo.title")}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("pricing.additionalInfo.delivery.title")}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {t("pricing.additionalInfo.delivery.items", { returnObjects: true }).map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("pricing.additionalInfo.customSolutions.title")}
              </h3>
              <p className="text-gray-600">
                {t("pricing.additionalInfo.customSolutions.description")}
              </p>
              <ul className="space-y-2 text-gray-600 mt-2">
                {t("pricing.additionalInfo.customSolutions.items", { returnObjects: true }).map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const containerTypes = [
  {
    type: "standard",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80",
    price: "89,900",
    features: [
      "6.06m × 2.44m × 2.59m",
      "33.2m³",
      "28,200kg"
    ]
  },
  {
    type: "highCube",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80",
    price: "149,900",
    features: [
      "12.19m × 2.44m × 2.89m",
      "76.4m³",
      "26,600kg"
    ]
  },
  {
    type: "mini",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
    price: "59,900",
    features: [
      "2.99m × 2.44m × 2.59m",
      "16.1m³",
      "10,200kg"
    ]
  }
];