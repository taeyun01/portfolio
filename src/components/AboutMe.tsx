import Flex from "@components/shared/Flex";
import Text from "@components/shared/Text";
import styled from "@emotion/styled";
import { colors } from "@src/styles/colorPalette";

const AboutMe = ({
  backgroundColor = colors.white,
}: {
  backgroundColor?: string;
}) => {
  return (
    <AboutMeContainerStyle
      id="about-me"
      backgroundColor={backgroundColor}
      css={{
        "@media (max-width: 480px)": {
          padding: "50px 24px",
        },
      }}
    >
      {/* <Text
        typography="t3"
        color="black"
        bold
        css={{
          "@media (max-width: 480px)": {
            fontSize: "20px",
          },
        }}
      >
        Strong Points
      </Text> */}
      {/* <Text
        typography="t5"
        color="white"
        bold
        css={{
          marginBottom: "18px",
          "@media (max-width: 480px)": {
            fontSize: "14px",
          },
        }}
      >
        저의 장점을 소개합니다.
      </Text> */}
      <Flex
        direction="column"
        css={{
          backgroundColor: colors.white,
          padding: "40px",
          borderRadius: "16px",
          margin: "0 24px",
          width: "100%",
          "@media (max-width: 480px)": {
            padding: "20px 20px",
            "& span": {
              fontSize: "14px",
            },
          },
        }}
        gap={8}
      >
        <Text
          typography="t4"
          color="darkBlue"
          bold
          style={{
            marginBottom: "8px",
          }}
        >
          끈기만은 자부할 수 있습니다.
        </Text>
        <Text typography="t5" color="gray500">
          비전공자로서, 개발 업무를 경험해본 시간은 상대적으로 적을 수 있습니다.
        </Text>
        <Text typography="t5" color="gray500">
          하지만 신입 개발자로서의 열정만큼은 업무를 성실히 진행함에 있어 절대
          모자라지 않습니다.
        </Text>
        <Text typography="t5" color="gray500">
          마음 먹은건 우직하게 밀고 나가는 끈기 있는 개발자 입니다.
        </Text>
        <Text typography="t5" color="gray500">
          나중 된 자가 먼저 되는 날까지, 변하지 않는 성실함과 끈기로 앞으로
          나아가겠습니다.
        </Text>
      </Flex>
    </AboutMeContainerStyle>
  );
};

const AboutMeContainerStyle = styled.section<{
  backgroundColor: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  padding: 80px 24px;
`;

export default AboutMe;
