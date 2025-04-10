import "./App.css";
import AboutMe from "@components/AboutMe";
import MyProfile from "@components/MyProfile";
import MyProjects from "@components/MyProjects";
import MySkills from "@components/MySkills";
import Navbar from "@components/Navbar";
import { colors } from "@src/styles/colorPalette";

function App() {
  return (
    <div>
      <Navbar backgroundColor={colors.black} />

      <MyProfile backgroundColor={colors.black} />

      <MyProjects backgroundColor={colors.gray100} />

      <MySkills backgroundColor={colors.gray200} />

      <AboutMe backgroundColor={colors.gray} />
    </div>
  );
}

export default App;
