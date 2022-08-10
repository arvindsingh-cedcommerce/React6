import logo from './logo.svg';
import './App.css';
import Section1 from './component/Section1';
import Section2 from './component/Section2';
import Section3 from './component/Section3';
import Section4 from './component/Section4';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;
