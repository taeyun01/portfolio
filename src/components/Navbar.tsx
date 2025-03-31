import styled from "@emotion/styled";

const Navbar = () => {
  return (
    <NavbarContainer>
      <h2>TAEYUN</h2>
      <ul css={navItemStyle}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
`;

const navItemStyle = {
  display: "flex",
  listStyle: "none",
  gap: "25px",
};

export default Navbar;
