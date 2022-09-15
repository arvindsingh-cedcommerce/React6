import React, { useState } from 'react'
import { createContext } from 'react'

export const ContextData = createContext();

const ContextFile = (props) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [category, setCategory] = useState('');
  const [itemNumber, setItemNumber] = useState(0);
  const [productArray, setProductArray] = useState([]);
  const [singleProductIndex, setSingleProductIndex] = useState('');
  const [total, setTotal] = useState(0);
  const [opensignup, setSingup] = useState(false);
  const [opensignin, setSingin] = useState(false);
  const [showname, setShowname] = useState(false);
  return (

    <ContextData.Provider value={{
      fullname, setFullname,
      email, setEmail,
      password, setPassword,
      category, setCategory,
      itemNumber, setItemNumber,
      productArray, setProductArray,
      singleProductIndex, setSingleProductIndex,
      total, setTotal,
      opensignup, setSingup,
      opensignin, setSingin,
      showname, setShowname
    }}>
      {props.children}
    </ContextData.Provider>

  )
}

export default ContextFile;