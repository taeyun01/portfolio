import "./App.css";
import AboutMe from "@components/AboutMe";
import Contact from "@components/Contact";
import MyProfile from "@components/MyProfile";
import MyProjects from "@components/MyProjects";
import MySkills from "@components/MySkills";
import Navbar from "@components/Navbar";
import Spacing from "@components/shared/Spacing";
import { colors } from "@src/styles/colorPalette";

function App() {
  return (
    <div>
      <Navbar backgroundColor={colors.black} />

      <MyProfile backgroundColor={colors.black} />
      <Spacing size={8} backgroundColor="white" />

      <MySkills backgroundColor={colors.black} />
      <Spacing size={8} backgroundColor="white" />

      <MyProjects backgroundColor={colors.black} />
      <Spacing size={8} backgroundColor="white" />

      <AboutMe backgroundColor={colors.black} />
      <Spacing size={8} backgroundColor="white" />

      <Contact backgroundColor={colors.black} />
    </div>
  );
}

export default App;
