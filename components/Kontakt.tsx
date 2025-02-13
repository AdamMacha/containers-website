'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { sendEmail } from '../utils/send-email';
import { useTranslation } from "@/lib/hooks/useTranslation";

export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Kontakt = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  async function onSubmit(data: FormData) {
    try {
      await sendEmail(data);
      setIsModalOpen(true);
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">{t("contact.form.title")}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              {t("contact.form.name")}
            </label>
            <input
              type="text"
              {...register('name', { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              {t("contact.form.email")}
            </label>
            <input
              type="email"
              {...register('email', { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            {t("contact.form.subject")}
          </label>
          <input
            type="text"
            {...register('subject', { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            {t("contact.form.message")}
          </label>
          <textarea
            {...register('message', { required: true })}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          {t("contact.form.submit")}
        </button>
      </form>

      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded-2xl bg-white p-8 shadow-lg">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
              </motion.div>
              
              <Dialog.Title className="text-2xl font-semibold mb-2">
                {t("contact.modal.title")}
              </Dialog.Title>
              
              <Dialog.Description className="text-gray-600 mb-6">
                {t("contact.modal.message")}
              </Dialog.Description>

              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                {t("contact.modal.close")}
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default Kontakt;