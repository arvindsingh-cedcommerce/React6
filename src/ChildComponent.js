import React, { memo } from 'react'

 function ChildComponent() {
  return (
    <div>
        <h1>I am ChildComponent of ParentComponent</h1>
    </div>
  )
}
export default memo(ChildComponent);