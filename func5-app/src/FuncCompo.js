import React from 'react'

const Compo1 = () => {
  return (
    <div style={{margin:"1%",padding:"2%",border:"2px solid brown"}}>Component 1</div>
  )
}

const Compo2 = () => {
    return (
        <div style={{width:"40%",margin:"1%",height:"90%",padding:"2%",border:"2px solid brown",float:"left"}}>
            Component 2
            <Compo3 />
            <Compo3 />
        </div>
    )
  }

const Compo3 = () => {
    return (
        <div style={{width:"90%",margin:"1%",height:"100px",padding:"1%",border:"2px solid brown"}}>Component 3</div>
    )
  }
  const Compo4 = () => {
    return (
        <div style={{width:"40%",height:"90%",margin:"1%",padding:"2%",border:"2px solid brown",float:"right"}}>
            Component 4
            <Compo5 />
        </div>
    )
  }
  const Compo5 = () => {
    return (
        <div style={{width:"90%",height:"200px",margin:"1%",padding:"4%",border:"2px solid brown"}}>Component 5</div>
    )
  }
export {Compo1,Compo2,Compo4}