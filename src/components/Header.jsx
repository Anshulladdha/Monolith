
import { Dropdown } from 'flowbite-react'
import React, { useState } from 'react'
import companyLogo from '../components/logoo.png';


const Header = () => {
    
    return (
    <>  <div className=' bg-black h-24 flex justify-between'>
        <div className=''>{/*image */}
            <img className='mr-3 h-6 sm:h-20' src={companyLogo}></img>
        </div>
        <div className="px-16  text-white items-center flex  space-x-3">
            <a href="/" className="mr-4" active>
            Home
            </a>
        <a href="/services" className="mr-4" active>
          Services
        </a>
        <div className="flex">
          <Dropdown className='text-center text-black bg-white z-index'
            label=<a href='/products'>Products</a>
            style={{ border: "none", marginRight: "20px" }
            
            }
          >
            <Dropdown.Item href="#" >Fire Extinguishers</Dropdown.Item><hr/>
            <Dropdown.Item href="#"> Fire Hydrant Services</Dropdown.Item><hr/>
            <Dropdown.Item href="#">Sprinkler-System</Dropdown.Item><hr/>
            <Dropdown.Item href="#">
              Industrial fire Safety Equipments
            </Dropdown.Item><hr/>
            <Dropdown.Item href="#">Electrical Fire Safety Panels</Dropdown.Item>
          </Dropdown>
          <Dropdown className='text-black bg-white' label="Products application" 
          style={{ border: "none" }}>
            <Dropdown.Item href="#">Power Plants</Dropdown.Item><hr/>
            <Dropdown.Item href="#">Building & Construction</Dropdown.Item><hr/>
            <Dropdown.Item href="#">Restaurants & Server Room</Dropdown.Item><hr/>
            <Dropdown.Item href="#">Hangars, Dockyards & Airport</Dropdown.Item><hr/>
            <Dropdown.Item href="#">Residential Areas</Dropdown.Item><hr/>
            <Dropdown.Item href="#">Oil Refineries</Dropdown.Item>
          </Dropdown>
        </div>
        <a href="/about" className="ml-4" active>
          About
        </a>
        <a href="/Contact" className="ml-4" active>
          Contact
        </a>
      </div>
      </div>
    </>
  )
}

export default Header