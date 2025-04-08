import Flex from "@components/shared/Flex";
import Text from "@components/shared/Text";
import styled from "@emotion/styled";
import useViewPortHeight from "@src/components/shared/useViewPortHeight";
import { colors } from "@src/styles/colorPalette";

const AboutMe = ({
  backgroundColor = colors.white,
}: {
  backgroundColor?: string;
}) => {
  const viewPortHeight = useViewPortHeight();

  return (
    <AboutMeContainerStyle
      id="about-me"
      backgroundColor={backgroundColor}
      viewPortHeight={viewPortHeight}
    >
      <Flex direction="column" align="center">
        <Text typography="t6">내 소개</Text>
      </Flex>
    </AboutMeContainerStyle>
  );
};

const AboutMeContainerStyle = styled.section<{
  backgroundColor: string;
  viewPortHeight: number;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  // border: 4px solid red;
  width: 100%;
  height: ${({ viewPortHeight }) => viewPortHeight}px;

  background-color: ${colors.gray100};
`;

export default AboutMe;
