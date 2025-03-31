import "./App.css";
import AboutMe from "@components/AboutMe";
import Contact from "@components/Contact";
import MyProfile from "@components/MyProfile";
import MyProjects from "@components/MyProjects";
import MySkills from "@components/MySkills";
import Navbar from "@components/Navbar";
import Spacing from "@components/shared/Spacing";

function App() {
  return (
    <>
      <Navbar />

      <MyProfile />
      <Spacing size={8} backgroundColor="white" />

      <MySkills />
      <Spacing size={8} backgroundColor="gray100" />

      <MyProjects />
      <Spacing size={8} backgroundColor="gray100" />

      <AboutMe />
      <Spacing size={8} backgroundColor="gray100" />

      <Contact />
    </>
  );
}

export default App;
