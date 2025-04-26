import Image from "next/image";
import React from "react";
import testiImg from "@/images/testiImg.png";
import testiLogo1 from "@/images/testiLogo1.png";
import testiLogo2 from "@/images/testiLogo2.png";
import testiLogo3 from "@/images/testiLogo3.png";
import testiLogo4 from "@/images/testiLogo4.png";
import { useTranslations } from "next-intl";

const Testimonials = () => {
  const t = useTranslations("testimonials");
  return (
    <section className="testimonials mb-30 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto">
        <div className="flex justify-between mb-50">
          <div className="w-[540px] flex flex-col gap-3">
            <p className="text-[#5E6282] text-2xl font-semibold dark:text-gray-300">
              {t("subtitle")}
            </p>
            <h2 className="font-bold text-6xl text-[#14183E] dark:text-gray-100">
              {t("title")}
            </h2>
          </div>
          <div className="relative">
            <Image
              className="absolute top-[-17%] left-[-7%]"
              src={testiImg}
              alt="testimonials image"
            />
            <div className="w-[650px] px-12 py-9 pb-11 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl shadow-stone-300 transition-colors">
              <p className="text-[#5E6282] text-xl font-semibold dark:text-gray-300">
                {t("card_title")}
              </p>
              <p className="text-[#5E6282] mt-10 font-semibold text-2xl dark:text-gray-100">
                {t("card_author")}
              </p>
              <p className="text-lg text-[#5E6282] font-medium mt-2 dark:text-gray-400">
                {t("card_location")}
              </p>
            </div>
          </div>
        </div>
        <ul className="flex justify-between items-center">
          {[testiLogo1, testiLogo2, testiLogo3, testiLogo4].map((logo, idx) => (
            <li
              key={idx}
              className="hover:scale-110 hover:shadow-xl rounded-xl p-2 bg-white dark:bg-gray-800 transition-colors"
            >
              <Image
                className="h-[125px] object-contain"
                src={logo}
                alt="testimonials logo"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
