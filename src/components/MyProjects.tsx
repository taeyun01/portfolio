import Flex from "@components/shared/Flex";
import Text from "@components/shared/Text";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Badge from "@src/components/shared/Badge";
import useViewPortHeight from "@src/components/shared/useViewPortHeight";
import { colors } from "@src/styles/colorPalette";

const MyProjects = ({
  backgroundColor = colors.white,
}: {
  backgroundColor?: string;
}) => {
  const viewPortHeight = useViewPortHeight();

  console.log("viewPortHeight", viewPortHeight);

  return (
    <MyProjectsContainerStyle
      id="my-projects"
      backgroundColor={backgroundColor}
      viewPortHeight={viewPortHeight}
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
                  width="100%"
                  css={projectItemStyle}
                />

                <Flex direction="column" gap={4} style={{ padding: "16px" }}>
                  <Text typography="t5" bold>
                    {project.title}
                  </Text>
                  <Text typography="t6" color="gray">
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
      "https://sojoong.joins.com/wp-content/uploads/sites/4/2024/12/01.jpg",
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
      "https://sojoong.joins.com/wp-content/uploads/sites/4/2024/12/01.jpg",
    link: "https://bloodfolio.vercel.app",
    description: "포트폴리오 공유 서비스",
    badge: [
      { label: "React", backgroundColor: colors.react },
      {
        label: "TypeScript",
        backgroundColor: colors.blue980,
      },
      {
        label: "styled-components",
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
      "https://sojoong.joins.com/wp-content/uploads/sites/4/2024/12/01.jpg",
    link: "https://work-connect-plum.vercel.app",
    description: "워크스페이스 커뮤니케이션 서비스",
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
        label: "Firebase",
        backgroundColor: colors.orange,
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
  viewPortHeight: number;
}>`
  //TODO: 창 너비를 완전 줄였을 때 카드 요소들이 현재 뷰포트 높이를 벗어나는 현상 해결하기

  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  height: ${({ viewPortHeight }) => viewPortHeight}px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 24px;
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
`;

export default MyProjects;
