"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { useTranslation } from "@/lib/hooks/useTranslation";
import Kontakt from "@/components/Kontakt";

export default function Contact() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-4">{t("contact.title")}</h1>
            <p className="text-xl text-gray-600">{t("contact.subtitle")}</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-6">{t("contact.info.title")}</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-medium">{t("contact.info.phone")}</p>
                      <a href="tel:+420608028801" className="text-gray-600 hover:text-blue-600">
                        +420 608 850 040
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-medium">{t("contact.info.email")}</p>
                      <a href="mailto:janovskyroman@seznam.cz" className="text-gray-600 hover:text-blue-600">
                        janovskyroman@seznam.cz
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-medium">{t("contact.info.address")}</p>
                      <p className="text-gray-600">Praha, Průhonice, Česká republika</p>
                    </div>
                  </div>
                </div>
              </div>

              <Kontakt />
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}