import { useEffect, useState } from "react";
import Image from "next/image";
import heroBgLight from "@/images/heroBgLight.png";
import heroBgDark from "@/images/heroBgDark.png";
import { useTheme } from "next-themes";

const HeroBackground = () => {
  const { theme, setTheme } = useTheme();
  // Prevents rendering until theme is ready

  return (
    <>
      {theme === "dark" ? (
        <Image
          width={700}
          height={700}
          className="absolute top-0 right-0 -z-10"
          src={heroBgDark}
          alt="heroBg"
        />
      ) : (
        <Image
          width={700}
          height={700}
          className="absolute top-0 right-0 -z-10"
          src={heroBgLight}
          alt="heroBg"
        />
      )}
    </>
  );
};

export default HeroBackground;
