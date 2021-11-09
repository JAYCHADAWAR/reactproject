import React from 'react'
import { AiFillCamera } from 'react-icons/ai';


const Stusettingpage = () => {
  return (
    <>
      <div class="container">

        <div class="row">
          <div class="col-4">
            <div class="circle">
              <img src="./logo192.png" />
            </div>
            <input type="file" id="actual-btn" hidden/>
            <label for="actual-btn" class="edit" id="ed"><AiFillCamera/></label>
            
            
            
          </div>
          <div class="col-8 d-flex align-items-center">

            <table>
              <tr>
                <td class="name">Jay chadawar</td>
                <td><button class="ename">Edit</button></td>
              </tr>
              <tr>
                <td class="uname">@usrname</td>
              </tr>
              <tr>
                <td class="tagline">Just do it</td>
                <td><button class="ename">Edit</button></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="b2">
        <div class="row f">
          <div class="col-12 mx-auto">

            <form action="#">
              <div class="mb-3 col-12">
               
                <input type="email" class="form-control" placeholder="email" />
                
              </div>
              <div class="mb-3">
              
                <input type="text" class="form-control" placeholder="phonenumber" />
              </div>
              <div class="mb-3">
              
                <input type="text" class="form-control" placeholder="twitter link" />
              </div>
              <div class="mb-3">
              
                <input type="text" class="form-control" placeholder="github link" />
              </div>
             
              
              <input type="button" class="save" value="save" />
                
              
            </form>
            

          </div>

        </div>
      </div>
      <div class="b3">
        <div class="row">
          
          <div class="col-6">
            <form action="#">
          <input class="logout" type="button" value="Logout"/>
          </form>
          </div>
          <div class="col-6">
          <form action="#">
          <input class="respass" type="button" value="Reset Password"/>
          </form>
          </div>
        </div>
        
      </div>
      


    </>
  );
}
export default Stusettingpage;