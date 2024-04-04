/*import { useState,useEffect } from 'react'
import './index.css'

import { AppFooter } from "./Components/AppFooter";
import { SideMenu } from "./Components/SideMenu/index";



import "./App.css";
import { PageContent } from "./Components/PageContent";
import { AppHeader } from "./Components/AppHeader";



function App() {
  



  
  return(
    /*<div className="App">
    
    
     <AppHeader />
     <space className="SideMenuAndPageContent">
      <SideMenu></SideMenu>
      <PageContent></PageContent>
     </space>
     <AppFooter />
     </div>
      
      
     
      
      
    
  
  );
}


export default App;*/

// App.js


import "./App.css";
import { Dashboard } from "./Components/Dashboard";
import { Sidebar } from "./Components/Sidebar";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import { SidebarData } from "./Components/SidebarData";
import { About } from "./Components/About";
import { Analystics } from "./Components/Analystics";



function App(){
  return (<div className="App">

    <BrowserRouter>
    <Routes>
      <Route index element={<Sidebar />} />
      <Route path="/Dashboard"element={<Dashboard />} />
      <Route path="SidebarData"element={<SidebarData />} />
      <Route path="About"element={<About />} />
      <Route path="Analystics"element={<Analystics />} />
      <Route path="add">
        <Route index element={<About />} />
        <Route path="addId" element={<Analystics />} />
      </Route>

      
        
    </Routes>
    </BrowserRouter>
  </div>
 
  );
 
}

export default App;



