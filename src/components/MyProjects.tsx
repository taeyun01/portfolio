import Flex from "@components/shared/Flex";
import Text from "@components/shared/Text";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Badge from "@src/components/shared/Badge";
import { colors } from "@src/styles/colorPalette";

const MyProjects = () => {
  return (
    <MyProjectsContainerStyle id="my-projects">
      <Flex direction="column" align="center" gap={14}>
        <Text bold color="white">
          My Projects
        </Text>
        <Flex
          as="ul"
          justify="center"
          gap={14}
          wrap="wrap"
          css={{ width: "100%" }}
        >
          {projectList.map((project) => (
            <a href={project.link}>
              <Flex
                key={project.title}
                direction="column"
                align="center"
                as="li"
                gap={14}
              >
                <Text typography="t6" bold color="gray800">
                  {project.title}
                </Text>
                <img
                  src={project.image}
                  alt={project.title}
                  width={270}
                  css={projectItemStyle}
                />

                <Flex gap={10}>
                  {project.badge.map((badge) => (
                    <Badge
                      key={badge.label}
                      label={badge.label}
                      backgroundColor={badge.backgroundColor}
                    />
                  ))}
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
    badge: [
      { label: "React", backgroundColor: colors.blue500 },
      {
        label: "TypeScript",
        backgroundColor: colors.blue980,
      },
      {
        label: "emotion",
        backgroundColor: colors.red,
      },
      {
        label: "firebase",
        backgroundColor: colors.orange,
      },
    ],
  },
  {
    title: "블러드폴리오",
    image:
      "https://sojoong.joins.com/wp-content/uploads/sites/4/2024/12/01.jpg",
    link: "https://bloodfolio.vercel.app",
    badge: [
      { label: "React", backgroundColor: colors.blue500 },
      {
        label: "TypeScript",
        backgroundColor: colors.blue980,
      },
      {
        label: "emotion",
        backgroundColor: colors.red,
      },
      {
        label: "supabase",
        backgroundColor: colors.teal,
      },
    ],
  },
  {
    title: "워크커넥트",
    image:
      "https://sojoong.joins.com/wp-content/uploads/sites/4/2024/12/01.jpg",
    link: "https://work-connect-plum.vercel.app",
    badge: [
      { label: "Next.js", backgroundColor: colors.black },
      {
        label: "TypeScript",
        backgroundColor: colors.blue980,
      },
      {
        label: "emotion",
        backgroundColor: colors.red,
      },
      {
        label: "firebase",
        backgroundColor: colors.orange,
      },
    ],
  },
  {
    title: "자산관리",
    image:
      "https://sojoong.joins.com/wp-content/uploads/sites/4/2024/12/01.jpg",
    link: "https://next13-project-mu.vercel.app/",
    badge: [
      { label: "Next.js", backgroundColor: colors.black },
      {
        label: "TypeScript",
        backgroundColor: colors.blue980,
      },
      {
        label: "emotion",
        backgroundColor: colors.red,
      },
      {
        label: "firebase",
        backgroundColor: colors.orange,
      },
    ],
  },
];

const MyProjectsContainerStyle = styled.section`
  background-color: ${colors.blue500};
  padding: 80px 0;
`;

const projectItemStyle = css`
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export default MyProjects;
