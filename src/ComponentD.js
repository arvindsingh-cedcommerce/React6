import React, { memo } from 'react'
import { UserContext } from './App';

const ComponentD = () => {

  return (
    <>
      <UserContext.Consumer>
        {
          (username) => 
          <><h1>{username}</h1></>
        }
      </UserContext.Consumer>
    </>
  )
}
export default memo(ComponentD);