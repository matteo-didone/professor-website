"use client";
import { Linkedin, Github, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">{t.footer.rights}</p>
          <div className="flex gap-6">
            <a 
              href="https://www.linkedin.com/in/linopolo/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-emerald-600"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/your-username" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-emerald-600"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:info@linopolo.net" 
              className="text-gray-600 hover:text-emerald-600"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;