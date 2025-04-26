"use client";

import { Link, redirect, usePathname } from "@/i18n/navigation";
import { useTheme } from "next-themes";
import Image from "next/image";
import logo from "@/images/logo.png";
import { useLocale, useTranslations } from "next-intl";
import HeroBackground from "@/Components/HeroBg";

const Navbar = () => {
  const t = useTranslations("header");
  const { theme, setTheme } = useTheme();
  const path = usePathname();
  const locale = useLocale();

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const handleLanguageChange = (e) => {
    redirect({ locale: e.target.value, href: path });
  };

  return (
    <header className=" py-10  transition-colors">
      <HeroBackground />

      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <Image src={logo} alt="logo" className="h-10 w-auto" />
        </Link>

        <nav>
          <ul className="flex gap-8 text-lg">
            {["destinations", "hotels", "flights", "bookings"].map((key) => (
              <li key={key}>
                <Link
                  href="/"
                  className="font-medium text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-gray-800 dark:text-gray-200 hover:underline transition-colors"
          >
            {t("login")}
          </Link>
          <Link
            href="/"
            className="px-4 py-2 rounded-lg border border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
          >
            {t("signUp")}
          </Link>

          <button
            onClick={handleThemeChange}
            className="p-2 rounded-full shadow-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-110 transition-transform"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <select
            value={locale}
            onChange={handleLanguageChange}
            className="p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          >
            <option value="uz">Uzbek</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
