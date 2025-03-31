import styled from "@emotion/styled";
import { colors } from "@styles/colorPalette";
import Text from "./Text";

interface BadgeProps {
  label: string;
  backgroundColor?: string;
}

const Badge = ({ label, backgroundColor = colors.black }: BadgeProps) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <Text bold typography="t7" color="white">
        {label}
      </Text>
    </Container>
  );
};

const Container = styled.div<{ backgroundColor: string }>`
  padding: 2px 8px;
  border-radius: 12px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export default Badge;
