import styled from "@emotion/styled";
import { colors } from "@styles/colorPalette";
import Text from "./Text";

interface BadgeProps {
  label: string;
  backgroundColor?: string;
  borderColor?: string;
  as?: "div" | "span";
  typography?: "t7" | "t6" | "t5" | "t4" | "t3" | "t2" | "t1";
}

const Badge = ({
  label,
  backgroundColor = colors.black,
  borderColor = colors.white,
  as = "div",
  typography = "t7",
}: BadgeProps) => {
  return (
    <Container
      as={as}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    >
      <Text bold typography={typography} color="white">
        {label}
      </Text>
    </Container>
  );
};

const Container = styled.div<{ backgroundColor: string; borderColor: string }>`
  padding: 2px 8px;
  border-radius: 12px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  ${({ borderColor }) => borderColor && `border: 1px solid ${borderColor};`}
`;

export default Badge;
