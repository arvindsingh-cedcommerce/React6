import React, { Component } from 'react'
import { useState } from 'react'
import ChildComponent from './ChildComponent';

export default class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Husky'
      }
    }

    componentDidMount() {
     setInterval(() => {
        console.log(this.state.name);
     },2000);
    }
 render() {
  return (
    <div>
     <ChildComponent />
    </div>
  )
}
}