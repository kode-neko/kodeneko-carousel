type KNSliderCoordinatesX = {
  initLineX: number;
  endLineX: number;
  posDotLeft: number;
  posDotRight: number;
  offsetLineLeft: number;
  widthLine: number;
};

type KNSliderProps = {
  initValue?: number;
  endValue?: number;
  step?: number;
  minRangeSeparation?: number;
  currency?: string;
};

export type { KNSliderCoordinatesX, KNSliderProps };
