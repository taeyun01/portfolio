import Flex from "@components/shared/Flex";
import ListRow from "@components/shared/ListRow";
import Text from "@components/shared/Text";

const Contact = () => {
  return (
    <section>
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
                      <a href="https://github.com/taeyun01">GitHub(아이콘)</a>
                    </Text>
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

export default Contact;
