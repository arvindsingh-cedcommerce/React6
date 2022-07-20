import React from 'react';
import {Compo1,Compo2,Compo4} from './FuncCompo';
import './App.css';

class App extends React.Component{
  render(){
  return (
       <div className='container'>
        <h2>React</h2>
        <Compo1 />
        <Compo2 />
        <Compo4 />
        </div>
  );
}
}

export default App;
