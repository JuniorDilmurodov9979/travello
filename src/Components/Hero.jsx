import { useTranslations } from "next-intl";
import Image from "next/image";
import heroBg from "@/images/heroBg.png";
import { CaretRightOutlined, PlayCircleOutlined } from "@ant-design/icons";

const Hero = () => {
  const t = useTranslations("hero");
  return (
    <section className="hero  transition-colors">
      <div className="container mx-auto">
        <div className="relative flex py-[150px]">
          <div className="max-w-[570px] w-full flex flex-col gap-10">
            <p className="text-[#DF6951] font-bold text-2xl uppercase dark:text-[#DF6951]">
              {t("red")}
            </p>
            <h1 className="font-bold text-7xl text-[#181E4B] dark:text-gray-100">
              {t("title")}
            </h1>
            <p className="text-[#5E6282] font-medium text-xl dark:text-gray-300">
              {t("subtitle")}
            </p>
            <div className="flex gap-10 items-center">
              <button className="text-white font-medium bg-[#F1A501] rounded-lg px-6 py-4 cursor-pointer">
                {t("button1")}
              </button>

              <button className="cursor-pointer flex items-center text-[#686D77] font-medium text-xl gap-5 dark:text-[#686D77]">
                <span className="bg-[#DF6951] flex items-center justify-center rounded-full w-15 h-15">
                  <CaretRightOutlined
                    sizes="large"
                    style={{ fontSize: "25px", color: "white" }}
                  />
                </span>
                {t("button2")}
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0">
            <Image
              className="w-[830px] h-[830px]"
              src={heroBg}
              alt="Hero Background"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
