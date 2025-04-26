import React from "react";
import destinationBg from "@/images/destinationBg.svg";
import Destination1 from "@/images/destination1.png";
import Destination2 from "@/images/destination2.png";
import Destination3 from "@/images/destination3.png";
import navigation_icon from "@/images/navigation_icon.svg";
import trip1 from "@/images/trip1.svg";
import trip2 from "@/images/trip2.svg";
import trip3 from "@/images/trip3.svg";
import tripImg from "@/images/tripImg.png";
import tripIcon1 from "@/images/tripIcon1.png";
import tripIcon2 from "@/images/tripIcon2.png";
import tripIcon3 from "@/images/tripIcon3.png";
import tripIcon4 from "@/images/tripIcon4.png";

import Image from "next/image";
import "@/Styles/global.css";
import { useTranslations } from "next-intl";
import { Rate } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";

const Destinations = () => {
  const t = useTranslations("destinations");
  const tripT = useTranslations("trip");

  const destination_list = [
    {
      id: 1,
      title: t("destination1_title"),
      img: Destination1,
      price: "$5,42k",
      date: t("destination1_date"),
    },
    {
      id: 2,
      title: t("destination2_title"),
      img: Destination2,
      price: "$4,2k",
      date: t("destination2_date"),
    },
    {
      id: 3,
      title: t("destination3_title"),
      img: Destination3,
      price: "$15k",
      date: t("destination3_date"),
    },
  ];

  const trip_list = [
    {
      id: 1,
      img: trip1,
      title: tripT("item_title1"),
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, repellendus.",
    },
    {
      id: 2,
      img: trip2,
      title: tripT("item_title2"),
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, repellendus.",
    },
    {
      id: 3,
      img: trip3,
      title: tripT("item_title3"),
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, repellendus.",
    },
  ];

  return (
    <section className="destinations pt-40 pb-50 transition-colors">
      <div>
        <div className="destinations_top-wrapper">
          <div className="container mx-auto">
            <div className="destinations_title-wrapper text-center flex flex-col gap-2 mb-15">
              <p className="text-[#5E6282] font-semibold text-2xl dark:text-gray-300">
                {t("subtitle")}
              </p>
              <h2 className="font-bold text-[#14183E] text-[66px] dark:text-gray-100">
                {t("title")}
              </h2>
            </div>
            <ul className="destinations_list flex items-center justify-between mb-40">
              {destination_list.map((item) => (
                <li
                  key={item.id}
                  className="destinations_item relative flex flex-col justify-end rounded-2xl w-[400px] h-[610px]"
                  style={{ boxShadow: "0 20px 30px rgba(202, 202, 207, 0.5)" }}
                >
                  <div className="destinations_item-img w-full absolute top-0 rounded-2xl left-0 -z-10">
                    <Image
                      className="w-full rounded-2xl"
                      src={item.img}
                      alt={item.title}
                    />
                  </div>
                  <div className="destinations_item-content rounded-b-2xl z-10 px-6 py-8 bg-white dark:bg-gray-800 transition-colors">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-[#14183E] text-2xl mb-5 dark:text-gray-100">
                        {item.title}
                      </h3>
                      <p className="text-[#5E6282] font-medium text-2xl mb-5 dark:text-gray-300">
                        {item.price}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Image src={navigation_icon} alt="navigation" />
                      <p className="text-[#5E6282] font-medium text-xl dark:text-gray-300">
                        {item.date}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex items-start justify-between">
            <div className="w-[600px]">
              <div className="flex flex-col gap-5">
                <p className="text-[#5E6282] font-semibold text-2xl dark:text-gray-300">
                  {tripT("subtitle")}
                </p>
                <h2 className="text-[#14183E] text-6xl font-bold dark:text-gray-100">
                  {tripT("title")}
                </h2>
              </div>
              <ul className="w-[500px] flex flex-col gap-10 mt-15">
                {trip_list.map((item) => (
                  <li
                    key={item.id}
                    className="trip_item flex items-center gap-5"
                  >
                    <div className="trip_item-img">
                      <Image src={item.img} alt={item.title} />
                    </div>
                    <div className="trip_item-content flex flex-col gap-1">
                      <h3 className="font-bold text-[#14183E] text-2xl dark:text-gray-100">
                        {item.title}
                      </h3>
                      <p className="text-[#5E6282] font-medium text-xl dark:text-gray-300">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[470px] rounded-3xl bg-white dark:bg-gray-800 py-6 px-8 pb-10 shadow-2xl shadow-blue-300 transition-colors">
              <Image src={tripImg} alt="tripImg" />
              <h3 className="font-medium text-2xl text-[#080809] mt-7 mb-4 dark:text-gray-100">
                {tripT("card_title")}
              </h3>
              <div className="flex gap-1">
                <span className="text-[#84829A] text-xl font-medium dark:text-gray-400">
                  14-29 {tripT("card_date")} |
                </span>
                <span className="text-[#84829A] text-xl font-medium dark:text-gray-400">
                  {tripT("card_author")}
                </span>
              </div>
              <ul className="flex gap-4 mt-5 mb-7">
                <li>
                  <Image src={tripIcon1} alt="tripIcon1 image" />
                </li>
                <li>
                  <Image src={tripIcon2} alt="tripIcon2 image" />
                </li>
                <li>
                  <Image src={tripIcon3} alt="tripIcon3 image" />
                </li>
              </ul>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Image src={tripIcon4} alt="tripIcon4 image" />
                  <p className="text-[#84829A] text-xl font-medium dark:text-gray-400">
                    {tripT("card_going")}
                  </p>
                </div>
                <Rate
                  className="cursor-pointer"
                  style={{ fontSize: "25px" }}
                  character={
                    <HeartOutlined
                      style={{ fontSize: "25px", color: "#4152CA" }}
                    />
                  }
                  count={1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
