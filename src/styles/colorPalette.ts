import { css } from "@emotion/react";

export const colorPalette = css`
  :root {
    --gray: rgba(58, 58, 58, 1);
    --gray20: rgba(58, 58, 58, 0.02);
    --gray50: rgba(58, 58, 58, 0.05);
    --gray100: rgba(58, 58, 58, 0.1);
    --gray200: rgba(58, 58, 58, 0.2);
    --gray300: rgba(58, 58, 58, 0.3);
    --gray400: rgba(58, 58, 58, 0.4);
    --gray500: rgba(58, 58, 58, 0.5);
    --gray600: rgba(58, 58, 58, 0.6);
    --gray700: rgba(58, 58, 58, 0.7);
    --gray800: rgba(58, 58, 58, 0.8);
    --gray900: rgba(58, 58, 58, 0.9);
    --brightGray: rgba(239, 239, 239, 1);
    --blue: rgba(54, 143, 255, 1);
    --blue60: rgba(54, 143, 255, 0.06);
    --blue100: rgba(54, 143, 255, 0.1);
    --blue200: rgba(54, 143, 255, 0.2);
    --blue300: rgba(54, 143, 255, 0.3);
    --blue400: rgba(54, 143, 255, 0.4);
    --blue500: rgba(54, 143, 255, 0.5);
    --blue980: rgba(54, 143, 255, 0.98);
    --dark-blue: rgba(17, 50, 90, 1);
    --navy: rgba(29, 40, 124, 1);
    --orange: rgba(255, 159, 10, 1);
    --orange100: rgba(255, 159, 10, 0.1);
    --orange200: rgba(255, 159, 10, 0.2);
    --orange300: rgba(255, 159, 10, 0.3);
    --orange400: rgba(255, 159, 10, 0.4);
    --orange500: rgba(255, 159, 10, 0.5);
    --orange980: rgba(255, 159, 10, 0.98);
    --red: rgba(253, 46, 105, 1);
    --red50: rgba(253, 46, 105, 0.05);
    --red100: rgba(253, 46, 105, 0.1);
    --red200: rgba(253, 46, 105, 0.2);
    --red300: rgba(253, 46, 105, 0.3);
    --red400: rgba(253, 46, 105, 0.4);
    --red500: rgba(253, 46, 105, 0.5);
    --red600: rgba(253, 46, 105, 0.6);
    --red700: rgba(253, 46, 105, 0.7);
    --red800: rgba(253, 46, 105, 0.8);
    --red900: rgba(253, 46, 105, 0.9);
    --purple: rgba(151, 95, 254, 1);
    --purple100: rgba(151, 95, 254, 0.1);
    --white: rgba(255, 255, 255, 1);
    --white600: rgba(255, 255, 255, 0.6);
    --white900: rgba(255, 255, 255, 0.9);
    --black: rgba(34, 34, 34, 1);
    --teal: rgba(10, 219, 143, 1);
    --teal900: rgba(10, 219, 143, 0.9);
    --tailwind: rgba(0, 188, 255, 1);
    --react: rgba(87, 196, 220, 1);
  }
`;

export const colors = {
  gray: "var(--gray)",
  gray20: "var(--gray20)",
  gray50: "var(--gray50)",
  gray100: "var(--gray100)",
  gray200: "var(--gray200)",
  gray300: "var(--gray300)",
  gray400: "var(--gray400)",
  gray500: "var(--gray500)",
  gray600: "var(--gray600)",
  gray700: "var(--gray700)",
  gray800: "var(--gray800)",
  gray900: "var(--gray900)",
  brightGray: "var(--brightGray)",
  blue: "var(--blue)",
  blue60: "var(--blue60)",
  blue100: "var(--blue100)",
  blue200: "var(--blue200)",
  blue300: "var(--blue300)",
  blue400: "var(--blue400)",
  blue500: "var(--blue500)",
  blue980: "var(--blue980)",
  darkBlue: "var(--dark-blue)",
  navy: "var(--navy)",
  orange: "var(--orange)",
  orange100: "var(--orange100)",
  orange200: "var(--orange200)",
  orange300: "var(--orange300)",
  orange400: "var(--orange400)",
  orange500: "var(--orange500)",
  orange980: "var(--orange980)",
  red: "var(--red)",
  red50: "var(--red50)",
  red100: "var(--red100)",
  red200: "var(--red200)",
  red300: "var(--red300)",
  red400: "var(--red400)",
  red500: "var(--red500)",
  red600: "var(--red600)",
  red700: "var(--red700)",
  red800: "var(--red800)",
  red900: "var(--red900)",
  purple: "var(--purple)",
  purple100: "var(--purple100)",
  white: "var(--white)",
  white600: "var(--white600)",
  white900: "var(--white900)",
  black: "var(--black)",
  teal: "var(--teal)",
  teal900: "var(--teal900)",
  tailwind: "var(--tailwind)",
  react: "var(--react)",
};

export type Colors = keyof typeof colors;
