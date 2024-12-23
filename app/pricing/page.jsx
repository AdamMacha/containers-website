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
          <div className="">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                {t("pricing.additionalInfo.delivery.title")}
              </h3>
              <ul className="space-y-2 text-gray-600 text-center">
                {t("pricing.additionalInfo.delivery.items", { returnObjects: true }).map((item, index) => (
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
    image: "images/kontejner26.jpg",
    price: "46 000",
    features: [
      "6.06m × 2.44m × 2.59m",
      "33.2m³",
      "21,800kg"
    ]
  },
  {
    type: "highCube",
    image: "images/kontejner24.jpg",
    price: "75 000",
    features: [
      "6.06m × 2.44m × 2.59m",
      "33.2m³",
      "21,800kg"
    ]
  },
  {
    type: "mini",
    image: "images/kontejner20.jpg",
    price: "55 000",
    features: [
      "12.19m × 2.44m × 2.59m",
      "67m³",
      "26,600kg"
    ]
  },
  {
    type: "mini2",
    image: "images/kontejner27.jpg",
    price: "75 000",
    features: [
      "12.19m × 2.44m × 2.59m",
      "67.4m³",
      "26,600kg"
    ]
  },
  {
    type: "mini3",
    image: "images/kontejner23.jpg",
    price: "92 000",
    features: [
      "12.19m × 2.44m × 2.59m",
      "67.4m³",
      "26,600kg"
    ]
  }
];