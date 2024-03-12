import Head from "next/head";
import Image from "next/image";
import * as basicScroll from "basicscroll";
import Layout from "../Components/UI/Layout";
import HomePage from "../Components/HomePage";
import AboutUs from "../Components/AboutUs";
import FAQs from "../Components/UI/FAQs";
import CC from "../Components/UI/CC";
import { useEffect } from "react";
import Footer from "../Components/UI/Footer";
import Contact from "../Components/Contact";
import Logof from "./logof";

export default function Home() {
  return (
    <>
      <Head>
        <title> Team Vibhav</title>
        <meta
          name="description"
          content="Team Vibhav is the Departmental team of Electronics & Communication Engineering Department which works for Nimbus-Annual Technical Festival of National Institute of Technology, Hamirpur"
        />
        <meta
          name="keywords"
          content="Projects , Events , Workshops , Our Team , Our Work , Alumni "
        />
        <link rel="icon" href="/favicon.ico?" />
      </Head>
      <main>
        <Layout>
          {/* <Image
            alt="homePage Parallax"
            loading="lazy"
            src="/Assets/4x/MobileHeroSection.webp"
            className="fixed top-0 left-0 flex object-cover h-screen opacity-40"
            width={7921}
            height={7921}
          ></Image> */}
          <div className="z-50 flex flex-col">
            {/* <HomePage /> */}
            <Logof />
            <AboutUs />
            <CC />
            <FAQs />
            <Contact />
          </div>
        </Layout>
      </main>
    </>
  );
}
