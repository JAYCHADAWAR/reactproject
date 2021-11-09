import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes,Route } from 'react-router-dom';
import Stuoverview from './Stuoverview';
import Stucoursepage from './Stucoursepage';
import Stueprofile from './Stueprofile';
import Sturoadmap from './Sturoadmap';
import Stusettingpage from './Stusettingpage';
import Navbar from './Navbar';


const App=()=>{
  return (
    <>
    <div class="division">
      
    <Navbar/>


   
    <div class="content" action="#">
 
        <Routes>
      <Route path="/" element={<Stuoverview/>}/>
      <Route path="/Stucoursepage" element={<Stucoursepage/>}/>
      <Route path="/Sturoadmap" element={<Sturoadmap/>}/>
      <Route path="/Stueprofile" element={<Stueprofile/>}/>
      <Route path="/Stusettingpage" element={<Stusettingpage/>}/>
      
    </Routes>
        </div>
        </div>
   
    
   
    
      
       
    </>
  );
}
export default App;