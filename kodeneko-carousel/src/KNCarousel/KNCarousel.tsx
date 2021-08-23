import React, { useState, useEffect } from "react";
import KNCarouselControls from "./KNCarouselControls";
import KNCarouselSlides from "./KNCarouselSlides";
import styles from "./styles.module.scss";
import { CarouselProps, StyleList, StyleWidth } from "./types";
import { createValueWidth } from "./utils";

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
      <KNCarouselSlides
        imgList={imgList}
        imgWidth={imgWidth}
        movement={movement}
      />
      <KNCarouselControls
        onClickControl={(indexControl) => handleOnClickArrow(indexControl, imgWidth)}
        imgList={imgList}
        imgWidth={imgWidth}
        index={index}
      />
    </div>
  );
};

export default Carousel;
