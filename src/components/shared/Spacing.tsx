import { Colors, colors } from "@styles/colorPalette";
import styled from "@emotion/styled";

interface SpacingProps {
  size: number;
  direction?: "vertical" | "horizontal";
  backgroundColor?: Colors; // 배경색 확장
  marginVertical?: number;
  marginHorizontal?: number;
}

// <Spacing size={16} /> 아무런 옵션도 주지 않으면 세로 여백 16px

const Spacing = styled.div<SpacingProps>`
  ${({ size, direction = "vertical" }) =>
    direction === "vertical"
      ? `
      height: ${size}px;
    `
      : `
    width: ${size}px;
    `}

  ${({ marginVertical }) => marginVertical && `margin: ${marginVertical}px 0;`}
  ${({ marginHorizontal }) =>
    marginHorizontal && `margin: 0 ${marginHorizontal}px;`}

  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${colors[backgroundColor]};`}
`;

export default Spacing;
