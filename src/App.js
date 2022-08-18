import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { Box } from '@mui/system';
import Section1 from './Section1';
import Section2 from './Section2';

function App() {
  return (
    <div className="App">
      <Box
      sx={{backgroundImage: "linear-gradient(to right, #81aae5, #6390c3, #4777a1, #2d5f81, #134762)",pb:5,width:'100%'}}

      >
      <Navbar />
      <Section1 />
      </Box>
      <Section2 />
    </div>
  );
}

export default App;
