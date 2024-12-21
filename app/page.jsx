"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/hooks/useTranslation";
import Image from "next/image";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/containers.jpg"
            alt="Hero Background"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            {t("home.hero.title")}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            {t("home.hero.subtitle")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/pricing">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                {t("home.hero.cta")} <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">{t("home.features.title")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-gray-50"
              >
                <feature.icon className="w-12 h-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">{t(`home.features.${feature.key}.title`)}</h3>
                <p className="text-gray-600">{t(`home.features.${feature.key}.description`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">{t("home.gallery.title")}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={`/images/kontejner${index + 1}.jpg`}
                  alt={t("home.gallery.imageAlt", { number: index + 1 })}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  width={600}
                  height={600}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    icon: Box,
    key: "quality"
  },
  {
    icon: Phone,
    key: "support"
  },
  {
    icon: MapPin,
    key: "delivery"
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1569466126773-842a038eae3e?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1580983218765-f663bec07b37?auto=format&fit=crop&q=80"
];