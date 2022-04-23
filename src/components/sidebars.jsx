import { useState } from "react"
import image from "../../assets/cover-001.png"
import github from "../../assets/github.png"

import linkedin from "../../assets/linkedin.png"

import stackoverflow from "../../assets/stackoverflow.png"

import twitter from "../../assets/twitter.png"



const Sidebar = () => {
    //const [isOpen, setOpen]=useState(false)
  return (
      <div className="fixed block top-0 right-0 h-screen w-60 bg-transparent text-black">
          {/* <div className="sidebar-header my-5">
              <h1>This is my sidebar header space</h1>
          </div> */}
          <div className="mx-auto mt-2 items-center flex flex-col bg-gray-500/75 text-white rounded-2xl shadow-xl shadow-slate-300/60">
              <i>Me</i>
              <i>Bio</i>
              <i>Experience</i>
              <i>Education</i>
              <i>Projects</i>
          </div>
          
            <div className="relative w-60 h-auto bg-gray-500 rounded-2xl pt-24 pb-8 px-4 shadow-md hover:shadow-lg flex flex-col items-center transition">
                <div class="absolute rounded-full bg-gray-100 w-28 h-28 p-2 z-10 -top-8 shadow-lg hover:shadow-xl transition">
            <div class="rounded-full bg-black  overflow-auto">
                <img className= "w-full h-full"src={image} />
            </div>
        </div>
        <label class="font-bold text-gray-100 text-lg">
            Caldewood Owen Alikula
        </label>
        <p class="text-center  text-gray-200 mt-2 leading-relaxed">
            BSc. Information technology<br/> 
            <span className="text-sm italic">Machakos University</span><br/>
            <span className="text-xs">(2017-2022)</span>
        </p>
          <ul className="icons-socials flex text-xs justify-around mt-4">
              <li className="flex mr-4">
                  <a href="https://github.com/alikulaOwen">
                    <img className= "h-7 w-7" src={github} alt=""/>
                  </a>
              </li>
              <li className="flex mr-4">
                  <a href="#">
                    <img className= "h-7 w-7" src={twitter} alt=""/>
                  </a>
              </li>
              <li className="flex mr-4">
                  <a href="#">
                    <img className= "h-7 w-7" src={linkedin} alt=""/>
                  </a>
              </li>
              <li className="flex">
                  <a href="#">
                    <img className= "h-7 w-7" src={stackoverflow} alt="stackoverflow"/>
                  </a>
              </li>
          </ul>
          </div>
      </div>
  )
}

export default Sidebar
