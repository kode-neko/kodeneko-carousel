import React from "react";
import ReactImageProcess from "react-image-process";
import cat01 from "./cat01.jpg";
import cat02 from "./cat02.jpg";
import cat03 from "./cat03.jpg";
import cat04 from "./cat04.jpg";

const catImgs = [
  {
    src: cat01,
    alt: "desc",
  },
  {
    src: cat02,
    alt: "desc",
  },
  {
    src: cat03,
    alt: "desc",
  },
  {
    src: cat04,
    alt: "desc",
  },
];

const Carousel: React.FC = (props) => {
  return (
    <div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {catImgs.map((cat) => (
          <li style={{ margin: 0, padding: 0 }}>
              <img src={cat.src} alt={cat.alt} height="300px"/>
          </li>
        ))}
      </ul>
      <div>
        <span>&#60;&#60;</span>
        <div>
          <span>•</span>
          <span>•</span>
          <span>•</span>
        </div>
        <span>&#62;&#62;</span>
      </div>
    </div>
  );
};

export default Carousel;
