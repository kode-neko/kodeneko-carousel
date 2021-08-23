import { StyleWidth } from "./types";

const createValueWidth = (imgWidth: StyleWidth, multiply = 1) =>
  `${imgWidth.cont * multiply}${imgWidth.units}`;

export { createValueWidth };
