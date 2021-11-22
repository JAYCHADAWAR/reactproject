import React from 'react'
import { NavLink } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { FiSettings}  from 'react-icons/fi'
import {BsBookFill} from 'react-icons/bs'
import {RiRoadMapFill} from 'react-icons/ri'
import {GrOverview} from 'react-icons/gr'
const Navbar = () => {
    return (
        <>

            <div className="sidebar">
                <h1 class='logo'><span class="">l</span>ogo</h1>
                <div class="navbar">
                    <NavLink to="./" class="d"><GrOverview class="icon"/><span class="mitems">Student Overview</span></NavLink>
                    <NavLink to="./Stucoursepage" class="d" ><BsBookFill class="icon"/><span class="mitems">Student Courses</span></NavLink>
                    <NavLink to="./Stusettingpage" class="d"><FiSettings class="icon"/><span class="mitems">Student Settings</span></NavLink>
                    <NavLink to="./Stueprofile" class="d"><CgProfile class="icon"/><span class="mitems">Student Profile</span></NavLink>
                    <NavLink to="./Sturoadmap" class="d"><RiRoadMapFill class="icon"/><span class="mitems">Student Roadmap</span></NavLink>
                </div>

            </div>

        </>
    )
}
export default Navbar;
