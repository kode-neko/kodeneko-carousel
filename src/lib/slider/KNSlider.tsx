import React, { useRef, useState } from "react";
import styles from "./styles.module.scss";

const MIN_RANGE = 50;

const KNSlider: React.FC<KNSliderProps> = ({
  initValue = 0,
  endValue = 100,
  step = 10,
  minRangeSeparation = 10,
  currency = "€",
}) => {
  const [dotLeftStyle, setDotLeftStyle] = useState<React.CSSProperties>({});
  const [dotRightStyle, setDotRightStyle] = useState<React.CSSProperties>({});
  const [coordinatesX, setCoordinatesX] = useState<KNSliderCoordinatesX>();
  const dotLeftRef = useRef<HTMLDivElement>(null);
  const dotRightRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const getCoordinatesX = (): KNSliderCoordinatesX => ({
    initLineX: lineRef.current?.getBoundingClientRect().left || 0,
    endLineX: lineRef.current?.getBoundingClientRect().right || 0,
    posDotLeft: dotLeftRef.current?.getBoundingClientRect().left || 0,
    posDotRight: dotRightRef.current?.getBoundingClientRect().left || 0,
    offsetLineLeft: lineRef.current?.getBoundingClientRect().left || 0,
    widthLine: lineRef.current?.clientWidth || 0,
  });

  const positionLeftX = (movDot: number): number => {
    let finalX = 0;
    if (coordinatesX) {
      const { initLineX, posDotRight } = coordinatesX;
      if (movDot < initLineX) finalX = initLineX - 8;
      else if (movDot > posDotRight - MIN_RANGE)
        finalX = posDotRight - MIN_RANGE - 8;
      else finalX = movDot - 8;
    }
    return finalX;
  };

  const positionRightX = (movDot: number): number => {
    let finalX = 0;
    if (coordinatesX) {
      const { endLineX, posDotLeft } = coordinatesX;
      if (posDotLeft + MIN_RANGE > movDot) finalX = posDotLeft + MIN_RANGE - 8;
      else if (movDot > endLineX) finalX = endLineX - 8;
      else finalX = movDot - 8;
    }
    return finalX;
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setDragImage(document.createElement("img"), 0, 0);
    setCoordinatesX(getCoordinatesX());
  };
  const handleDragLeft = (e: React.DragEvent<HTMLDivElement>) => {
    if (e.pageX > 0) setDotLeftStyle({ left: positionLeftX(e.pageX) });
  };
  const handleDragRight = (e: React.DragEvent<HTMLDivElement>) => {
    if (e.pageX > 0) setDotRightStyle({ left: positionRightX(e.pageX) });
  };
  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    setCoordinatesX(undefined);
  };

  return (
    <div className={styles.cont}>
      <div className={styles.selector}>
        <div
          className={styles.dotLeft}
          ref={dotLeftRef}
          style={dotLeftStyle}
          draggable
          onDragStart={handleDragStart}
          onDrag={handleDragLeft}
          onDragEnd={handleDragEnd}
        />
        <div
          className={styles.dotRight}
          ref={dotRightRef}
          style={dotRightStyle}
          draggable
          onDragStart={handleDragStart}
          onDrag={handleDragRight}
          onDragEnd={handleDragEnd}
        />
        <div ref={lineRef} className={styles.line} />
      </div>
      <div className={styles.info}>
        <input
          className={styles.textLeft}
          type="text"
          value={`${initValue}${currency}`}
        />
        <input
          className={styles.textRight}
          type="text"
          value={`${endValue}${currency}`}
        />
      </div>
    </div>
  );
};

export default KNSlider;
