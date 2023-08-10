interface Sizes {
  mobileS: number;
  mobileM: number;
  mobileL: number;
  tablet: number;
  laptop: number;
  laptopL: number;
  desktop: number;
  desktopL: number;
}

type Device = {
  [key in keyof Sizes]: string;
};

export const sizes: Sizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 414,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 1920,
  desktopL: 2560,
};

export const device = {} as Device;

Object.keys(sizes).forEach((key) => {
  const media = `(min-width: ${sizes[key as keyof Sizes]}px)`;
  device[key as keyof Sizes] = media;
});
