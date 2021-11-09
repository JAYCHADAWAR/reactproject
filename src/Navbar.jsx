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
                <h1 class='logo'>logo</h1>
                <div class="navbar">
                    <NavLink to="./" class="d"><GrOverview class="icon"/>Student Overview</NavLink>
                    <NavLink to="./Stucoursepage" class="d" ><BsBookFill class="icon"/>Student Courses</NavLink>
                    <NavLink to="./Stusettingpage" class="d"><FiSettings class="icon"/>Student Settings</NavLink>
                    <NavLink to="./Stueprofile" class="d"><CgProfile class="icon"/>Student Profile</NavLink>
                    <NavLink to="./Sturoadmap" class="d"><RiRoadMapFill class="icon"/>Student Roadmap</NavLink>
                </div>

            </div>

        </>
    )
}
export default Navbar;