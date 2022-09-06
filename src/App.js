
import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddBLog from "./components/addblog/AddBLog";
import Home from "./components/home/Home";
import Details from "./details/Details";
import Signup from './components/signup-signin/Signup';
import Signin from "./components/signup-signin/Signin";
export const BlogContext = createContext();
function App() {
  const [ID, setID] = useState(0);
  const [title, setTitle] = useState('');
  const [heading, setHeading] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [flag, setFlag] = useState(false);
  return (
    <div className="App">
      <BlogContext.Provider value={{ title, setTitle, heading, setHeading, subTitle, setSubTitle, description, setDescription, image, setImage, ID, setID, username, setUsername, fullname, setFullname, email, setEmail, password, setPassword, flag, setFlag }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/AddBLog" element={<AddBLog />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BlogContext.Provider>
      <Routes>
      </Routes>
    </div>
  );
}

export default App;
