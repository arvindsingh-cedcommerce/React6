import './App.css';
import React from 'react'

function MobileOS() {
  return (
    <>
        <h2>
          This is MobileOS Component
        </h2>
        <ul>
          <li>Android</li>
          <li>Blackberry</li>
          <li>iPhone</li>
          <li>Window Phone</li>
        </ul>
        </>
  );
}


function MobileManufacturers (){
  
    return (
         
          <>
          <h2>
          This is MobileManufacturers Component
          </h2>
          <ul>
            <li>Samsumg</li>
            <li>HTC</li>
            <li>Micromax</li>
            <li>Apple</li>
          </ul>
          </>
    );
  
}

export {MobileOS,MobileManufacturers}

