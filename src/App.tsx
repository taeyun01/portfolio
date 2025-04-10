import "./App.css";
import AboutMe from "@components/AboutMe";
import MyProfile from "@components/MyProfile";
import MyProjects from "@components/MyProjects";
import MySkills from "@components/MySkills";
import Navbar from "@components/Navbar";
// import Spacing from "@components/shared/Spacing";
import { colors } from "@src/styles/colorPalette";

function App() {
  return (
    <div>
      <Navbar backgroundColor={colors.black} />

      <MyProfile backgroundColor={colors.black} />
      {/* <Spacing size={4} backgroundColor="gray100" /> */}

      <MyProjects backgroundColor={colors.gray100} />
      {/* <Spacing size={4} backgroundColor="gray100" /> */}

      <MySkills backgroundColor={colors.gray200} />
      {/* <Spacing size={4} backgroundColor="gray100" /> */}

      <AboutMe backgroundColor={colors.gray} />
    </div>
  );
}

export default App;
