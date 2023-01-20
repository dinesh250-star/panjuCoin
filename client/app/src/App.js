import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import styled from 'styled-components'
import Navbar from './components/Navbar/Navbar'
import Mint from './components/Mint/Mint'
import Redeem from './components/Reedem/Reedem'

function App() {
  const [count, setCount] = useState(0)

  return (
<div>
<Navbar />  

<Routes>
  <Route path='/' element={<Mint/>}/>

  <Route path='/mint' element={<Mint/>}/>
  <Route path='/redeem' element={<Redeem/>}/>

</Routes>
</div>
  )
}

export default App
