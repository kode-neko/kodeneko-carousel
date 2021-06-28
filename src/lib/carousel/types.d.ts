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

type KNCarouselSlidesProps = {
  imgList: ImgCarousel[];
  imgWidth: string;
  index: number;
  transitionDuration?: string;
  transitionTiming?: string;
};

type useKNCarouselData = [
  number,
  string,
  () => void,
  () => void,
  (index: number) => void
]

export {
  StyleList,
  StyleWidth,
  ImgCarousel,
  CarouselProps,
  KNCarouselControlsProps,
  KNCarouselSlidesProps,
  useKNCarouselData
};
