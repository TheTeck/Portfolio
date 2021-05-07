import Navigation from '../../Components/Navigation/Navigation';
import Title from '../../Components/Title/Title';
import Project from '../../Components/Project/Project';
import './App.css';


function App() {

  const projects = [['images/editopuspage.png', 'https://github.com/TheTeck/sheetmusic', 'Sheet Music Maker', 'Sheet Music Maker is sheet music editing software with a community aspect to it. A user can share their works with any other user that follows them and vise versa. This application was my final project for my full-stack bootcamp and was made to showcase my skills learned up to this point, especially with React.']]

  return (
    <>
      <div id="bg-1"></div>
      <Title />
      <Navigation />
      <div id="main-container">
        <Project image={projects[0][0]} link={projects[0][1]} title={projects[0][2]} description={projects[0][3]} />
      </div>
    </>
  );
}

export default App;
