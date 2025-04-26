"use client";
import Hero from "@/Components/Hero";
import Navbar from "./Navbar";
import Category from "@/Components/Category";
import { Suspense, useEffect, useState } from "react";
import Destionations from "@/Components/Destionations";
import Testimonials from "@/Components/Testimonials";
import Subscribe from "@/Components/Subscribe";
import Footer from "./Footer";

const Layout = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Destionations />
      <Testimonials />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Layout;
