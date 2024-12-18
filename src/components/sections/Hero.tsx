"use client";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import React from "react";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64;
      const offset = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return React.createElement(
    "section",
    {
      className:
        "relative pt-24 pb-16 bg-gradient-to-b from-emerald-50 to-white overflow-hidden",
    },
    // Decorative background elements
    React.createElement(
      "div",
      { className: "absolute inset-0 overflow-hidden" },
      React.createElement("div", {
        className:
          "absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-emerald-100/30 rounded-full blur-3xl",
      }),
      React.createElement("div", {
        className:
          "absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-emerald-100/30 rounded-full blur-3xl",
      })
    ),
    React.createElement(
      "div",
      { className: "container relative mx-auto px-4" },
      React.createElement(
        "div",
        { className: "flex flex-col lg:flex-row items-center gap-12 lg:gap-16" },
        // Profile image
        React.createElement(
          "div",
          {
            className:
              "relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105",
          },
          React.createElement("div", {
            className:
              "absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent",
          }),
          React.createElement(Image, {
            src: "/images/profile.jpg",
            alt: "Lino Polo",
            fill: true,
            priority: true, // Aggiunto priority qui
            sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
            className: "object-cover",
          })
        ),
        // Text content
        React.createElement(
          "div",
          { className: "flex-1 max-w-3xl text-center lg:text-left" },
          React.createElement(
            "h1",
            {
              className:
                "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-800 text-transparent bg-clip-text",
            },
            t.hero.title
          ),
          React.createElement(
            "p",
            { className: "text-gray-600 text-lg md:text-xl mb-10 leading-relaxed" },
            t.hero.subtitle
          ),
          // CTA Buttons
          React.createElement(
            "div",
            {
              className:
                "flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start",
            },
            React.createElement(
              "button",
              {
                onClick: () => scrollToSection("contact"),
                className:
                  "group flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full font-medium transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/25",
              },
              t.hero.cta.contact,
              React.createElement(ChevronRight, {
                className:
                  "w-4 h-4 transition-transform group-hover:translate-x-1",
              })
            ),
            React.createElement(
              "button",
              {
                onClick: () => scrollToSection("expertise"),
                className:
                  "group flex items-center gap-2 px-6 py-3 text-emerald-600 bg-white rounded-full font-medium transition-all duration-300 hover:bg-emerald-50 hover:shadow-lg border-2 border-emerald-600/20 hover:border-emerald-600/30",
              },
              t.hero.cta.expertise,
              React.createElement(ChevronRight, {
                className:
                  "w-4 h-4 transition-transform group-hover:translate-x-1",
              })
            )
          )
        )
      )
    )
  );
};

export default Hero;