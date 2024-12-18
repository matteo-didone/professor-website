// src/components/sections/Expertise.tsx
"use client";
import { Shield, Terminal, Building } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-lg border bg-white shadow-sm">{children}</div>
);

const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6">{children}</div>
);

const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg font-semibold">{children}</h3>
);

const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6 pt-0">{children}</div>
);

const Expertise = () => {
  const { t } = useLanguage();

  return (
    <section id="expertise" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {t.expertise.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Shield className="w-8 h-8 text-emerald-600 mb-2" />
              <CardTitle>{t.expertise.security.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {t.expertise.security.description}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Terminal className="w-8 h-8 text-emerald-600 mb-2" />
              <CardTitle>{t.expertise.systems.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{t.expertise.systems.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Building className="w-8 h-8 text-emerald-600 mb-2" />
              <CardTitle>{t.expertise.infrastructure.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {t.expertise.infrastructure.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
