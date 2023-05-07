import './App.css';
import Header from './Header/Header.jsx';
import Hero from './Hero/Hero.jsx';
import Portfolio from './DesignPortfolio/DesignPortfolio.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Hero />
        <Portfolio/>
      </div>
    </div>
  );
}

export default App;
