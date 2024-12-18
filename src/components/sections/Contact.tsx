"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import React from "react";

const Contact = () => {
  const { t } = useLanguage();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/mgvejqap", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Thanks for your submission!");
        (event.target as HTMLFormElement).reset();
      } else {
        alert("Oops! There was a problem.");
      }
    } catch (error) {
      alert("Oops! There was a problem.");
    }
  }

  return React.createElement(
    "section",
    { id: "contact", className: "py-16 bg-gray-50" },
    React.createElement(
      "div",
      { className: "container mx-auto px-4" },
      // Title
      React.createElement(
        "h2",
        { className: "text-3xl font-bold text-gray-900 mb-8" },
        t.contact.title
      ),
      // Grid Container
      React.createElement(
        "div",
        { className: "grid grid-cols-1 md:grid-cols-2 gap-12" },
        // Left Column
        React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            { className: "text-lg text-gray-600 mb-6" },
            t.contact.intro
          ),
          React.createElement(
            "div",
            { className: "space-y-4" },
            // Social Links
            React.createElement(
              "a",
              {
                href: "mailto:info@linopolo.net",
                className:
                  "flex items-center gap-3 text-gray-600 hover:text-emerald-600",
              },
              React.createElement(Mail, { size: 20 }),
              React.createElement("span", null, t.contact.email)
            ),
            React.createElement(
              "a",
              {
                href: "https://www.linkedin.com/in/linopolo/",
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "flex items-center gap-3 text-gray-600 hover:text-emerald-600",
              },
              React.createElement(Linkedin, { size: 20 }),
              React.createElement("span", null, t.contact.linkedin)
            )
          )
        ),
        // Right Column - Form
        React.createElement(
          "form",
          { onSubmit: handleSubmit, className: "space-y-6" },
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              {
                htmlFor: "name",
                className: "block text-sm font-medium text-gray-700 mb-1",
              },
              t.contact.form.name
            ),
            React.createElement("input", {
              type: "text",
              id: "name",
              name: "name",
              required: true,
              className:
                "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500",
            })
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              {
                htmlFor: "email",
                className: "block text-sm font-medium text-gray-700 mb-1",
              },
              t.contact.form.email
            ),
            React.createElement("input", {
              type: "email",
              id: "email",
              name: "email",
              required: true,
              className:
                "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500",
            })
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              {
                htmlFor: "message",
                className: "block text-sm font-medium text-gray-700 mb-1",
              },
              t.contact.form.message
            ),
            React.createElement("textarea", {
              id: "message",
              name: "message",
              rows: 4,
              required: true,
              className:
                "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500",
            })
          ),
          React.createElement(
            "button",
            {
              type: "submit",
              className:
                "w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors",
            },
            t.contact.form.send
          )
        )
      )
    )
  );
};

export default Contact;
