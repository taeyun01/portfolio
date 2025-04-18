import { css } from "@emotion/react";

// 타이포그래피 스타일 설정
export const typographyMap = {
  t1: css`
    font-size: 30px;
    line-height: 1.35;
  `,
  t2: css`
    font-size: 26px;
    line-height: 1.34;
  `,
  t3: css`
    font-size: 22px;
    line-height: 1.4;
  `,
  t4: css`
    font-size: 20px;
    line-height: 1.45;
  `,
  t5: css`
    font-size: 18px;
    line-height: 1.5;
  `,
  t6: css`
    font-size: 15px;
    line-height: 1.5;
  `,
  t7: css`
    font-size: 12px;
    line-height: 1.5;
  `,
};

// typographyMap 타입 지정
export type Typography = keyof typeof typographyMap;
