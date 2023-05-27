import './App.css';
import Header from './Header/Header.jsx';
import Hero from './Hero/Hero.jsx';
import Portfolio from './DesignPortfolio/DesignPortfolio.jsx';
import Services from './Services/Services.jsx';
import Skills from './Skills/Skills.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Hero />
        <Portfolio/>
        <Services/>
        <Skills/>
      </div>
    </div>
  );
}

export default App;
