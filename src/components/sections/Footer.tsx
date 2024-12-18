"use client";
import { Linkedin, Github, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import React from "react";

const Footer = () => {
  const { t } = useLanguage();
  return React.createElement(
    "footer",
    { className: "py-8 border-t" },
    React.createElement(
      "div",
      { className: "container mx-auto px-4" },
      React.createElement(
        "div",
        { className: "flex flex-col md:flex-row justify-between items-center" },
        // Left side with copyright and credits
        React.createElement(
          "div",
          {
            className:
              "flex flex-col md:flex-row items-center gap-2 mb-4 md:mb-0",
          },
          React.createElement(
            "p",
            { className: "text-gray-600" },
            t.footer.rights
          ),
          React.createElement(
            "span",
            { className: "hidden md:inline text-gray-400" },
            "•"
          ),
          React.createElement(
            "p",
            { className: "text-gray-600" },
            "Made by ",
            React.createElement(
              "a",
              {
                href: "https://github.com/matteo-didone",
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "text-emerald-600 hover:text-emerald-700 transition-colors",
              },
              "Matteo Didone"
            )
          )
        ),
        // Right side with social links
        React.createElement(
          "div",
          { className: "flex gap-6" },
          React.createElement(
            "a",
            {
              href: "https://www.linkedin.com/in/linopolo/",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "text-gray-600 hover:text-emerald-600 transition-colors",
            },
            React.createElement(Linkedin, { size: 20 })
          ),
          React.createElement(
            "a",
            {
              href: "https://github.com/your-username",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "text-gray-600 hover:text-emerald-600 transition-colors",
            },
            React.createElement(Github, { size: 20 })
          ),
          React.createElement(
            "a",
            {
              href: "mailto:info@linopolo.net",
              className:
                "text-gray-600 hover:text-emerald-600 transition-colors",
            },
            React.createElement(Mail, { size: 20 })
          )
        )
      )
    )
  );
};

export default Footer;
