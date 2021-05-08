import Navigation from '../../Components/Navigation/Navigation';
import Title from '../../Components/Title/Title';
import Project from '../../Components/Project/Project';
import Skills from '../../Components/Skills/Skills';
import Heading from '../../Components/Heading/Heading';
import Contact from '../../Components/Contact/Contact';
import Resume from '../../Components/Resume/Resume';
import About from '../../Components/About/About';
import './App.css';


function App() {

  const projects = [
    ['images/editopuspage.png', 'https://github.com/TheTeck/sheetmusic', 'https://sheetmusicmaker.herokuapp.com', 'Sheet Music Maker', 'Sheet Music Maker is sheet music editing software with a community aspect to it. A user can share their works with any other user that follows them and vise versa. This application was my final project for my full-stack bootcamp and was made to showcase my skills learned up to this point, especially with React.'],
    ['images/bartertown.png', 'https://github.com/TheTeck/Bartertown', 'https://bartertown22.herokuapp.com/', 'Bartertown', "Bartertown is an online trading site where users may find anything another user is wanting to trade and can propose their own trades. Once a trade has been proposed, other users may leave comments on the item's show page as well as make a bid or bids for that item with their own items. Those bids can also be commented upon by the community users. If the owner of the original trade proposal likes one of the bids, they can then decide to make a deal, which will create a private line of communication between the two users and will remove both items of the trade from the community."],
    ['images/fireflies.png', 'https://github.com/TheTeck/Fireflies', 'https://theteck.github.io/Fireflies/', 'Fireflies', 'Fireflies is a small app that I decided to make in order to practice my newly acquired knowledge of React. It was made solely by me, John Teckemeyer, over one weekend. It is a fairly simple app that displays "fireflies" in a dark environment, which could be considered a modifiable screensaver, at most.'],
    ['images/ouralley.png', 'https://github.com/farazborjian/OurAlley', 'https://ouralley.herokuapp.com/', 'OurAlley', 'OurAlley is a social networking app that helps bring lonely dogs together by letting users search for local dogs and propose playdates. This was a team project in which I was the scrum and API master. A major focus of mine on this project was implementing the Google Maps API to geolocate other nearby users.'],
  ]

  return (
    <>
      <div id="bg-container">
        <div id="bg-1"></div>
        <Title />
        <Navigation />
        <div id="main-container">
          <div id="about-me">
            <Heading title={'About Me'} />
            <About />
          </div>
          <div id="technical-skills">
            <Heading title={'Technical Skills'} />
            <Skills />
          </div>
          <div id="my-projects">
            <Heading title={'Projects'} />
            <Project image={projects[0][0]} link={projects[0][1]} link2={projects[0][2]} title={projects[0][3]} description={projects[0][4]} onHeroku={true} />
            <Project image={projects[1][0]} link={projects[1][1]} link2={projects[1][2]} title={projects[1][3]} description={projects[1][4]} onHeroku={true} />
            <Project image={projects[2][0]} link={projects[2][1]} link2={projects[2][2]} title={projects[2][3]} description={projects[2][4]} onHeroku={false} />
            <Project image={projects[3][0]} link={projects[3][1]} link2={projects[3][2]} title={projects[3][3]} description={projects[3][4]} onHeroku={true} />
          </div>
          <div id="resume">
            <Heading title={'Resume'} />
            <Resume />
          </div>
          <div id="contact">
            <Heading title={'Contact'} />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
