import { useState } from 'react'
import {useGlobalContext} from './components/context.jsx'
import Nav from './components/nav.jsx'
import Hero from './components/hero.jsx'
import About from './components/about.jsx'
import CocktailPage from './components/cocktailpage.jsx'
import Error from './components/error.jsx'
import {Routes,Route} from 'react-router-dom'
function App() {
 const data = useGlobalContext()
  return (
    <main>
      <Nav/>
      <Routes>  
        <Route path='/' element={<Hero/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cocktail/:id' element={<CocktailPage/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes> 
    </main>
  )
}

export default App
