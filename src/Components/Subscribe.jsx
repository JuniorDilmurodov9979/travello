import { Button } from "antd";
import Input from "antd/es/input/Input";
import React from "react";
import "../Styles/global.css";
import { MailOutlined } from "@ant-design/icons";
import { useTranslations } from "next-intl";

const Subscribe = () => {
  const t = useTranslations("subscribe");
  return (
    <section className="subscribe bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto">
        <div className="pb-20">
          <div className="bg-[#e2ddf4] dark:bg-gray-800 subs_form rounded-tl-[130px] py-[100px] flex flex-col items-center justify-center transition-colors">
            <div className="w-[700px]">
              <h3 className="text-[#5E6282] dark:text-gray-300 text-3xl text-center font-semibold">
                {t("title")}
              </h3>
              <div className="flex justify-center mt-20 gap-7">
                <Input
                  className="flex items-center justify-center gap-2 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-gray-200"
                  prefix={<MailOutlined style={{ fontSize: "17px" }} />}
                  style={{ color: "#39425D", width: "400px" }}
                  placeholder={t("input")}
                />
                <Button
                  style={{
                    background: "#FF946D",
                    color: "white",
                    width: "230px",
                    padding: "30px 0px",
                  }}
                  className="dark:bg-gray-600 dark:text-gray-200"
                >
                  {t("btn")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
