import React from 'react';
import Footer from '../components/Footer'
import about from '../assets/about.png'; 
import expertise from '../assets/a1.png';
import customisation from '../assets/a2.png';
import quality from '../assets/a3.png';
import flexibility from '../assets/a4.png';
import safety from '../assets/s1.png';
import equip from '../assets/s2.png'; 
import brands from '../assets/a5.png';

const About = () => {
  return (
    <div >
      <div style={
        {
          backgroundImage:`url(${about})`,
          backgroundSize:'cover'
        }
        
      } className='flex items-center justify-center py-20 text-white'>
        <div className='space-y-5 py-10 px-20'>
            
            <h1 className='text-6xl font-bold'>About US</h1>
            
        </div>
        </div>

{/* _--------------------------------------------- */}
    <div className=' px-20 py-20 bg-gray-200'>
              <div class="container text-center">
                  <div class=" flex justify-around">
                    <div class=" text-justify  w-1/3">
                      <h2 className='text-4xl font-bold'>Who We Are and What We Do?</h2>
                    </div>
                    <div className=' text-justify  w-1/3 text-sm'>
                        <p>Monolith Safety Experts Pvt. Ltd. is a dynamic and innovative platform
                          that connects clients from every category to a wide range of safety solutions under one roof. Despite being only a year old, we have established ourselves as a reliable and trustworthy provider of tailor-made services that cater to the diverse needs of our clients.</p>
                      </div> 
                  </div>
                  <hr/>
                  <div class="py-10 row flex justify-around">
                    <div class="col">
                      <div className='text-6xl'>
                      <span>5</span>
                      <span>+</span>
                      </div>
                      <div>Years in Business</div>
                    </div>
                    <div class="col">
                      <div className='text-6xl'>
                      <span>500</span>
                      <span>+</span>
                      </div>
                      <div>Happy Customers</div>
                    </div>
                    <div class="col">
                      <div className='text-6xl'>
                      <span>5</span>
                      </div>
                      <div>Licensed Officer</div>
                    </div>
                    <div class="col">
                      <div className='text-6xl'>
                      <span>500</span>
                      <span>+</span>
                      </div>
                      <div>Assets Protected</div>
                    </div>
                  </div>
                </div>
    </div>
{/* ---------------------------------------------------------------- */}
    <div className='py-20 px-5 '>
    <h1 className='text-4xl text-center font-bold'> Why Monolith?</h1>
            <div class="container  py-10">
              <div class="space-x-3  flex justify-around ">
                <div className=' border bg-gray-300 hover:bg-red-500  px-10 rounded-lg'>
                <div class="py-5">
                <div className='px-20'><img className='h-20 border bg-white px-1 py-1' src={`${expertise}`}></img>
                <h1 className='font-bold' >Expertise</h1>
                      </div>
                      <div>
                        <p className='text-sm py-5'>Monolith Services has a team of highly experienced professionals who are experts in their respective fields, including security, risk management, and compliance.</p>
                      </div>
                </div>
                </div>
                
                <div className='border  bg-gray-300 hover:bg-red-500  px-10 rounded-lg'>
                <div class="py-5 ">
                <div className='px-20'>
                      <img className='h-20 border bg-white px-1 py-1 ' src={`${customisation}`}></img>
                      <h1 className='font-bold' >Customization</h1>
                      </div>
                      <div>
                        
                        <p className='text-sm py-3'>Monolith Services offers customized solutions that are tailored to your specific requirements. They take the time to understand your business, your goals.</p>
                      </div>
                </div>
                </div>
                <div className='border bg-gray-300   hover:bg-red-500  px-10 rounded-lg'>
                <div class="py-5">
                <div className='px-20'> <img className='h-20 border bg-white px-1 py-1' src={`${quality}`}></img>
                <h1 className='font-bold' >Quality</h1></div>
                      <div>
                        <p className='text-sm py-5'>Monolith Services is committed to delivering high-quality services that meet the highest standards of excellence. It has latest technology and best practices.</p>
                      </div>
                </div>
                </div>
                <div className='border bg-gray-300  hover:bg-red-500  px-10 rounded-lg'>
                <div class="py-5">
                <div className='px-20'><img className='h-20 border bg-white py-1' src={`${flexibility}`}></img>
                <h1 className='font-bold' >Flexibility</h1> </div>
                      <div>
                        <p className='text-sm py-5'>Monolith Services understands that businesses and individuals have different needs and requirements, and they are flexible in their approach.</p>
                      </div>
                </div>
                </div>
              </div>
              </div>
    </div>

{/* -------------------------------------------------------- */}
<div className='px-20 py-10 '>
                  <div class="container text-center relative">
                    <div class="flex ">
                          
                      <div class=" bg-red-600  px-10">
                        <div className='text-5xl text-white py-10'><h1>Our Mission</h1></div>
                        <div className='py-5  text-white w-full'>
                          <ul className='text-left'>
                          <li className=' list-disc'>At Monolith Safety Experts, our mission is to provide the best safety solutions to our clients, ensuring their safety and minimizing risk in their workplaces. 
                          We are committed to delivering the highest quality safety services and products, using the latest technology and industry best practices. We strive to exceed our client’s expectations and build long-lasting relationships with them.</li>
                          <li className=' list-disc'>We aim to disrupt the safety industry by offering innovative and customized safety solutions that meet our client’s unique needs. We understand that safety is not a one-size-fits-all solution, and we take the time to listen to our clients and understand their specific safety challenges.</li>
                          <li className=' list-disc'>Our services include safety assessments, safety training, safety product sales and installations, safety program development, and safety consulting. We provide a comprehensive range of safety solutions that cover everything from hazard identification to safety program implementation.</li>
                          <li className=' list-disc'>Our goal is to be the go-to safety experts for businesses of all sizes,providing them with the peace of mind that their safety is in good hands.</li>
                        </ul>
                        </div>
                      </div>
                      
                      <div class=" py-5  relative">
                        <div className=' px-20  '>
                        <div className='text-6xl py-5  text-black'><h1 >Our Vision</h1></div>
                        <div className='py-10  text-black'>
                          <ul className=' text-left '>
                          <li className='list-disc'>In this Era of highly endured information with paced up technological advancements the factors contributing to the risk laden businesses of almost every field are rising rapidly. Which is why at this point of witnessing numerous amounts of accidents & fatalities we at MONOLITH SAFETY EXPERTS, chose to dive in the deep waters of ever expanding areas of safety with a vision of providing such a platform which is just not limited to providing safety from common hazard like fire or explosions but also industrial, commercial & residential hazards with utmost care.</li>
                          <li className='list-disc'>As the amount of risks causing incidents resulting in accidents are at their peak in almost every industry, therefore we make sure that all our clients get the best of the planned safety systems according to their business’s requirements and within their financial limits too.</li>
                          <li className='list-disc'>All in all we want to envision a safe working environment for each individual through our collective safety monitoring system that is still undergoing a rigorous process of health safety environment agenda that should be a protocol to follow by every human on this planet in the coming time.</li>
                        </ul>
                        </div></div>
                      </div>
                      
                    </div>
                  </div>
                  
</div>
      <div className='text-6xl flex justify-center text-red-500'><h3>------</h3></div>
{/* ------------------------------------------------------------------------------------- */}

<div className=' px-20 py-10'>
              <div class="container">
                <div class="px-10 row flex">
                  <div class=" w-2/3 py-10">
                    <div className='text-5xl font-bold'><h1>SAFETY SOLUTIONS</h1></div>
                    <div className=' text-left py-5'><p>Our safety solution is built with the latest technology and expertise to provide maximum protection for your organization. We begin by assessing your specific needs and vulnerabilities, including industry, location, and potential threats. Based on this assessment, we create a tailored safety solution that suits your organization's unique requirements. With our solution, you can rest assured that you have the best protection and peace of mind. Trust us to provide you with an expensive but invaluable safety solution that meets your needs and exceeds your expectations.</p></div>
                  </div>
                  <div class="w-1/2 px-10 ">
                    <div className=''>
                    <a href='/about' ><img className='max-w-xl rounded-3xl ' src={`${safety}`}></img></a>
                    </div>
                  </div>
                </div>
              </div>
</div>
{/* -------- */}
<div className=' px-20 py-20'>
              <div class="container">
                <div class=" row flex">
                <div class=" ">
                    <div className=''>
                    <a href='/about' ><img className='max-w-xl rounded-3xl ' src={`${equip}`}></img></a>
                    </div>
                  </div>
                  <div class=" w-2/3 px-10 py-5">
                    <div className='text-5xl font-bold'><h1>SAFETY SERVICES EQUIPMENT</h1></div>
                    <div className=' text-left py-5'><p>Safety equipment and services are crucial for ensuring the safety and well-being of people and the environment. This includes personal protective equipment, fire safety equipment, safety signs, training, and emergency response services. PPE protects workers from potential hazards, while fire safety equipment helps prevent or mitigate fire hazards. These products and services are designed to meet industry standards and regulations to provide adequate protection. It's important to prioritize safety in all aspects of life to minimize risks and prevent accidents.</p></div>
                  </div>
                  
                </div>
              </div>
</div>
{/* ------------------------ */}
<div className= 'py-10 bg-gray-100'>
  <div className=' flex justify-center text-2xl font-bold'><h1>OUR ASSOCIATE BRANDS</h1></div>
  <div className='flex justify-center py-10'><img src={`${brands}`}></img></div>
</div>


        <Footer/>
    </div>
  )
}

export default About