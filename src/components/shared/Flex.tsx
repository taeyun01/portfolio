import styled from "@emotion/styled";
import { CSSProperties } from "react";

interface FlexProps {
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  direction?: CSSProperties["flexDirection"];
  gap?: CSSProperties["gap"];
  wrap?: CSSProperties["flexWrap"];
}

const Flex = styled.div<FlexProps>(
  ({ align, justify, direction, gap, wrap }) => ({
    display: "flex",
    alignItems: align,
    justifyContent: justify,
    flexDirection: direction,
    flexWrap: wrap,
    gap: gap,
  })
);

export default Flex;
