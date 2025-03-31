import Flex from "@components/shared/Flex";
import ListRow from "@components/shared/ListRow";
import Text from "@components/shared/Text";

const AboutMe = () => {
  return (
    <section>
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
    </section>
  );
};

export default AboutMe;
