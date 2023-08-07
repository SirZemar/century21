interface Sizes {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  tablet: string;
  laptop: string;
  laptopL: string;
  desktop: string;
  desktopL: string;
}

type Device = {
  [key in keyof Sizes]: string;
};

const sizes: Sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "414px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "1920px",
  desktopL: "2560px",
};

export const device = {} as Device;

Object.keys(sizes).forEach((key) => {
  const media = `(min-width: ${sizes[key as keyof Sizes]})`;
  device[key as keyof Sizes] = media;
});
