import { useEffect, useState } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Text from "@src/components/shared/Text";
import { SCROLL_ID } from "@src/constants";
import { colors } from "@src/styles/colorPalette";
import scrollIntoView from "@src/utils/scrollIntoView";
import HamburgerIcon from "@src/components/shared/Hamburger";

const Navbar = ({
  backgroundColor = colors.white,
}: {
  backgroundColor?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const getNavBarHeight = (): number => {
      const navbar = document.querySelector("nav"); // navbar 요소 선택
      const offset = navbar ? navbar.offsetHeight : 0; // navbar 높이 계산
      return offset;
    };
    const navBarHeight = getNavBarHeight();
    setNavHeight(navBarHeight - 1);
  }, [navHeight]);

  return (
    <NavbarContainer id="navbar" backgroundColor={backgroundColor}>
      <Text css={navTitleStyle} bold>
        TAEYUN
      </Text>

      <HamburgerIconStyle>
        <HamburgerIcon onClick={toggleMenu} />
      </HamburgerIconStyle>

      <ul css={navItemWrapperStyle}>
        {NavbarItem.map((item) => (
          <li key={item.id}>
            <Text
              as="span"
              typography="t6"
              css={navItemListStyle}
              onClick={() => scrollIntoView(item.id)}
            >
              {item.name}
            </Text>
          </li>
        ))}
      </ul>

      <ul css={mobileMenuStyle(navHeight, isOpen)}>
        {NavbarItem.map((item) => (
          <li
            key={item.id}
            css={mobileNavItemStyle}
            onClick={() => scrollIntoView(item.id)}
          >
            <Text typography="t6" css={navItemListStyle}>
              {item.name}
            </Text>
          </li>
        ))}
      </ul>
    </NavbarContainer>
  );
};

const mobileNavStyle = css`
  @media (min-width: 520px) {
    display: none; // 모바일에서 햄버거 아이콘 보이도록
  }
`;

const mobileNavItemStyle = css`
  text-align: center;
  cursor: pointer;
  padding: 8px 24px;
  width: 100%;
  &:hover {
    background-color: ${colors.gray200};
  }
`;

const mobileMenuStyle = (navHeight: number, isOpen: boolean) => css`
  position: absolute;
  top: ${navHeight}px;
  left: 0;
  width: 100%;
  background-color: ${colors.black};
  display: flex;
  flex-direction: column;
  ${mobileNavStyle}
  ${isOpen ? "display: block;" : "display: none;"}
`;

const NavbarContainer = styled.nav<{ backgroundColor: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const navTitleStyle = css`
  color: ${colors.white};
`;

const navItemWrapperStyle = css`
  display: none;
  list-style: none;
  gap: 35px;

  @media (min-width: 520px) {
    display: flex;
  }
`;

const navItemListStyle = css`
  color: ${colors.white};
  cursor: pointer;
`;

const HamburgerIconStyle = styled.div`
  display: block;
  cursor: pointer;
  color: ${colors.white};

  ${mobileNavStyle}
`;

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
  // {
  //   id: SCROLL_ID.CONTACT,
  //   name: "Contact",
  // },
];

export default Navbar;
