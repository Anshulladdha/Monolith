import React from 'react'
import service from '../assets/services.png';
import fireServices from '../assets/fireService.png';
import manpower1 from '../assets/manpower1.png';
import fireFighting from '../assets/fireFighting.png';
import fireSafety from '../assets/fireSafety.png';
import construction from '../assets/construction.png';
import safety from '../assets/safety.png';
import identify from '../assets/identify.png';
import develop from '../assets/develop.png';
import train from '../assets/train.png';
import maintain from '../assets/maintain.png';
import complaints from '../assets/complaints.png';
import update from '../assets/update.png';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div >
                
    <div style={
        {
          backgroundImage:`url(${service})`,
          backgroundSize:'cover'
        }
        
      } className='w-full h-96 flex  justify-center py-20'>
        <div className=''>
            <h1 className='text-7xl py-10 font-bold text-black'>Services</h1>
            
            <a href='/' className='text-2xl inline-block text-white   border-2 border-red-500 hover:bg-red-500 hover:border-white px-3 py-3'>Back to Home</a>
        </div>
        </div>

{/* ------------------------------------------------------------------- */}
<div className=' px-10 py-20'>
                <div class="container text-center">
                    <div class="row flex justify-around">
                        <div class="col px-5 text-left">
                        <div className='text-4xl'><i className='fas fa-users text-red-600'></i></div>
                        <div ><h1 className='font-bold text-2xl py-2'>FIRE BRIGADE (RENTALS/MANUFACTURING)</h1>
                        <p className='py-2'>Fire brigades are emergency services that respond to fires and other disasters, providing rescue, firefighting, and medical services to communities.</p>
                        </div>
                        </div>
                        
                        <div class="col px-5 text-left">
                        <div className='text-4xl'><i className='fas fa-car text-red-600'></i></div>
                        <div ><h1 className='font-bold text-2xl py-2'>MANPOWER SUPPLIER (FIRE/SECURITY)</h1>
                        <p className='py-2'>Manpower suppliers provide staffing solutions to companies by sourcing and placing candidates for various roles and positions.</p>
                        </div>
                        </div>
                        
                        <div class="col px-5 text-left">
                        <div className='text-4xl'><i className='fas fa-code-branch text-red-600'></i></div>
                        <div ><h1 className='font-bold text-2xl py-2'>FIRE SAFETY EDUCATIONAL COURSES</h1>
                        <p className='py-2'>Fire safety educational courses provide essential knowledge and skills to prevent and respond to fires effectively, reducing the risk of injury and property damage.</p>
                        </div>
                        </div>
                        
                    </div>
                </div>
</div>
{/* ------------------------------------------------------------------------------ */}

<div className=' px-20 py-20'>
              <div class="container flex justify-around">
                <div class=" row flex px-20">
                <div class=" ">
                    <div className='px-20'>
                    <img className='max-w-xl rounded-xl ' src={`${fireServices}`}></img>
                    </div>
                  </div>
                  <div class="  px-20 ">
                    <div className='text-3xl font-bold'><h1>FIRE BRIGADE (RENTALS/MANUFACTURING)</h1></div>
                    <div className=' text-left py-2'><p>We provide an essential service to communities and industries, offering specialized equipment and expertise to prevent and respond to fire incidents. Fire brigade rentals offer a cost-effective solution for companies and events that require temporary fire protection, while fire brigade manufacturing provides customized fire trucks, pumps, and other fire suppression equipment tailored to specific needs.</p></div>
                  </div>
                  
                </div>
              </div>
</div>
{/* ------ */}
<div className=' px-10 py-20'>
              <div class="container flex justify-around">
                <div class=" row flex px-20">
                  <div class=" ">
                    <div className='text-4xl font-bold'><h1>MANPOWER SUPPLIER (FIRE/SECURITY)</h1></div>
                    <div className=' text-left py-5'><p>A manpower supplier in the fire and security industry typically provides personnel for fire and security-related jobs such as Firewatch, fire suppression system installation, security guard services, and alarm monitoring. These suppliers recruit and hire qualified individuals who can fulfill the needs of their clients in terms of providing safety and security services. such as their reputation, experience, qualifications of their staff, and their ability to meet your specific needs.</p></div>
                  </div>
                  <div class=" px-10 py-10">
                    <div className=' '>
                    <img className='h-48 max-w-2xl rounded-xl' src={`${manpower1}`}></img>
                    </div>
                  </div>
                  
                </div>
              </div>
</div>
{/* ------------ */}
<div className=' px-20 py-20'>
              <div class="container flex justify-around">
                <div class=" row flex px-10">
                <div class="px-10 ">
                    <div className=''>
                    <img className='max-w-2xl rounded-2xl' src={`${fireFighting}`}></img>
                    </div>
                  </div>
                  <div class="px-20">
                    <div className='text-3xl font-bold py-2'><h1>FIREFIGHTING TRAINING</h1></div>
                    <div className=' text-left py-5'><p>Firefighting training is a critical aspect of ensuring public safety and minimizing property damage in the event of a fire. The following are some important tips to consider when training for Fire Fighting. It is essential to know how to operate fire extinguishers, hoses, and other firefighting equipment. Familiarize yourself with the location and proper use of this equipment.</p></div>
                  </div>
                  
                </div>
              </div>
</div>
{/* ---------------------------------- */}
<div className=' px-10 py-20'>
              <div class="container flex justify-around">
                <div class=" row flex px-20">
                  <div class=" ">
                    <div className='text-4xl font-bold'><h1>FIRE SAFETY EDUCATIONAL COURSES</h1></div>
                    <div className=' text-left py-3 text-lg'><p>Fire safety education is a crucial aspect of ensuring that individuals and organizations are prepared to prevent and respond to fires. In today's world, it is essential that websites offering fire safety educational courses stand out and offer unique and expensive options to clients. One way to make fire safety educational courses unique is to incorporate the latest technology and interactive features.</p></div>
                  </div>
                  <div class="">
                    <div className='px-10 '>
                    <img className='h-72 max-w-xl rounded-xl' src={`${fireSafety}`}></img>
                    </div>
                  </div>
                  
                </div>
              </div>
