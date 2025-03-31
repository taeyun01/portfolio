import Flex from "@components/shared/Flex";
import ListRow from "@components/shared/ListRow";
import Text from "@components/shared/Text";

const MySkills = () => {
  return (
    <section>
      <Flex direction="column" align="center">
        <ListRow
          contents={
            <Flex>
              <ListRow.ListRowTexts
                titleCenter
                subTitleCenter
                title="My Skills"
                subTitle={
                  <Flex direction="column" gap={10}>
                    <Text typography="t6">
                      React, TypeScript, Tailwind CSS 등등 (아이콘 찾아서 넣기)
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

export default MySkills;
