import Navigation from '../../Components/Navigation/Navigation';
import Title from '../../Components/Title/Title';
import Project from '../../Components/Project/Project';
import Skills from '../../Components/Skills/Skills';
import Heading from '../../Components/Heading/Heading';
import Contact from '../../Components/Contact/Contact';
import './App.css';


function App() {

  const projects = [['images/editopuspage.png', 'https://github.com/TheTeck/sheetmusic', 'https://sheetmusicmaker.herokuapp.com', 'Sheet Music Maker', 'Sheet Music Maker is sheet music editing software with a community aspect to it. A user can share their works with any other user that follows them and vise versa. This application was my final project for my full-stack bootcamp and was made to showcase my skills learned up to this point, especially with React.']]

  return (
    <>
      <div id="bg-1"></div>
      <Title />
      <Navigation />
      <div id="main-container">
        <div id="technical-skills">
          <Heading title={'Technical Skills'} />
          <Skills />
        </div>
        <div id="my-projects">
          <Heading title={'Projects'} />
          <Project image={projects[0][0]} link={projects[0][1]} link2={projects[0][2]} title={projects[0][3]} description={projects[0][4]} />
        </div>
        <div id="contact">
          <Heading title={'Contact'} />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