</div>
{/* --------- */}
<div className=' px-20 py-20'>
              <div class="container flex justify-around">
                <div class=" row flex ">
                <div class=" ">
                    <div className=''>
                    <img className=' h-72 max-w-lg rounded-xl' src={`${construction}`}></img>
                    </div>
                  </div>
                  <div class="px-20 ">
                    <div className='text-3xl font-bold py-2'><h1>CONSTRUCTION PROJECT LIASONING</h1></div>
                    <div className=' text-left py-3'><p>Construction project liaisoning refers to the process of facilitating communication and collaboration between various stakeholders involved in a construction project, such as architects, contractors, engineers, government authorities, and other relevant parties. The liasoning process involves coordinating and managing all aspects of the project, including the planning, design, procurement, construction, and delivery phases.</p></div>
                  </div>
                  
                </div>
              </div>
</div>
{/* ------------------------------------------------------------------------ */}
<div className='py-10'>
    <div className='flex justify-center text-xl'>
        <a href='/contact' ><span className='border border-red-600 px-3 py-1 hover:bg-red-500 text-red-500 hover:text-white'>Quote Now</span></a>
    </div>
</div>
{/* ------------------------------------------------------------- */}
<section>
<div className='py-20'>
    <div className='relative '>
    
    <img className='h-full w-full opacity-100 contrast-50 ' src={`${safety}`}></img>
    
    <div className="absolute top-1/2 left-1/2 py-20  text-white text-center transform -translate-x-1/2 -translate-y-1/3">
        <h2 className='text-lg'>Join us</h2><br/>
        <div><h1 className='text-5xl text-bold flex justify-centerx'>FIRE SECURITY TRAINING</h1></div>
        <div><p className='py-3'>Empower your team with the unparalleled expertise of our exclusive fire security training program, crafted to safeguard your assets and personnel against the most critical fire hazards with the latest cutting-edge techniques and equipment, ensuring optimal protection that money can't buy.</p></div><br/>
        <div className='py-10'>
         <div className='flex justify-center text-xl'>
        <a href='/contact' ><span className='border border-white px-3 py-1 hover:bg-white text-white hover:text-black'>Register Yourself</span></a>
    </div><br/><br/><br/> v<br/><br/><br/><br/>
</div>
    </div>
    </div>
</div>
</section>
{/* --------------------------------------- */}
<div className=' px-10 py-20 bg-gray-200'>

                <div class="container  text-center">
                <div class="row flex space-x-5">
                    
                    <div class="col px-3 w-1/3 bg-gray-300 hover:bg-white  rounded-xl">
                    <div className='px-20 py-5'><img className='h-24 px-20' src={`${identify}`}></img></div>
                    <div>
                        <h1 className='text-3xl font-bold'>Identify Fire Hazards</h1>
                        <p className='py-5'>The first step in developing a fire security training program is to identify potential fire hazards in the workplace.</p>
                    </div>
                    </div>
            
                    <div class="col px-3 w-1/3  bg-gray-300 hover:bg-white rounded-xl">
                    <div className='px-20 py-5'><img className='h-24 px-20' src={`${develop}`}></img></div>
                    <div>
                        <h1 className='text-3xl font-bold'>Develop Emergency Response Procedures</h1>
                        <p className='py-5'>Once potential fire hazards have been identified, it's important to develop emergency response procedures.</p>
                    </div>
                    </div>
                  

                    <div class="col px-3 w-1/3 bg-gray-300 hover:bg-white rounded-xl">
                    <div className='px-20 py-5'><img className='h-24 px-20' src={`${train}`}></img></div>
                    <div>
                        <h1 className='text-3xl font-bold'>Train Employees</h1>
                        <p className='py-5'>Providing employees with the knowledge and skills needed to prevent fires and respond in case of an emergency is crucial. </p>
                    </div>
                    </div>

                </div>

                <div class="row flex space-x-5 py-10">
                    <div class="col px-3 w-1/3 bg-gray-300  hover:bg-white rounded-xl">
                    <div className='px-20 py-5'><img className='h-24 px-20' src={`${maintain}`}></img></div>
                    <div>
                        <h1 className='text-3xl font-bold' >Maintain Fire Safety Equipment</h1>
                        <p className='py-5'>Fire safety equipment, such as fire extinguishers and smoke detectors, must be properly maintained.</p>
                    </div>
                    </div>

                    <div class="col px-3 w-1/3 bg-gray-300 hover:bg-white rounded-xl">
                    <div className='px-20 py-5'><img className='h-24 px-20'  src={`${complaints}`}></img></div>
                    <div>
                        <h1 className='text-3xl font-bold'>Complains With Regulation</h1>
                        <p className='py-5'>Many jurisdictions require to provide fire safety training to their employees to comply with fire safety regulations</p>
                    </div>
                    </div>

                    <div class="col  px-3 w-1/3 bg-gray-300 hover:bg-white rounded-xl">
                    <div className='px-20 py-5'><img className='h-24 px-20' src={`${update}`}></img></div>
                    <div>
                        <h1 className='text-3xl font-bold'>Update Security Training Program</h1>
                        <p className='py-5'>security training programs should be  reviewed and updated to ensure they remain effective.</p>
                    </div>
                    </div>

                </div>
                </div>

</div>
{/* -------------------------------------------------------------------- */}
<Footer/>

      </div>
  )
}

export default Services