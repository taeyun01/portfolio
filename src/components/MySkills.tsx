import Flex from "@components/shared/Flex";
import Text from "@components/shared/Text";
import styled from "@emotion/styled";
import { colors } from "@src/styles/colorPalette";

const MySkills = ({
  backgroundColor = colors.white,
}: {
  backgroundColor?: string;
}) => {
  return (
    <MySkillsContainerStyle id="my-skills" backgroundColor={backgroundColor}>
      <Flex direction="column" align="center" gap={14}>
        <Text bold color="white">
          My Skills
        </Text>
        <Flex justify="center" gap={14} wrap="wrap" css={{ width: "100%" }}>
          {Skills.map((skill) => (
            <Flex key={skill.name} direction="column" align="center" gap={14}>
              <img src={skill.icon} alt={skill.name} width={80} height={50} />
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
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg",
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
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
  },
  {
    name: "Emotion",
    icon: "https://jjunohj.github.io/assets/images/Emotion.png",
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

const MySkillsContainerStyle = styled.section<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 80px 0;
`;

export default MySkills;
