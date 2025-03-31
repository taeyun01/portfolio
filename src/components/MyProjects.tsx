import Flex from "@components/shared/Flex";
import ListRow from "@components/shared/ListRow";
import Text from "@components/shared/Text";

const MyProjects = () => {
  return (
    <section>
      <Flex direction="column" align="center">
        <ListRow
          contents={
            <Flex>
              <ListRow.ListRowTexts
                titleCenter
                subTitleCenter
                title="My Projects"
                subTitle={
                  <Flex as="ul" gap={10}>
                    {projectList.map((project) => (
                      <li key={project.title}>
                        <a href={project.link}>
                          <Flex direction="column" align="center">
                            <img
                              src={project.image}
                              alt="booking"
                              width={120}
                              height={100}
                            />
                            <Text typography="t6">{project.title}</Text>
                          </Flex>
                        </a>
                      </li>
                    ))}
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

const projectList = [
  {
    title: "Booking",
    image:
      "https://sojoong.joins.com/wp-content/uploads/sites/4/2024/12/01.jpg",
    link: "https://booking-seven-chi.vercel.app",
  },
  {
    title: "블러드폴리오",
    image:
      "https://sojoong.joins.com/wp-content/uploads/sites/4/2024/12/01.jpg",
    link: "https://bloodfolio.vercel.app",
  },
  {
    title: "워크커넥트",
    image:
      "https://sojoong.joins.com/wp-content/uploads/sites/4/2024/12/01.jpg",
    link: "https://work-connect-plum.vercel.app",
  },
  {
    title: "자산관리",
    image:
      "https://sojoong.joins.com/wp-content/uploads/sites/4/2024/12/01.jpg",
    link: "https://next13-project-mu.vercel.app/",
  },
];

// const projectItemStyle = css`
//   border: 1px solid ${colors.blue};
// `;

export default MyProjects;
