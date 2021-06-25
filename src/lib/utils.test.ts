import { ImgCarousel, StyleWidth } from "./types";
import { createValueWidth, useKNCarousel } from "./utils";
import { renderHook, act } from "@testing-library/react-hooks";

describe("utils", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it("createValueWidth return cont without multiply", () => {
    const imgWidth: StyleWidth = { cont: 100, units: "px" };
    const widthStr = createValueWidth(imgWidth);
    expect(widthStr).toBe("100px");
  });

  it("createValueWidth return cont with multiply", () => {
    const imgWidth: StyleWidth = { cont: 100, units: "px" };
    const multiply = 2;
    const widthStr = createValueWidth(imgWidth, multiply);
    expect(widthStr).toBe(`${imgWidth.cont * multiply}px`);
  });

  it("Obtain elements to create carousel through useKNCarousel", async () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    const imgList: ImgCarousel[] = [
      { src: "path01", alt: "desc01" },
      { src: "path02", alt: "desc02" },
    ];
    const width: number = 1200;

    const {result} = renderHook(() => useKNCarousel(imgList, width));
    const [
      index,
      imgWidth,
      onClickLeft,
      onClickRight,
      onClickPage,
    ] = result.current;
    expect(index).toBe(0)
    expect(imgWidth).toBe('1200px')
  });
});
