// src/components/sections/Certifications.tsx
"use client";
import Image from "next/image";
import { Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Certifications = () => {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 transform transition-all duration-500 ease-in-out">
          {t.certifications.title}
        </h2>

        {/* CompTIA Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* CompTIA Security+ */}
          <div className="bg-white p-6 rounded-lg shadow-sm border transform transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Award className="w-8 h-8 text-emerald-600" />
              <Image
                src="/images/comptia-logo.jpg"
                alt="CompTIA"
                width={100}
                height={30}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {t.certifications.comptia_security.title}
            </h3>
            <p className="text-gray-600">
              {t.certifications.comptia_security.description}
            </p>
          </div>

          {/* CompTIA Linux+ */}
          <div className="bg-white p-6 rounded-lg shadow-sm border transform transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Award className="w-8 h-8 text-emerald-600" />
              <Image
                src="/images/comptia-logo.jpg"
                alt="CompTIA"
                width={100}
                height={30}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {t.certifications.comptia_linux.title}
            </h3>
            <p className="text-gray-600">
              {t.certifications.comptia_linux.description}
            </p>
          </div>

          {/* Microsoft Certification */}
          <div className="bg-white p-6 rounded-lg shadow-sm border transform transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Award className="w-8 h-8 text-emerald-600" />
              <Image
                src="/images/microsoft-logo.png"
                alt="Microsoft"
                width={100}
                height={30}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {t.certifications.microsoft.title}
            </h3>
            <p className="text-gray-600">
              {t.certifications.microsoft.description}
            </p>
          </div>
        </div>

        {/* Participation Certificates */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {t.certificates.participation.title}
          </h3>
          <div className="bg-white p-6 rounded-lg shadow-sm border transform transition-all duration-300 ease-in-out hover:shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/attestato.jpg"
                  alt={t.certificates.participation.multimedia_forensics.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="space-y-4">
                <div className="relative w-40 h-12 mb-4">
                  <Image
                    src="/images/federica.jpg"
                    alt="Federica Web Learning"
                    width={160}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <h4 className="text-xl font-semibold">
                  {t.certificates.participation.multimedia_forensics.title}
                </h4>
                <p className="text-gray-600">
                  {
                    t.certificates.participation.multimedia_forensics
                      .institution
                  }
                </p>
                <p className="text-sm text-gray-500">
                  {t.certificates.participation.multimedia_forensics.date}
                </p>
                <div className="pt-4">
                  <a
                    href="#"
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transform transition-transform duration-300 hover:translate-x-2"
                  >
                    {t.certificates.participation.multimedia_forensics.view} →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
