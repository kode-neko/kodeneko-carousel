import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import cat01 from "./cat01.jpg";
import cat02 from "./cat02.jpg";
import cat03 from "./cat03.jpg";
import cat04 from "./cat04.jpg";

const WIDTH = "1200px";
const WIDTH_RES = "100vw";

const catImgs = [
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

type StyleList = {
  right: undefined | number;
  transition: undefined | string;
};

type StyleWidth = {
  cont: number;
  units: string;
};

const createValueWidth = (width: StyleWidth, multiply = 1) =>
  `${width.cont * multiply}${width.units}`;

const Carousel: React.FC = (props) => {
  const [index, setIndex] = useState<number>(0);
  const [movement, setMovement] = useState<StyleList>({
    right: 0,
    transition: "",
  });
  const [width, setWidth] = useState<StyleWidth>({ cont: 1200, units: "px" });

  const handleOnClickArrow = (catIndex: number) => {
    let auxIndex = catIndex;
    if (catIndex > catImgs.length - 1) auxIndex = 0;
    else if (catIndex < 0) auxIndex = catImgs.length - 1;
    const mov = auxIndex * 1200;
    setMovement({ right: mov, transition: "right 0.5s" });
    setIndex(auxIndex);
  };

  useEffect(() => {
    const mediaQueryList = window.matchMedia(`(max-width: ${createValueWidth(width)})`);
    const listener = (event: MediaQueryListEvent) => {
      console.log(event.matches ? "It matches!" : "It doesn't match.");
      if(event.matches) setWidth({cont: 100, units: 'vw'})
      else setWidth({cont: 1200, units: 'px'})
      event.stopPropagation()
    };
    mediaQueryList.addEventListener("change", listener);
  }, [])

  return (
    <div style={{ position: "relative" }}>
      <div
        className={styles.contImgs}
        style={{ maxWidth: createValueWidth(width) }}
      >
        <ul
          className={styles.list}
          style={{
            ...movement,
            width: createValueWidth(width, catImgs.length),
          }}
        >
          {catImgs.map((cat, index) => (
            <li className={styles.elementList} key={index}>
              <img
                className={styles.imgEle}
                style={{ width: createValueWidth(width) }}
                src={cat.src}
                alt={cat.alt}
              />
            </li>
          ))}
        </ul>
      </div>

      <div
        className={styles.contDisplay}
        style={{ width: createValueWidth(width) }}
      >
        <div
          className={styles.left}
          onClick={() => handleOnClickArrow(index - 1)}
        >
          &#60;&#60;
        </div>
        <div className={styles.center}>
          {catImgs.map((cat, indexCat) => (
            <span key={indexCat} onClick={() => handleOnClickArrow(indexCat)}>
              •
            </span>
          ))}
        </div>
        <div
          className={styles.right}
          onClick={() => handleOnClickArrow(index + 1)}
        >
          &#62;&#62;
        </div>
      </div>
    </div>
  );
};

export default Carousel;
