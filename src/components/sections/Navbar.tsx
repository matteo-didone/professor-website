"use client";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar = ({ isMenuOpen, setIsMenuOpen }: NavbarProps) => {
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64;
      const offset = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });

      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full h-16 bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-bold text-emerald-600 transition-colors hover:text-emerald-700"
          >
            Lino Polo
          </button>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "en" ? "it" : "en")}
              className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-gray-100 transition-colors"
            >
              <Globe size={20} />
              <span className="uppercase">
                {language === "en" ? "IT" : "EN"}
              </span>
            </button>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection("expertise")}
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              {t.nav.expertise}
            </button>
            <button
              onClick={() => scrollToSection("certifications")}
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              {t.nav.certifications}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              {t.nav.contact}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden bg-white border-b transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-4 space-y-4">
          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left px-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors"
          >
            {t.nav.about}
          </button>
          <button
            onClick={() => scrollToSection("expertise")}
            className="block w-full text-left px-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors"
          >
            {t.nav.expertise}
          </button>
          <button
            onClick={() => scrollToSection("certifications")}
            className="block w-full text-left px-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors"
          >
            {t.nav.certifications}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left px-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors"
          >
            {t.nav.contact}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
