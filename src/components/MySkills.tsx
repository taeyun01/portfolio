import Flex from "@components/shared/Flex";
import Text from "@components/shared/Text";
import styled from "@emotion/styled";
import Spacing from "@src/components/shared/Spacing";
import { colors } from "@src/styles/colorPalette";
import getViewPortHeight from "@src/utils/viewPort";
import { useEffect, useState } from "react";

const MySkills = ({
  backgroundColor = colors.white,
}: {
  backgroundColor?: string;
}) => {
  const [viewPortHeight, setViewPortHeight] = useState(0);

  useEffect(() => {
    // const viewPort = getViewPortHeight();
    // setViewPortHeight(viewPort);

    // 뷰포트 높이 실시간 업데이트(창 높이가 변경될 때마다)
    const updateViewPortHeight = () => {
      const viewPort = getViewPortHeight();
      setViewPortHeight(viewPort);
    };

    updateViewPortHeight(); // 초기 높이 설정

    window.addEventListener("resize", updateViewPortHeight);

    return () => {
      window.removeEventListener("resize", updateViewPortHeight);
    };
  }, []);

  return (
    <MySkillsContainerStyle
      id="my-skills"
      backgroundColor={backgroundColor}
      viewPortHeight={viewPortHeight}
    >
      <Flex
        direction="column"
        align="center"
        gap={14}
        style={{ padding: "0 24px" }}
      >
        <Flex justify="center" gap={14} wrap="wrap" css={{ width: "100%" }}>
          {Skills.map((skill) => (
            <Flex
              key={skill.name}
              direction="column"
              align="center"
              style={{
                borderRadius: "10px",
                padding: "18px 24px",
                backgroundColor: colors.white,
              }}
            >
              <img src={skill.icon} alt={skill.name} width={80} height={50} />
              <Spacing size={16} backgroundColor="white" />
              <Spacing
                size={0.9}
                backgroundColor="black"
                style={{
                  width: "115%",
                }}
              />
              <Spacing size={4} backgroundColor="white" />
              <Text typography="t7" bold color="gray800">
                {skill.name}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </MySkillsContainerStyle>
  );
};

const Skills = [
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "React Query",
    icon: "https://velog.velcdn.com/images/taeyun01/post/c04a3cd0-6edb-4096-a3bd-35f98f385f21/image.png",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Emotion",
    icon: "https://jjunohj.github.io/assets/images/Emotion.png",
  },
  {
    name: "Styled-components",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHvye41PpJGLJGk8cm7mdAPOWrfQOasyewx5G3MAkg-D0bJhtkvPLRjgY8CYN2JgkR_Q&usqp=CAU",
  },
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg",
  },
  {
    name: "Notion",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg",
  },
];

const MySkillsContainerStyle = styled.section<{
  backgroundColor: string;
  viewPortHeight: number;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  height: ${({ viewPortHeight }) => viewPortHeight}px;
`;

export default MySkills;
