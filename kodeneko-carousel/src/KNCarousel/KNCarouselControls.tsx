import React from "react";
import styles from "./styles.module.scss";
import { KNCarouselControlsProps } from "./types";
import { createValueWidth } from "./utils";

const KNCarouselControls: React.FC<KNCarouselControlsProps> = ({
  onClickControl,
  imgList,
  imgWidth,
  index,
}) => {
  return (
    <div
      className={styles.contDisplay}
      style={{ width: createValueWidth(imgWidth) }}
    >
      <div className={styles.left} onClick={() => onClickControl(index - 1)}>
        <span className={styles.triangleLeft} />
      </div>

      <div className={styles.center}>
        <ul className={styles.list}>
          {imgList.map((img, indexImg) => (
            <li className={styles.listElement}>
              <span
                className={styles.dot}
                key={indexImg}
                onClick={() => onClickControl(indexImg)}
              >
                •
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.right} onClick={() => onClickControl(index + 1)}>
        <span className={styles.triangleRight} />
      </div>
    </div>
  );
};

export default KNCarouselControls;
