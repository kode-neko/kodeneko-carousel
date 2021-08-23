import { CSSProperties } from "react";

type StyleList = {
  right: undefined | string;
  transition: undefined | string;
};

type StyleWidth = {
  cont: number;
  units: string;
};

type ImgCarousel = {
  src: string;
  alt: string;
};

type CarouselProps = {
  imgList: ImgCarousel[];
  width?: number;
  transitionDuration?: string;
  transitionTiming?: string;
};

type KNCarouselControlsProps = {
  onClickControl: (index: number) => void;
  imgList: ImgCarousel[];
  imgWidth: StyleWidth;
  index: number;
};

type KNCarouselSlidesProps = {
  imgList: ImgCarousel[];
  imgWidth: StyleWidth;
  movement: CSSProperties;
};

export {
  StyleList,
  StyleWidth,
  ImgCarousel,
  CarouselProps,
  KNCarouselControlsProps,
  KNCarouselSlidesProps,
};
