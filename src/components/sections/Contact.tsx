// src/components/sections/Contact.tsx
"use client";
import { Mail, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {t.contact.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-600 mb-6">{t.contact.intro}</p>
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center gap-3 text-gray-600 hover:text-emerald-600"
              >
                <Mail size={20} />
                <span>{t.contact.email}</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-gray-600 hover:text-emerald-600"
              >
                <Linkedin size={20} />
                <span>{t.contact.linkedin}</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-gray-600 hover:text-emerald-600"
              >
                <Github size={20} />
                <span>{t.contact.github}</span>
              </a>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t.contact.form.name}
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t.contact.form.email}
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              {t.contact.form.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
