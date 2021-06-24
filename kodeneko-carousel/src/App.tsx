import React from "react";
import cat01 from "./cat01.jpg";
import cat02 from "./cat02.jpg";
import cat03 from "./cat03.jpg";
import cat04 from "./cat04.jpg";
import { ImgCarousel } from "./lib/types";
import LMCarousel from "./LMCarousel/LMCarousel";

const catImgs: ImgCarousel[] = [
  {
    src: cat01,
    alt: "desc",
  },
  {
    src: cat01,
    alt: "desc",
  },
  {
    src: cat01,
    alt: "desc",
  },
  {
    src: cat01,
    alt: "desc",
  },
];

function App() {
  return <LMCarousel imgList={catImgs} width={1200} />;
}

export default App;
