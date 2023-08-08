export const CenterRow = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenterColumn = `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const heightNoNavbar = (height: string): string => {
  return `calc(${height} - var(--navbarHeight))`;
};
