import React, { useState } from "react";
import styles from "./App.module.css";
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

type StyleList = {
  right: undefined | number;
  transition: undefined | string;
};

const Carousel: React.FC = (props) => {
  const [index, setIndex] = useState<number>(0);
  const [movement, setMovement] = useState<StyleList>({
    right: 0,
    transition: "",
  });

  const handleOnClickLeft = () => {
    let auxIndex = index - 1;
    if (auxIndex < 0) auxIndex = catImgs.length - 1;
    const mov = auxIndex * 1200;
    setMovement({ right: mov, transition: "right 0.5s" });
    setIndex(auxIndex);
  };

  const handleOnClickRight = () => {
    let auxIndex = index + 1;
    if (auxIndex > catImgs.length - 1) auxIndex = 0;
    const mov = auxIndex * 1200;
    setMovement({ right: mov, transition: "right 0.5s" });
    setIndex(auxIndex);
  };

  const handleOnClickDot = (indexDot: number) => {
    if (indexDot > index || indexDot < index) {
      const mov = indexDot * 1200;
      setMovement({ right: mov, transition: "right 0.5s" });
      setIndex(indexDot);
    }
  };

  return (
    <div
      style={{ maxWidth: "1200px", margin: "20px auto", position: "relative" }}
    >
      <div className={styles.cont}>
        <ul className={styles.list} style={movement}>
          {catImgs.map((cat, index) => (
            <li className={styles.elementList} key={index}>
              <img
                className={styles.imgEle}
                src={cat.src}
                alt={cat.alt}
                width="300px"
              />
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.contDisplay}>
        <div className={styles.left} onClick={handleOnClickLeft}>
          &#60;&#60;
        </div>
        <div className={styles.center}>
          {catImgs.map((cat, indexCat) => (
            <span key={indexCat} onClick={() => handleOnClickDot(indexCat)}>
              •
            </span>
          ))}
        </div>
        <div className={styles.right} onClick={handleOnClickRight}>
          &#62;&#62;
        </div>
      </div>
    </div>
  );
};

export default Carousel;
