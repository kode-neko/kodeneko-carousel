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
  left: undefined | number;
  right: undefined | number;
  transition: undefined | string;
};

const Carousel: React.FC = (props) => {
  const [movement, setMovement] = useState<StyleList>({
    left: undefined,
    right: 0,
    transition: "",
  });

  const handleOnClickLeft = () => {
    const mov = (movement.right as number) - 1200;
    setMovement({ left: undefined, right: mov, transition: "right 0.5s" });
  };

  const handleOnClickRight = () => {
    const mov = (movement.right as number) + 1200;
    setMovement({ left: undefined, right: mov, transition: "right 0.5s" });
  };

  return (
    <div
      style={{ maxWidth: "1200px", margin: "20px auto", position: "relative" }}
    >
      <div className={styles.cont}>
        <ul className={styles.list} style={movement}>
          {catImgs.map((cat) => (
            <li className={styles.elementList}>
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
          <span>•</span>
          <span>•</span>
          <span>•</span>
        </div>
        <div className={styles.right} onClick={handleOnClickRight}>
          &#62;&#62;
        </div>
      </div>
    </div>
  );
};

export default Carousel;
