import React from "react";
import Footer from "./Footer";
import STT from "../STT";
import StickyBottomNavigation from "./Headernew";
export default function Layout({ children }) {
  return (
    <div>
      <StickyBottomNavigation />
      {children}
      <Footer />
      <STT />
    </div>
  );
}
