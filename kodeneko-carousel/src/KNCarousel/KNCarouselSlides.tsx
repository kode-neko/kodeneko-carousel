import React from "react";
import styles from "./styles.module.scss";
import { KNCarouselSlidesProps } from "./types";
import { createValueWidth } from "./utils";

const KNCarouselSlides: React.FC<KNCarouselSlidesProps> = ({
  imgList,
  imgWidth,
  movement,
}) => {
  return (
    <div
      className={styles.contImgs}
      style={{ maxWidth: createValueWidth(imgWidth) }}
    >
      <ul
        className={styles.list}
        style={{
          ...movement,
          width: createValueWidth(imgWidth, imgList.length),
        }}
      >
        {imgList.map((img, index) => (
          <li className={styles.elementList} key={index}>
            <img
              className={styles.imgEle}
              style={{ width: createValueWidth(imgWidth) }}
              src={img.src}
              alt={img.alt}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KNCarouselSlides;
