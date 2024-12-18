// src/components/sections/Registration.tsx
"use client";
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

const Registration = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {t.registrations.title}
        </h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.registrations.chamber.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {t.registrations.chamber.description}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t.registrations.court.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {t.registrations.court.description}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t.registrations.technical.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {t.registrations.technical.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Registration;
