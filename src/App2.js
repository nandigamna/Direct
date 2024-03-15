import React, { useState } from 'react';
import Newscomponent  from './Newscomponent';
import Login from './Login';
import Navbar from './Navbar';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';



function App2() {

  const[a,b]=useState(0)




  return (
    <div>
      <BrowserRouter>

      <LoadingBar color='red' progress={a}  height="3px"   onLoaderFinished={()=>b(0)}/>



        <Navbar />
        <Routes>


          <Route path='/'             element={<Newscomponent  setProgress={b}/>}> </Route>
          <Route path='/business'     element={<Newscomponent  setProgress={b}/>}> </Route>
          <Route path='/entertainment'element={<Newscomponent  setProgress={b}/>}> </Route>
          <Route path='/general'      element={<Newscomponent  setProgress={b}/>}> </Route>
          <Route path='/health'       element={<Newscomponent  setProgress={b}/>}> </Route>
          <Route path='/science'      element={<Newscomponent  setProgress={b}/>}> </Route>
          <Route path='/sports'       element={<Newscomponent  setProgress={b}/>}> </Route>
          <Route path='/technology'   element={<Newscomponent  setProgress={b}/>}> </Route>
          <Route path='/login'   element={<Login/>}> </Route>
      


        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App2