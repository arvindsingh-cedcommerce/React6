import logo from './logo.svg';
import './App.css';
import { useState, createContext, useContext } from 'react'
import ComponentA from './ComponentA';

const UserContext = createContext();

function App() {
  const [username, setUsername] = useState("Jesse Hall");

  return (
    
      <UserContext.Provider value={username} >
        <ComponentA />
     </UserContext.Provider>
  
  );
}

// function ComponentA() {
//   return (
//     <div>
//         <ComponentB />
//     </div>
//   )
// }

// function ComponentB() {
//   return (
//     <div>
//         <ComponentC />
//     </div>
//   )
// }

// function ComponentC() {
//   return (
//     <div>
//         <ComponentD />
//     </div>
//   )
// }

// const ComponentD = () => {
//   const username = useContext(UserContext);

//   return (
//     <div>
//    <h1>ComponentD</h1>
//    <h2>{`Hello I am ${username}`}</h2>
//     </div>
//   )
// }

export default App;
export { UserContext };
