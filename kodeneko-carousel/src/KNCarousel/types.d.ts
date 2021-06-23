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

export { StyleList, StyleWidth, ImgCarousel, CarouselProps };
