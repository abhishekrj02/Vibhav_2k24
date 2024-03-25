import "../styles/globals.css";
import "../styles/pacman.css";
import Loading from "../Components/Loading";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    setTimeout(function setLader() {
      setLoading(false);
    }, 2000);
  }, []);
  return loading ? <Loading /> : <Component {...pageProps} />;
}

// import { useState, useEffect } from "react";
// import { ParallaxProvider } from "react-scroll-parallax";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Loading from "../Components/Loading";
// import "../fonts"; // Importing poppins font
// import { cn } from "../lib/utils";
// import "../styles/globals.css";
// import "../styles/pacman.css";
// import { AppType } from "next/dist/shared/lib/utils"; // Changed import path for AppType

// export default function MyApp({ Component, pageProps }) {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     AOS.init();
//   }, []);

//   useEffect(() => {
//     setTimeout(function setLoader() {
//       setLoading(false);
//     }, 2000);
//   }, []);

//   return (
//     <div className={cn("font-body text-black-light")}>
//       <ParallaxProvider>
//         {loading ? <Loading /> : <Component {...pageProps} />}
//       </ParallaxProvider>
//     </div>
//   );
// }
