import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import Login from "./Login";
import Searchpage from "./Searchpage";
import Signup from './Signup'
import Singlepage from "./Singlepage";


function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <NavLink to="/about">About</NavLink>
      </nav>
    </>
  );
}

function About() {

  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/singlepage" element={<Singlepage />} />
        <Route path="/search" element={<Searchpage />} />
      </Routes>
    </div>
  );
}