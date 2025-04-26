import Image from "next/image";
import category1 from "@/images/category1.png";
import category2 from "@/images/category2.png";
import category3 from "@/images/category3.png";
import category4 from "@/images/category4.png";
import categoryBgStar from "@/images/categoryBgStar.svg";
import { useTranslations } from "next-intl";

const Category = () => {
  const t = useTranslations("category");
  const category_list = [
    {
      id: 1,
      title: t("category1_title"),
      text: t("category1_text"),
      img: category1,
    },
    {
      id: 2,
      title: t("category2_title"),
      text: t("category2_text"),
      img: category2,
    },
    {
      id: 3,
      title: t("category3_title"),
      text: t("category3_text"),
      img: category3,
    },
    {
      id: 4,
      title: t("category4_title"),
      text: t("category4_text"),
      img: category4,
    },
  ];

  return (
    <section className="category pt-30 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto">
        <div className="relative">
          <Image
            className="absolute top-5 right-0 w-[150px] h-[150px]"
            src={categoryBgStar}
            alt="decorative star"
          />
          <div className="flex flex-col gap-3 mb-20">
            <p className="font-semibold text-[#5E6282] text-2xl text-center dark:text-gray-300">
              {t("title")}
            </p>
            <h2 className="text-[#14183E] font-bold text-5xl text-center dark:text-gray-100">
              {t("category_info")}
            </h2>
          </div>
          <div className="relative">
            <ul className="flex items-center pb-10 justify-between relative">
              {category_list.map((cat, idx) => (
                <li
                  key={cat.id}
                  className={`max-w-[355px] z-${
                    idx === 1 ? 10 : 1
                  } h-[420px] w-full text-center flex flex-col items-center justify-center p-10 pt-1 hover:rounded-3xl hover:shadow-[0px_2.46px_4.19px_rgba(0,0,0,0),0px_10.84px_8.67px_rgba(0,0,0,0.01),0px_26.6px_17.29px_rgba(0,0,0,0.01),0px_51.23px_33.89px_rgba(0,0,0,0.01),0px_86.21px_62.32px_rgba(0,0,0,0.02),0px_133.01px_106.41px_rgba(0,0,0,0.02)] transition-shadow duration-300`}
                >
                  <Image src={cat.img} alt="category" />
                  <h3 className="text-[#1E1D4C] mt-8 mb-5 text-2xl font-semibold dark:text-gray-100">
                    {cat.title}
                  </h3>
                  <p className="text-[#5E6282] text-xl font-medium dark:text-gray-300">
                    {cat.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
