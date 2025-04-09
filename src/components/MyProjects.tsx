import Flex from "@components/shared/Flex";
import Text from "@components/shared/Text";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Badge from "@src/components/shared/Badge";
import { colors } from "@src/styles/colorPalette";

const MyProjects = ({
  backgroundColor = colors.white,
}: {
  backgroundColor?: string;
}) => {
  return (
    <MyProjectsContainerStyle
      id="my-projects"
      backgroundColor={backgroundColor}
      css={{
        "@media (max-width: 480px)": {
          padding: "60px 12px",
        },
      }}
    >
      <Flex direction="column" align="center" gap={14}>
        <Flex as="ul" justify="center" gap={12} wrap="wrap">
          {projectList.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              <Flex direction="column" as="li" gap={0} css={cardStyle}>
                <img
                  src={project.image}
                  alt={project.title}
                  css={projectItemStyle}
                />

                <Flex direction="column" gap={4} style={{ padding: "16px" }}>
                  <Text typography="t5" bold>
                    {project.title}
                  </Text>
                  <Text typography="t7" color="gray500">
                    {project.description}
                  </Text>
                  <Flex gap={3} wrap="wrap" css={{ width: "100%" }}>
                    {project.badge.map((badge) => (
                      <Badge
                        key={badge.label}
                        label={badge.label}
                        backgroundColor={badge.backgroundColor}
                        typography="t7"
                      />
                    ))}
                  </Flex>
                </Flex>
              </Flex>
            </a>
          ))}
        </Flex>
      </Flex>
    </MyProjectsContainerStyle>
  );
};

const projectList = [
  {
    title: "Booking",
    image:
      "https://cdn4.iconfinder.com/data/icons/general-office/91/General_Office_31-64.png",
    link: "https://booking-seven-chi.vercel.app",
    description: "일본 호텔 예약 서비스",
    badge: [
      { label: "React", backgroundColor: colors.react },
      {
        label: "TypeScript",
        backgroundColor: colors.blue980,
      },
      {
        label: "Emotion",
        backgroundColor: colors.red,
      },
      {
        label: "Firebase",
        backgroundColor: colors.orange,
      },
    ],
  },
  {
    title: "블러드폴리오",
    image:
      "https://velog.velcdn.com/images/taeyun01/post/a5ee9e62-5ed1-4f73-8f89-43d461859e71/image.png",
    link: "https://bloodfolio.vercel.app",
    description: "포트폴리오 공유 서비스",
    badge: [
      { label: "React", backgroundColor: colors.react },
      {
        label: "TypeScript",
        backgroundColor: colors.blue980,
      },
      {
        label: "Styled-components",
        backgroundColor: colors.red,
      },
      {
        label: "Supabase",
        backgroundColor: colors.teal,
      },
    ],
  },
  {
    title: "워크커넥트",
    image:
      "https://velog.velcdn.com/images/taeyun01/post/89758ae8-cf25-4ddf-b08e-c2ae7bcabc28/image.png",
    link: "https://work-connect-plum.vercel.app",
    description: "통합 워크스페이스 서비스 (협업 툴)",
    badge: [
      { label: "Next.js", backgroundColor: colors.black },
      {
        label: "TypeScript",
        backgroundColor: colors.blue980,
      },
      {
        label: "Tailwind CSS",
        backgroundColor: colors.tailwind,
      },
      {
        label: "Supabase",
        backgroundColor: colors.teal,
      },
    ],
  },
  {
    title: "자산관리",
    image:
      "https://sojoong.joins.com/wp-content/uploads/sites/4/2024/12/01.jpg",
    link: "https://next13-project-mu.vercel.app/",
    description: "내 자산을 관리하는 서비스",
    badge: [
      { label: "Next.js", backgroundColor: colors.black },
      {
        label: "TypeScript",
        backgroundColor: colors.blue980,
      },
      {
        label: "Emotion",
        backgroundColor: colors.red,
      },
      {
        label: "Firebase",
        backgroundColor: colors.orange,
      },
    ],
  },
];

const MyProjectsContainerStyle = styled.section<{
  backgroundColor: string;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 120px 24px;
`;

const cardStyle = css`
  width: 300px;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
`;

const projectItemStyle = css`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
  object-fit: none; // fill, cover, contain, none, scale-down

  border-bottom: 1px solid ${colors.gray300};

  width: 100%;
  height: 180px;
`;

export default MyProjects;
