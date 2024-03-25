import Head from "next/head";
import Layout from "../Components/UI/Layout";
import FAQs from "../Components/UI/FAQs";
import Contact from "../Components/Contact";
import Gallery from "../Components/homepage/components/home/Gallery";
import LandingPage from "../Components/homepage/components/home/LandingPage";
import AboutUs from "../Components/homepage/components/home/AboutUs";
import CC from "../Components/homepage/components/home/CC";

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
          content="Projects , Eventsnew , Workshops , Our Team , Our Work , Alumni "
        />
        <link rel="icon" href="/favicon.ico?" />
      </Head>
      <main>
        <Layout>
          <div className="z-50 flex flex-col">
            <LandingPage />
            <AboutUs />
            <Gallery />
            <CC />
            <FAQs />
            <Contact />
            {/* <Logof /> */}
            {/* <AboutUs /> */}
            {/* <CC /> */}
          </div>
        </Layout>
      </main>
    </>
  );
}
