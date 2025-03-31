import Button from "@components/shared/Button";
import Flex from "@components/shared/Flex";
import ListRow from "@components/shared/ListRow";
import Text from "@components/shared/Text";
import styled from "@emotion/styled";

const MyProfile = () => {
  return (
    <section>
      <Flex direction="column" align="center">
        <ListRow
          contents={
            <Flex>
              <ListRow.ListRowTexts
                titleCenter
                subTitleCenter
                title={
                  <ProfileImage
                    src="https://sojoong.joins.com/wp-content/uploads/sites/4/2024/12/01.jpg"
                    alt="profile"
                  />
                }
                subTitle={
                  <Flex direction="column" gap={10}>
                    <Text typography="t6">
                      안녕하세요 프론트엔드 개발자 짱구입니다.
                    </Text>
                    <Button weak>Contact</Button>
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

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export default MyProfile;
