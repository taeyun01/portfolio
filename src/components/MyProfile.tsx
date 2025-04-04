import Button from "@components/shared/Button";
import Flex from "@components/shared/Flex";
import ListRow from "@components/shared/ListRow";
import Text from "@components/shared/Text";
import styled from "@emotion/styled";
import scrollIntoView from "@utils/scrollIntoView";
import { SCROLL_ID } from "@constants/index";
import { colors } from "@src/styles/colorPalette";

const MyProfile = ({
  backgroundColor = colors.white,
}: {
  backgroundColor?: string;
}) => {
  return (
    <MyProfileContainerStyle id="my-profile" backgroundColor={backgroundColor}>
      <Flex direction="column" align="center">
        <ListRow
          contents={
            <Flex>
              <ListRow.ListRowTexts
                titleCenter
                subTitleCenter
                title={
                  <Flex direction="column" align="center" gap={14}>
                    <Text color="white">My Profile</Text>
                    <ProfileImage
                      src="https://sojoong.joins.com/wp-content/uploads/sites/4/2024/12/01.jpg"
                      alt="profile"
                    />
                  </Flex>
                }
                subTitle={
                  <Flex direction="column" gap={10}>
                    <Text typography="t6">
                      안녕하세요. 프론트엔드 개발자 짱구입니다.
                    </Text>
                    <Button
                      weak
                      onClick={() => scrollIntoView(SCROLL_ID.SKILLS)}
                    >
                      VIEW MORE
                    </Button>
                  </Flex>
                }
                spacing={20}
              />
            </Flex>
          }
        />
      </Flex>
    </MyProfileContainerStyle>
  );
};

const MyProfileContainerStyle = styled.section<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 80px 0;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

export default MyProfile;
