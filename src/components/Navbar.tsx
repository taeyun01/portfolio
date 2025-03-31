import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Text from "@src/components/shared/Text";
import { SCROLL_ID } from "@src/constants";
import { colors } from "@src/styles/colorPalette";
import scrollIntoView from "@src/utils/scrollIntoView";

const Navbar = () => {
  return (
    <NavbarContainer id="navbar">
      <Text css={navTitleStyle} bold>
        TAEYUN
      </Text>
      <ul css={navItemWrapperStyle}>
        {NavbarItem.map((item) => (
          <li key={item.id}>
            <Text typography="t6" css={navItemListStyle}>
              <a onClick={() => scrollIntoView(item.id)}>{item.name}</a>
            </Text>
          </li>
        ))}
      </ul>
    </NavbarContainer>
  );
};

const NavbarItem = [
  {
    id: SCROLL_ID.PROFILE,
    name: "Home",
  },
  {
    id: SCROLL_ID.SKILLS,
    name: "Skills",
  },
  {
    id: SCROLL_ID.PROJECTS,
    name: "Projects",
  },
  {
    id: SCROLL_ID.ABOUT_ME,
    name: "About",
  },
  {
    id: SCROLL_ID.CONTACT,
    name: "Contact",
  },
];

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background-color: ${colors.blue980};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const navTitleStyle = css`
  color: ${colors.white};
`;

const navItemWrapperStyle = css`
  display: flex;
  list-style: none;
  gap: 25px;
`;

const navItemListStyle = css`
  color: ${colors.white};
  cursor: pointer;
`;

export default Navbar;
