import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "@/images/logo.png";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="bg-white dark:bg-gray-900 py-12 px-6 md:px-16 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and tagline */}
        <div>
          <Image src={logo} alt="logo" />
          <p className="mt-2 text-gray-600 font-medium dark:text-gray-300">
            {t("subtitle")}
          </p>
        </div>

        {/* Company links */}
        <div>
          <h3 className="text-black dark:text-gray-100 font-bold text-2xl">
            {t("title1")}
          </h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white"
              >
                {t("item1_text1")}
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white"
              >
                {t("item1_text2")}
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white"
              >
                {t("item1_text3")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact links */}
        <div>
          <h3 className="text-black dark:text-gray-100 font-bold text-2xl">
            {t("title2")}
          </h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white"
              >
                {t("item2_text1")}
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white"
              >
                {t("item2_text2")}
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white"
              >
                {t("item2_text3")}
              </Link>
            </li>
          </ul>
        </div>

        {/* More links */}
        <div>
          <h3 className="text-black dark:text-gray-100 font-bold text-2xl">
            {t("title3")}
          </h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white"
              >
                {t("item3_text1")}
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white"
              >
                {t("item3_text2")}
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white"
              >
                {t("item3_text3")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Social icons */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex space-x-4 mb-6 md:mb-0">
          <Link
            href="#"
            aria-label="Facebook"
            className="hover:text-gray-900 dark:hover:text-white"
          >
            <FaFacebookF
              size={30}
              className="text-gray-600 dark:text-gray-300"
            />
          </Link>
          <Link
            href="#"
            aria-label="Instagram"
            className="hover:text-gray-900 dark:hover:text-white"
          >
            <FaInstagram
              size={30}
              className="text-gray-600 dark:text-gray-300"
            />
          </Link>
          <Link
            href="#"
            aria-label="Twitter"
            className="hover:text-gray-900 dark:hover:text-white"
          >
            <FaTwitter size={30} className="text-gray-600 dark:text-gray-300" />
          </Link>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
        {t("bottom_text")}
      </div>
    </footer>
  );
}
