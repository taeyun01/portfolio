import Flex from "@components/shared/Flex";
import ListRow from "@components/shared/ListRow";
import Text from "@components/shared/Text";
import styled from "@emotion/styled";
import scrollIntoView from "@utils/scrollIntoView";
import { SCROLL_ID } from "@constants/index";
import { colors } from "@src/styles/colorPalette";
import Badge from "@src/components/shared/Badge";
import Spacing from "@src/components/shared/Spacing";

const MyProfile = ({
  backgroundColor = colors.white,
}: {
  backgroundColor?: string;
}) => {
  return (
    <MyProfileContainerStyle
      id="my-profile"
      backgroundColor={backgroundColor}
      css={{
        "@media (max-width: 480px)": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Flex
        direction="column"
        justify="center"
        align="center"
        style={{
          // border: "3px solid red",
          width: "100%",
        }}
      >
        <Flex
          css={{
            // border: "3px solid green",
            width: "100%",
            alignItems: "center",
            // flexDirection: "column",

            "@media (max-width: 768px)": {
              flexDirection: "column",
            },
          }}
        >
          <div
            css={{
              width: "100%",
              padding: "8px 24px",
              "@media (max-width: 480px)": {
                marginTop: "-80px",
                width: "100%",
              },
            }}
          >
            <PortFolioSVG />
          </div>
          <div
            className="profile-container"
            css={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              width: "52%",

              "@media (max-width: 768px)": {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                "& span": {
                  fontSize: "14px",
                },
                "& .profile-image": {
                  fontSize: "40px",
                },
              },

              "@media (max-width: 480px)": {
                flexDirection: "column",
              },
            }}
          >
            <ListRow
              left={
                <div
                  style={
                    {
                      // border: "1px solid red",
                    }
                  }
                >
                  <ProfileImage
                    src="https://velog.velcdn.com/images/taeyun01/post/335358db-5de6-4f46-abc4-ab2f157eaa59/image.png"
                    alt="Profile"
                    css={{
                      "@media (max-width: 768px)": {
                        width: "80px",
                      },
                    }}
                  />
                </div>
              }
              contents={
                <Flex
                  direction="column"
                  style={
                    {
                      // border: "1px solid blue",
                    }
                  }
                >
                  <Text typography="t3" color="white">
                    안녕하세요.
                  </Text>
                  <Text typography="t3" bold color="white">
                    프론트엔드 개발자
                  </Text>
                  <Text typography="t3" color="white">
                    유태윤입니다.
                  </Text>
                </Flex>
              }
            />

            <Spacing size={20} />

            <ListRow
              contents={
                <Flex
                  direction="column"
                  gap={12}
                  css={{
                    "@media (max-width: 480px)": {
                      flexDirection: "row",
                    },
                  }}
                >
                  <div>
                    <Badge
                      as="span"
                      label="010-2830-9126"
                      typography="t5"
                      borderColor={colors.white600}
                    />
                  </div>
                  <div>
                    <Badge
                      as="span"
                      label="ew20@naver.com"
                      typography="t5"
                      borderColor={colors.white600}
                    />
                  </div>
                </Flex>
              }
            />
          </div>
        </Flex>

        <div
          css={{
            position: "absolute",
            bottom: "50px",
            paddingTop: "150px",
            "@media (max-width: 768px)": {
              paddingTop: "100px",
            },
            "@media (max-width: 480px)": {
              "& svg": {
                width: "25px",
                height: "25px",
              },
            },
          }}
        >
          <ArrowDownIcon onClick={() => scrollIntoView(SCROLL_ID.PROJECTS)} />
        </div>
      </Flex>
    </MyProfileContainerStyle>
  );
};

const MyProfileContainerStyle = styled.section<{
  backgroundColor: string;
}>`
  display: flex;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  // border: 1px solid blue;
  width: 100%;
  height: 100vh;
`;

const ProfileImage = styled.img`
  width: 120px;
  // font-size: 85px;
  // border-radius: 50%;
  // object-fit: cover;
`;

const PortFolioSVG = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="280"
        // viewBox="0 0 773 288"
      >
        <image
          id="Rectangle_4"
          data-name="Rectangle 4"
          width="100%"
          height="100%"
          xlinkHref="data:img/png;base64,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"
        />
      </svg>
    </>
  );
};

const ArrowDownIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <svg
        onClick={onClick}
        viewBox="0 0 256 256"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="36px"
        cursor="pointer"
        fill={colors.white600}
      >
        <path d="M128,169.174c-1.637,0-3.276-0.625-4.525-1.875l-56.747-56.747c-2.5-2.499-2.5-6.552,0-9.05c2.497-2.5,6.553-2.5,9.05,0  L128,153.722l52.223-52.22c2.496-2.5,6.553-2.5,9.049,0c2.5,2.499,2.5,6.552,0,9.05l-56.746,56.747  C131.277,168.549,129.638,169.174,128,169.174z M256,128C256,57.42,198.58,0,128,0C57.42,0,0,57.42,0,128c0,70.58,57.42,128,128,128  C198.58,256,256,198.58,256,128z M243.2,128c0,63.521-51.679,115.2-115.2,115.2c-63.522,0-115.2-51.679-115.2-115.2  C12.8,64.478,64.478,12.8,128,12.8C191.521,12.8,243.2,64.478,243.2,128z" />
      </svg>
    </>
  );
};

export default MyProfile;
