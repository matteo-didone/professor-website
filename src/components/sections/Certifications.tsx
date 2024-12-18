"use client";
import Image from "next/image";
import { Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import React from "react";

const Certifications = () => {
  const { t } = useLanguage();

  return React.createElement(
    "section",
    { id: "certifications", className: "py-16 bg-gray-50" },
    React.createElement(
      "div",
      { className: "container mx-auto px-4" },
      // Title
      React.createElement(
        "h2",
        { className: "text-3xl font-bold text-gray-900 mb-8" },
        t.certifications.title
      ),
      // Certifications Grid
      React.createElement(
        "div",
        { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" },
        // CompTIA Security+
        React.createElement(
          "div",
          {
            className:
              "bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow",
          },
          React.createElement(
            "div",
            { className: "flex items-center justify-between mb-4" },
            React.createElement(Award, {
              className: "w-8 h-8 text-emerald-600",
            }),
            React.createElement(Image, {
              src: "/images/comptia-logo.jpg",
              alt: "CompTIA",
              width: 100,
              height: 30,
              style: { width: "auto", height: "auto" },
              className: "object-contain",
            })
          ),
          React.createElement(
            "h3",
            { className: "text-xl font-semibold mb-2" },
            t.certifications.comptia_security.title
          ),
          React.createElement(
            "p",
            { className: "text-gray-600" },
            t.certifications.comptia_security.description
          )
        ),
        // CompTIA Linux+
        React.createElement(
          "div",
          {
            className:
              "bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow",
          },
          React.createElement(
            "div",
            { className: "flex items-center justify-between mb-4" },
            React.createElement(Award, {
              className: "w-8 h-8 text-emerald-600",
            }),
            React.createElement(Image, {
              src: "/images/comptia-logo.jpg",
              alt: "CompTIA",
              width: 100,
              height: 30,
              style: { width: "auto", height: "auto" },
              className: "object-contain",
            })
          ),
          React.createElement(
            "h3",
            { className: "text-xl font-semibold mb-2" },
            t.certifications.comptia_linux.title
          ),
          React.createElement(
            "p",
            { className: "text-gray-600" },
            t.certifications.comptia_linux.description
          )
        ),
        // Microsoft Certification
        React.createElement(
          "div",
          {
            className:
              "bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow",
          },
          React.createElement(
            "div",
            { className: "flex items-center justify-between mb-4" },
            React.createElement(Award, {
              className: "w-8 h-8 text-emerald-600",
            }),
            React.createElement(Image, {
              src: "/images/microsoft-logo.png",
              alt: "Microsoft",
              width: 100,
              height: 30,
              style: { width: "auto", height: "auto" },
              className: "object-contain",
            })
          ),
          React.createElement(
            "h3",
            { className: "text-xl font-semibold mb-2" },
            t.certifications.microsoft.title
          ),
          React.createElement(
            "p",
            { className: "text-gray-600" },
            t.certifications.microsoft.description
          )
        )
      ),
      // Participation Certificates
      React.createElement(
        "div",
        { className: "mt-12" },
        React.createElement(
          "h3",
          { className: "text-2xl font-bold text-gray-900 mb-6" },
          t.certificates.participation.title
        ),
        React.createElement(
          "div",
          { className: "bg-white p-6 rounded-lg shadow-sm border" },
          React.createElement(
            "div",
            { className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center" },
            React.createElement(
              "div",
              { className: "relative aspect-[4/3] w-full" },
              React.createElement(Image, {
                src: "/images/attestato.jpg",
                alt: "Attestato Multimedia Forensics",
                fill: true,
                sizes: "(max-width: 768px) 100vw, 50vw",
                className: "object-contain",
                priority: true,
              })
            ),
            React.createElement(
              "div",
              { className: "space-y-4" },
              React.createElement(
                "h4",
                { className: "text-xl font-semibold" },
                t.certificates.participation.multimedia_forensics.title
              ),
              React.createElement(
                "p",
                { className: "text-gray-600" },
                t.certificates.participation.multimedia_forensics.institution
              ),
              React.createElement(
                "p",
                { className: "text-sm text-gray-500" },
                t.certificates.participation.multimedia_forensics.date
              ),
              React.createElement(
                "div",
                { className: "pt-4" },
                React.createElement(
                  "a",
                  {
                    href: "https://www.linkedin.com/in/linopolo/?miniProfileUrn=urn%3Ali%3Afsd_profile%3AACoAADL_qsEBE0WNufJuMpNbYVzFTU-SCp_9swU",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "inline-flex items-center text-emerald-600 hover:text-emerald-700",
                  },
                  `${t.certificates.participation.multimedia_forensics.view} →`
                )
              )
            )
          )
        )
      )
    )
  );
};

export default Certifications;
