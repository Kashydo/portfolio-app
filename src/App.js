
import './App.css';
import AboutMe from './AboutMe.js'
import Typewriter from './Typewriter.js';

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <div class="gridAboutMe"><AboutMe/></div>
        <div class="gridWelcome"><h2><Typewriter text="Welcome to my portfolio" delay={100}/></h2> </div>
        <div class="gridProjects">3</div>
        <div class="gridContact">4</div>
        <div class="gridBlog">5</div>
        <div class="gridCV">6</div>
        <div class="gridLinks">7</div>
        <div class="gridLenguages">8</div>
        
      </div>
    </div>
  );
}

export default App;
