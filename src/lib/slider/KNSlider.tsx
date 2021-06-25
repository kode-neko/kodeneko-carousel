import React from "react";
import styles from "./styles.module.scss";

type KNSliderProps = {};

const KNSlider: React.FC<KNSliderProps> = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.selector}>
        <div className={styles.dotLeft} />
        <div className={styles.dotRight} />
        <div className={styles.line} />
      </div>
      <div className={styles.info}>
        <input className={styles.textLeft} type="text" value="10€" />
        <input className={styles.textRight} type="text" value="50€" />
      </div>
    </div>
  );
};

export default KNSlider;
