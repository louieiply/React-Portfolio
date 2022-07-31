import logo from './logo.svg';
import './App.css';
import Portfolio from './components/Pages/Portfolio';
import AboutMe from './components/Pages/AboutMe';
import Contact from './components/Pages/Contact';
import Resume from './components/Pages/Resume';
function App() {
  return (
    <div className="Main">
      <AboutMe/>
      <Portfolio/>
      <Contact/>
      <Resume/>
    </div>
  );
}

export default App;
