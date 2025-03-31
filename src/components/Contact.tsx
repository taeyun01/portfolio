import Flex from "@components/shared/Flex";
import ListRow from "@components/shared/ListRow";
import Text from "@components/shared/Text";
import styled from "@emotion/styled";
import { colors } from "@src/styles/colorPalette";

const Contact = () => {
  return (
    <ContactContainerStyle id="contact">
      <Flex direction="column" align="center">
        <ListRow
          contents={
            <Flex>
              <ListRow.ListRowTexts
                titleCenter
                subTitleCenter
                title="Contact"
                subTitle={
                  <Flex direction="column" gap={10}>
                    <Text typography="t6">연락처: 010-1234-5678</Text>
                    <Text typography="t6">이메일: test@gmail.com</Text>
                    <Text typography="t6">
                      <a href="https://github.com/taeyun01">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                          alt="github"
                          width={40}
                        />
                      </a>
                    </Text>
                  </Flex>
                }
              />
            </Flex>
          }
        />
      </Flex>
    </ContactContainerStyle>
  );
};

const ContactContainerStyle = styled.section`
  background-color: ${colors.blue500};
  padding: 80px 0;
`;

export default Contact;
