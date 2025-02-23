"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "./language-provider";
import {
  GlobeIcon,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { usePathname } from "next/navigation";

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langMenuRef.current &&
        !langMenuRef.current.contains(event.target as Node)
      ) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "/", label: t("header.home") },
    { href: "/projects", label: t("header.projects") },
    { href: "/books", label: t("header.books") },
    { href: "/resume", label: t("header.resume") },
  ];

  const languages = [
    { code: "en", label: "English" },
    { code: "pt", label: "Português" },
    { code: "es", label: "Español" },
    { code: "fr", label: "Français" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-lg py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 
                   text-transparent bg-clip-text hover:scale-105 transform transition-transform"
        >
          NR
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative group py-2 ${
                pathname === item.href ? "text-purple-400" : "text-gray-300"
              }`}
            >
              <span className="relative">
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 
                              group-hover:w-full ${
                                pathname === item.href ? "w-full" : ""
                              }`}
                />
              </span>
            </Link>
          ))}
        </nav>

        {/* Theme and Language Controls */}
        <div className="flex items-center space-x-3">
          <div className="relative" ref={langMenuRef}>
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center space-x-2 px-3 py-2 rounded-full 
                       bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-200"
              aria-expanded={isLangMenuOpen}
              aria-haspopup="true"
            >
              <GlobeIcon size={20} className="text-gray-400" />
              <span className="text-sm font-medium text-gray-400">
                {languages.find((l) => l.code === language)?.label}
              </span>
              <ChevronDown
                size={16}
                className={`text-gray-400 transition-transform duration-200 ${
                  isLangMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Language Dropdown */}
            {isLangMenuOpen && (
              <div
                className="absolute right-0 mt-2 w-48 rounded-lg bg-black/95 backdrop-blur-md 
                             border border-purple-500/20 shadow-lg py-2 animate-fadeIn"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200
                              flex items-center justify-between group
                              ${
                                language === lang.code
                                  ? "bg-purple-500/20 text-purple-400"
                                  : "text-gray-300 hover:bg-purple-500/10 hover:text-purple-400"
                              }`}
                  >
                    {lang.label}
                    {language === lang.code && (
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-purple-500/20 rounded-full transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-purple-400" />
            ) : (
              <Menu size={24} className="text-gray-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav
            className="container mx-auto px-4 py-4 flex flex-col space-y-2 bg-black/95 backdrop-blur-lg 
                       border-t border-purple-500/20 animate-fadeIn"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-3 px-4 rounded-lg transition-all duration-300 ${
                  pathname === item.href
                    ? "bg-purple-500/20 text-purple-400"
                    : "hover:bg-purple-500/10 text-gray-300 hover:text-purple-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Language Selection */}
            <div className="px-4 py-2 border-t border-purple-500/10 mt-2">
              <p className="text-sm text-gray-400 mb-2">Select Language</p>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsMenuOpen(false);
                    }}
                    className={`px-3 py-2 rounded-lg text-sm transition-colors duration-200
                            flex items-center justify-center space-x-2
                            ${
                              language === lang.code
                                ? "bg-purple-500/20 text-purple-400"
                                : "text-gray-300 hover:bg-purple-500/10 hover:text-purple-400"
                            }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
