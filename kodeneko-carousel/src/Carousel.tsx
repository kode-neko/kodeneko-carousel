import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

type StyleList = {
  right: undefined | string;
  transition: undefined | string;
};

type StyleWidth = {
  cont: number;
  units: string;
};

const createValueWidth = (imgWidth: StyleWidth, multiply = 1) =>
  `${imgWidth.cont * multiply}${imgWidth.units}`;

export type ImgCarousel = {
  src: string;
  alt: string;
};

type CarouselProps = {
  imgList: ImgCarousel[];
  width?: number;
  transitionDuration?: string;
  transitionTiming?: string;
};

const Carousel: React.FC<CarouselProps> = ({
  imgList,
  width,
  transitionDuration = "1s",
  transitionTiming = "ease",
}) => {
  const [index, _setIndex] = useState<number>(0);
  const indexeRef = React.useRef(index);
  const setIndex = (data: number) => {
    indexeRef.current = data;
    _setIndex(data);
  };
  const [imgWidth, setImgWidth] = useState<StyleWidth>({
    cont: width ? width : 100,
    units: width ? "px" : "vw",
  });
  const [movement, setMovement] = useState<StyleList>({
    right: "0",
    transition: "",
  });

  const handleOnClickArrow = (catIndex: number, actualWidth: StyleWidth) => {
    let auxIndex = catIndex;
    if (catIndex > imgList.length - 1) auxIndex = 0;
    else if (catIndex < 0) auxIndex = imgList.length - 1;
    const mov = auxIndex * actualWidth.cont;
    setMovement({
      right: createValueWidth({ cont: mov, units: actualWidth.units }),
      transition: `right ${transitionDuration} ${transitionTiming}`,
    });
    setIndex(auxIndex);
  };

  useEffect(() => {
    const mediaQueryList = window.matchMedia(
      `(max-imgWidth: ${createValueWidth(imgWidth)})`
    );
    const listener = (event: MediaQueryListEvent) => {
      let newWidth: StyleWidth = { cont: imgWidth.cont, units: "px" };
      if (event.matches) newWidth = { cont: 100, units: "vw" };
      setImgWidth(newWidth);
      setMovement({
        right: createValueWidth({
          cont: newWidth.cont * indexeRef.current,
          units: newWidth.units,
        }),
        transition: "",
      });
      event.stopPropagation();
    };
    mediaQueryList.addEventListener("change", listener);
    return () => {
      if (width) mediaQueryList.removeEventListener("change", listener);
    };
  }, []);

  return (
    <div
      className={styles.mainCont}
      style={{ width: createValueWidth(imgWidth) }}
    >
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

      <div
        className={styles.contDisplay}
        style={{ width: createValueWidth(imgWidth) }}
      >
        <div
          className={styles.left}
          onClick={() => handleOnClickArrow(index - 1, imgWidth)}
        >
          <span className={styles.triangleLeft} />
        </div>

        <div className={styles.center}>
          <ul className={styles.list}>
            {imgList.map((img, indexCat) => (
              <li className={styles.listElement}>
                <span
                  className={styles.dot}
                  key={indexCat}
                  onClick={() => handleOnClickArrow(indexCat, imgWidth)}
                >
                  •
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={styles.right}
          onClick={() => handleOnClickArrow(index + 1, imgWidth)}
        >
          <span className={styles.triangleRight} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
