import Flex from "@components/shared/Flex";
import Text from "@components/shared/Text";
import styled from "@emotion/styled";
import Spacing from "@src/components/shared/Spacing";
import { colors } from "@src/styles/colorPalette";

const MySkills = ({
  backgroundColor = colors.white,
}: {
  backgroundColor?: string;
}) => {
  return (
    <MySkillsContainerStyle
      id="my-skills"
      backgroundColor={backgroundColor}
      css={{
        "@media (max-width: 480px)": {
          padding: "50px 24px",
        },
      }}
    >
      <Flex
        direction="column"
        align="center"
        gap={2}
        // style={{ padding: "0 24px" }}
      >
        {/* <Text
          typography="t3"
          color="black"
          bold
          css={{
            "@media (max-width: 480px)": {
              fontSize: "20px",
            },
          }}
        >
          Tech Stack
        </Text> */}
        <Text
          typography="t5"
          color="black"
          bold
          css={{
            marginBottom: "18px",
            "@media (max-width: 480px)": {
              fontSize: "14px",
            },
          }}
        >
          실제 프로젝트에 적용시켜 본 기술 스택들입니다.
        </Text>
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
              <img
                src={skill.icon}
                alt={skill.name}
                width={80}
                height={50}
                css={{
                  "@media (max-width: 480px)": {
                    width: "70px",
                    height: "30px",
                  },
                }}
              />
              <Spacing size={16} backgroundColor="white" />
              <Spacing
                size={0.9}
                backgroundColor="black"
                css={{
                  width: "115%",
                }}
              />
              <Spacing size={4} backgroundColor="white" />
              <Text
                typography="t7"
                bold
                color="gray800"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "75px", // 필요에 따라 최대 너비 조정
                }}
              >
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
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  },
  {
    name: "Zustand",
    icon: "https://blog.kakaocdn.net/dn/bmRo9Z/btsHznSxxu8/hi3wOnUqtTx0A6yDzfNi7K/img.png",
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
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;

  padding: 80px 8px;
`;

export default MySkills;
