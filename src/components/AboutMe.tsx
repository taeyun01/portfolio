import Flex from "@components/shared/Flex";
import ListRow from "@components/shared/ListRow";
import Text from "@components/shared/Text";
import styled from "@emotion/styled";
import { colors } from "@src/styles/colorPalette";

const AboutMe = () => {
  return (
    <AboutMeContainerStyle id="about-me">
      <Flex direction="column" align="center">
        <ListRow
          contents={
            <Flex>
              <ListRow.ListRowTexts
                titleCenter
                subTitleCenter
                title="About Me"
                subTitle={
                  <Flex direction="column" gap={10}>
                    <Text typography="t6">나를 소개하는 문구 및 어필 문구</Text>
                  </Flex>
                }
              />
            </Flex>
          }
        />
      </Flex>
    </AboutMeContainerStyle>
  );
};

const AboutMeContainerStyle = styled.section`
  background-color: ${colors.blue300};
  padding: 80px 0;
`;

export default AboutMe;
