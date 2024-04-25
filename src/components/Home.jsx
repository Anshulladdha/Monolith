import React from 'react'
import backGroundImage from '../assets/bi11.png';
import pendent from '../assets/p1.png';
import karam from '../assets/p2.png';
import disposable from '../assets/p3.png';
import fire from '../assets/p4.png';
import powerPlant from '../assets/b1.png';
import building from '../assets/b2.png';
import restaurant from '../assets/b3.png';
import hangers from '../assets/b4.png';
import refinery from '../assets/b5.png';
import oil from '../assets/b6.png';
import brigade from '../assets/i1.png';
import manpower from '../assets/i2.png';
import fireFighting from '../assets/i3.png';
import fireSafety from '../assets/i4.png';
import construction from '../assets/i5.png'; 
import Footer from './Footer';


const Home = () => {
  return (
    <div className=''>

        <div style={
        {
          backgroundImage:`url(${backGroundImage})`,
          backgroundSize:'cover'
        }
        
      } className='w-full flex items-center justify-end py-20 text-white'>
        <div className='space-y-5 py-10 px-20'>
            <h5 className=''>RELIABLE AND TRUSTWORTHY PROVIDER OF TAILOR-MADE SERVICES</h5><br/><br/>
            <h1 className='text-6xl font-bold'>Best Safety</h1>
            <h1 className='text-6xl font-bold'>Services</h1>
            <h6 className=''>Be prepared and stay safe: Your comprehensive safety resource.</h6><br/><br/>
            
            <a className='text-xl border hover:bg-orange-600 px-3 py-3 ' href='/contact'>Quote Now</a>
            <hr className='bg-gray-50'/><br/>
            <div className=' border cursor-pointer px-4 py-4 w-14 h-14 bg-orange-600 rounded-full flex justify-center items-center'>
            <i class="fa-solid fa-phone"></i>
            </div>
            <h4 className='text-white'>call us Today</h4>
            <h1 className='text-5xl'>+91 9354318440</h1>
        </div>
        </div>


        <div className='container flex items-center py-20'>
            <div className=' w-full flex items-center justify-center'>{/*text*/}
                <div  className=' w-1/2 space-y-2 ms-20'>
                    <h1 className='text-4xl font-bold'>Equip yourself for safety emergencies: 
                    The latest and most reliable safety equipments</h1>
                    <p>This help to emphasizes the importance of having the right safety equipment to protect yourself and your property from fire emergencies. It suggests that the equipment being offered is the latest and most reliable, which can give potential customers confidence in their purchase. The use of the phrase “equip yourself” also highlights the proactive approach to fire safety, encouraging individuals and businesses to take action before an emergency occurs.</p>
                    <br/><br/>
                    <a href='/about' className='text-orange-500' >About us<i class="fa-solid fa-arrow-right ms-1"></i></a>
                    <br/><br/><br/><br/>
                </div>
            </div>
            
            <div className=' bg-red-600 text-white items-center px-20 w-2/3 h-96'>
                <div>
                    <h1 className='py-10'>Lets Talk our Expertise</h1>
                    <div className='flex' >
                        <div className='flex' >
                            <h1 className='text-5xl'>5<i class="fa-solid fa-plus"></i>
                            </h1>
                            <h1 className='text-5xl ms-48'>500<i class="fa-solid fa-plus"></i></h1>
                        </div>
                    </div>
                    <div className='flex'>
                    <h1 >Years In Business</h1>
                    <h1 className='ms-32'>Happy Customers</h1>
                    </div><br/><br/><br/>
                    
                    <div className='flex' >
                        <div className='flex'>
                            <h1 className='text-5xl'>5<i></i></h1>
                            <h1 className='text-5xl ms-52'>200<i class="fa-solid fa-plus"></i></h1>
                        </div>
                    </div>
                    <div className='flex'>
                    <h1 >Licensed Officer</h1>
                    <h1 className='ms-32'>Assets Protected</h1>
                    </div>
                </div>
            </div>
        </div>

{/* ----------------------------------------------------------------- */}
        {/* {Add To Cart} */}
        <div className='flex w-full border bg-gray-100 py-20 px-3 space-x-1'>
            <div className='card w-full py-10 ' style={{
                width:"30rem"
            }}>
                <img src={`${pendent}`} className='border  rounded-lg' />
                <div className=''>
                    <h5 className='text-gray-400'>Safety Equipment</h5>
                    <h2 className=''>Pendent Type Sprinkler</h2>
                    <p className=''>₹215.00</p>
                    <button className='text-xl border hover:bg-red-500  text-red  px-3  '>Add To Cart</button>
                    <br/><br/>
                    <a href='enquiry-now' className='text-white px-4 py-2 bg-red-500'>ENQUIRY NOW</a>
                </div>
            </div>
            <div className='card  w-full py-10' style={{
                width:"30rem"
            }}>
                <img src={`${karam}`} className='border rounded-md' />
                <div className=''>
                    <h5 className='text-gray-400'>Safety Equipment</h5>
                    <h2 className=''>Karam Safety Belts</h2>
                    <p className=''>₹1670.00</p>
                    <button className='text-xl border hover:bg-red-500 text-red  px-3  '>Add To Cart</button>
                    <br/><br/>
                    <a href='enquiry-now' className='text-white px-3 py-2 bg-red-500'>ENQUIRY NOW</a>
                </div>
            </div>
            <div className='card m-2 w-1/4  py-10' style={{
                width:"30rem"
            }}>
                <img src={`${disposable}`} className='border rounded-md' />
                <div className=''>
                    <h5 className='text-gray-400'>Safety Equipment</h5>
                    <h2 className=''>Disposable Nitrile Gloves</h2>
                    <p className=''>₹210.00</p>
                    <button className='text-xl border hover:bg-red-500  text-red  px-3  '>Add To Cart</button>
                    <br/><br/>
                    <a href='enquiry-now' className='text-white px-3 py-2 bg-red-500'>ENQUIRY NOW</a>
                </div>
            </div>
            <div className='card w-1/4 py-10' style={{
                width:"30rem"
            }}>
                <img src={`${fire}`} className='border rounded-md ' />
                <div className=''>
                    <h5 className='text-gray-400'>Safety Equipment</h5>
                    <h2 className=''>Fire Escape Aluminium Rope</h2>
                    <p className=''>₹2500.00</p>
                    <button className='text-xl border hover:bg-red-500 text-red  px-3   '>Add To Cart</button>
                    <br/><br/>
                    <a href='enquiry-now' className='text-white px-3 py-2  bg-red-500'>ENQUIRY NOW</a>
                </div>
            </div>
        </div>

{/* ------------------------------------------------------------------ */}
            <div className='px-10 py-10'>
                <h1 className='text-5xl px-10  '>Our Product Application & Industries We Serve</h1>
                <div className='px-10 py-10'>
                <div class="container">
                        <div className="flex  justify-between ">
                            <div className=" hover:bg-slate-100 w-1/3 px-5 py-5 rounded-lg">
                                <img src={`${powerPlant}`} className='w-20 h-20'></img>
                                <h1 className='text-2xl font-bold justify-start'>Power Plant</h1>
                                <p className='w-3/4 py-10'>A power plant is a facility that generates electricity using various sources of energy</p>
                                <div className='text-orange-600 flex'>
                                <a href='/power-plant' className=''>
                                <i  className="fa-solid fa-plus"></i>
                                <span>Read More</span></a>
                                </div>
                            </div>
                            <div className=" hover:bg-slate-100 w-1/3 px-5 py-5 rounded-lg">
                                <img src={`${building}`} className='w-20 h-20'></img>
                                <h1 className='text-2xl font-bold justify-start'>Power Plant</h1>
                                <p className='w-3/4 py-10'>Building and construction refer to the process of creating structures, buildings.</p>
                                <div className='text-orange-600 flex'>
                                <a href='/power-plant' className=''>
                                <i  className="fa-solid fa-plus"></i>
                                <span>Read More</span></a>
                                </div>
                            </div>
                            <div className=" hover:bg-slate-100 w-1/3 px-5 py-5 rounded-lg">
                                <img src={`${restaurant}`} className='w-20 h-20'></img>
                                <h1 className='text-2xl font-bold justify-start'>Restaurants & Server Room</h1>
                                <p className='w-3/4 py-10'>Restaurants and server rooms are two very different types of facilities.</p><br/>
                                <div className='text-orange-600 flex'>
                                <a href='/power-plant' className=''>
                                <i  className="fa-solid fa-plus"></i>
                                <span>Read More</span></a>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="container">
                        <div className="flex  justify-between">
                            <div className=" hover:bg-slate-100 w-1/3 px-5 py-5  rounded-lg">
                                <img src={`${hangers}`} className='w-20 h-20'></img>
                                <h1 className='text-2xl font-bold justify-start'>Hangers, Dockyards And Airports</h1>
                                <p className='w-3/4 py-5'>Transportation Infrastructure: Hangars, Dockyards, and Airport</p><br/>
                                <div className='text-orange-600 flex'>
                                <a href='/power-plant' className=''>
                                <i  className="fa-solid fa-plus"></i>
                                <span>Read More</span></a>
                                </div>
                            </div>
                            <div className=" hover:bg-slate-100 w-1/3 px-5 py-5 rounded-lg">
                                <img src={`${refinery}`} className='w-20 h-20'></img>
                                <h1 className='text-2xl font-bold justify-start'>Residential Areas</h1>
                                <p className='w-3/4 py-10 '>Residential areas are areas designated for living purposes, where people reside in homes.</p>
                                <div className='text-orange-600 flex'>
                                <a href='/power-plant' className=''>
                                <i  className="fa-solid fa-plus"></i>
                                <span>Read More</span></a>
                                </div>
                            </div>
                            <div className=" hover:bg-slate-100 w-1/3 px-5 py-5 rounded-lg">
                                <img src={`${oil}`} className='w-20 h-20'></img>
                                <h1 className='text-2xl font-bold justify-start'>Oil Refineries</h1>
                                <p className='w-3/4 py-10'>Oil refineries are industrial facilities that convert crude oil into various refined products.</p>
                                <div className='text-orange-600 flex'>
                                <a href='/power-plant' className=''>
                                <i  className="fa-solid fa-plus"></i>
                                <span>Read More</span></a>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
            
{/* -------------------------------------------------------------- */}

            <div className='bg-gray-600'>
                <div className=' text-center px-20 py-20'>
                    <h4 className='text-white'>WHY CHOOSE US</h4>
                    <h1 className='text-4xl text-white py-5'>What Sets Us Apart</h1>

                    <div className='px-10 py-5'>
                    <div class="container ">
                        <div class="flex">
                        <div className="  w-1/3 px-5 py-5 border border-gray-500 ">
                        <div className='text-left'>
                                <i class="fa-solid fa-clock text-red-600 text-2xl "></i>
                                </div>
                                <h1 className='text-2xl text-white font-bold text-justify'>Perfection Anytime</h1>
                                <p className='py-1 text-justify text-white text-sm'>It is about setting high standards for oneself and embracing the journey of growth, rather than fixating on end result it can lead to personal and professional development, increased confidence, and a sense of fulfillment.</p>

                            </div>
                            <div className="  w-1/3 px-5 py-5 border border-gray-500 ">
                            <div className='text-left'>
                                <i class="fa-solid fa-comments text-red-600 text-2xl "></i>
                                </div>
                                <h1 className='text-2xl text-white font-bold text-justify'>24/7 Communication</h1>
                                <p className='py-1 text-sm text-justify text-white'>It is important to recognize the potential downsides of constant connectivity, such as the blurring of boundaries between work and personal life, the risk of burnout, and the need for intentional disconnection and rest.</p>

                            </div>
                            <div className="  w-1/3 px-5 py-5 border border-gray-500 ">
                            <div className='text-left'>
                                <i class="fa-solid fa-car text-red-600 text-2xl"></i>
                                </div>
                                <h1 className='text-2xl text-white font-bold text-justify'>Our Fleet</h1>
                                <p className='py-1 text-justify text-sm text-white'>It is the backbone of our operations, enabling us to efficiently transport goods and people to their intended destinations. It is crucial to maintain our fleet to the highest standards of safety, reliability, and sustainability,through regular maintenance, upgrades, and responsible driving practices.</p>

                            </div>
                        
                        </div>
                    </div>
                    <div class="container ">
                        <div class="flex">
                        <div className="  w-1/3 px-5 py-5 border border-gray-500 ">
                        <div className='text-left'>
                                <i class="fa-solid fa-fire-extinguisher text-red-600 text-2xl"></i>
                                </div>
                                <h1 className='text-2xl text-white font-bold text-justify'>Emergency Help</h1>
                                <p className='py-1 mb-3 text-justify text-white text-sm' >We provide critical support and assistance during times of crisis and can mean the difference between life and death for those in need. To ensure swift and practical assistance, it is essential to have reliable emergency response systems, including trained personnel, effective communication channels, and necessary resources.</p>

                            </div>
                            <div className="  w-1/3 px-5 py-5 border border-gray-500 ">
                            <div className='text-left'>
                                <i class="fa-solid fa-laptop-house text-red-600 text-2xl"></i>
                                </div>
                                <h1 className='text-2xl text-white font-bold text-justify'>Advanced Technology</h1>
                                <p className='py-1 mb-3 text-justify text-white text-sm' >Advanced technology has the potential to revolutionize fire safety, by providing early detection and swift response to fire incidents. From intelligent smoke detectors and flame sensors to automated sprinkler systems and fire-resistant materials, technology can play a crucial role in preventing fires, minimizing damages, and saving lives.</p>

                            </div>
                            <div className="  w-1/3 px-5 py-5 border border-gray-500 ">
                                <div className='text-left'>
                                <i class="fa-solid fa-user-tie text-red-600 text-2xl"></i>
                                </div>
                                <h1 className='text-2xl text-white font-bold text-justify'>Licensed Officer</h1>
                                <p className='py-1 mb-3 text-justify text-white text-sm'>A licensed officer trained in fire safety plays a crucial role in preventing and responding to fire incidents and ensuring the safety of people and property. With their knowledge of fire prevention and emergency response protocols, licensed officers can conduct regular inspections, identify potential hazards, and implement safety measures to minimize the risk of fires.</p>

                            </div>
                        
                        </div>
                    </div>
                    </div>
                </div>
            </div>
{/* ---------------------------------------------------------- */}
                <div className='px-10 py-20 border bg-gray-200 '>
                    <div class="container text-center ">
                        <div class="justify-around flex">
                            <div class=" px-10  py-10 w-1/3">
                                <h2 className='text-4xl text-justify text-black font-bold leading-7'>Top-rated Services For Our Safety Equipments</h2>
                                    <p className='py-10 text-justify text-md'>Safety equipment services are designed to help businesses and organizations maintain safe working environments. These services typically include the installation, maintenance, and repair of safety equipment such as fire alarms, sprinkler systems, emergency lighting, and security systems.</p>
                                    <div className='py-5 text-left text-sm'>
                                        <a href='' className='border border-orange-500 px-1 py-1 text-orange-500 hover:bg-orange-500'>Check All Services<i class="fa-solid fa-chevron-right px-1"></i></a>
                                    </div>
                                    
                            </div>
                            <div className='w-1/2'>

                            <div class="container text-center">
                                <div class="row flex justify-around" >
                                    <div class="">
                                    <img src={`${brigade}`} className='w-20 h-20'></img>
                                <div className='text-sm font-bold text-justify'>
                                <h3>FIRE BRIGADE </h3>
                                <h3 >(RENTALS/MANUFACTURING)</h3>
                                </div>
                                <p className='w-3/4 py-3 text-justify text-sm'>We provide an essential service to communities and industries, offering specialized equipment and expertise to prevent and respond to fire incidents.</p>
                                <div className='text-orange-600 flex text-sm'>
                                <a href='/power-plant' className=''>
                                <span>Learn More</span><i class="fa-solid fa-chevron-right px-1"></i></a>
                                </div>
                                    </div>
                                    <div className='px-10'>
                                        <img src={`${manpower}`} className='w-20 h-20'></img>
                                        <div className='text-sm font-bold text-justify justify-start' >
                                            <h3>MANPOWER SUPPLIER</h3>
                                            <h3>(FIRE/SECURITY)</h3>
                                        </div>
                                        <p className='w-3/4 py-3 text-justify text-sm'>We provide an essential service to communities and industries, offering specialized equipment and expertise to prevent and respond to fire incidents.</p>
                                        <div className='text-orange-600 flex text-sm'>
                                            <a href='/power-plant' className=''>
                                            <span>Learn More</span><i class="fa-solid fa-chevron-right px-1"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='py-10'>
                                        <img src={`${fireFighting}`} className='w-20 h-20'></img>
                                        <div className='text-sm font-bold text-justify justify-start py-2'>
                                            <h3>FIREFIGHTING TRAINING</h3>
                                        </div>
                                        <p className='w-3/4 py-3 text-justify text-sm'>Firefighting training is a critical aspect of ensuring public safety and minimizing property damage in the event of a fire. </p>
                                        <div className='text-orange-600 flex text-sm'>
                                            <a href='/power-plant' className=''>
                                            <span>Learn More</span><i class="fa-solid fa-chevron-right px-1"></i></a>
                                        </div>
                                    </div>
                                    <div className='py-5'>
                                        <img src={`${fireSafety}`} className='w-20 h-20'></img>
                                        <div className='text-sm font-bold text-justify justify-start w-2/3 py-2'>
                                            <h3>FIRE SAFETY EDUCATIONAL COURSES</h3>
                                        </div>
                                        <p className='w-3/4 py-3 text-justify text-sm'>Fire safety educational courses are designed to teach individuals about the principles and practices of fire safety.  </p>
                                        <div className='text-orange-600 flex text-sm'>
                                            <a href='/power-plant' className=''>
                                            <span>Learn More</span><i class="fa-solid fa-chevron-right px-1"></i></a>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className='py-5'>
                                        <img src={`${construction}`} className='w-20 h-20'></img>
                                        <div className='text-sm font-bold text-justify justify-start w-2/3 py-2'>
                                            <h3>CONSTRUCTION PROJECT LIAISONING</h3>
                                        </div>
                                        <p className='w-3/4 py-3 text-justify text-sm'>Construction project liaisoning refers to the process of facilitating communication and collaboration between various stakeholders involved in a construction project.  </p>
                                        <div className='text-orange-600 flex text-sm'>
                                            <a href='/power-plant' className=''>
                                            <span>Learn More</span><i class="fa-solid fa-chevron-right px-1"></i></a>
                                        </div>
                                    </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                                        
                </div>
{/* -------------------------------------------------------------------- */}
        <div class="bg-gray-100">
            <div class=" flex justify-center ">
                <div class=" px-20 py-20">
                    <h1 className='text-2xl'>Contact Info</h1>
                    <h6 className='py-2 text-sm'>Be prepared, stay safe – trust in fire equipment</h6>
                    <h5 className='py-2 text-sm'>Mobile: +91 9354318440</h5>
                    <h5 className='py-2 text-sm'>Email Us: monolithsafetyexperts@gmail.com</h5>
                    <h5 className='py-2 text-sm w-2/3'>Address: Plot No. 1107, First Floor, Sector 47, Sohna Road, Near ILD Mall, Gurgaon</h5>
                    <div className='icons-container flex space-x-3 '>
                        <div className='cursor-pointer px-3 py-3 w-8 h-8  rounded-lg   flex justify-center items-center'>
                        <i class="fa-brands fa-facebook  text-3xl"></i>
                        </div>
                        <div className=' cursor-pointer px-3 py-4 w-8 h-8  rounded-lg  flex justify-center items-center'>
                        <i class="fa-brands fa-square-twitter text-3xl text-blue-500"></i>
                        </div>
                        <div className=' cursor-pointer px-3 py-4 w-8 h-8  rounded-lg  flex justify-center items-center'>
                        <i class="fa-brands text-red-600 text-3xl fa-square-youtube"></i>
                        </div>
                    </div>
                </div>

                <div className="bg-white w-1/3 px-10 py-10 justify-center">
                <form>
                <div className='py-2 text-sm'>
                <label htmlFor="name">Name</label><span className='text-red-500'>*</span><br />
                <input type="text"  name="name" className='bg-gray-100 text-sm px-1 py-1 w-48'   placeholder='Enter Name' required/>
                </div>                
                <div className='py-2 text-sm'>
                <label htmlFor="email" className=''>Email</label><span className='text-red-500'>*</span><br /> 
                <input type="email"  name="email" placeholder='Enter Email ' className='bg-gray-100 px-1 py-1 w-48'  required/><br/>
                </div>
                <div className='py-2 text-sm'>
                <label htmlFor="companyName">Company</label><span className='text-red-500'>*</span><br />
                <input type="text"  name="companyName" className='bg-gray-100 px-1 py-1 w-48'  placeholder='Company Name' required/><br/>
                </div>   
                <div className='py-2 text-sm'>
                <label for="message">Message</label><span className='text-red-500'>*</span><br/>
                <textarea className='bg-gray-100 px-1 py-1 w-48'  placeholder="Enter Message Here"  rows="3"></textarea>
                </div>
                <div className='py-3'>
                <a href='' className='text-red-500 border border-red-500 py-1 px-3 text-sm'>Send Me Quote</a>
                </div>
                </form>
                </div>
            </div>
        </div>

{/* -------------------------------------------------------------------- */}

        <div class=" px-20 py-10 bg-gray-100">
            <div className="flex justify-between">
                <div className="px-20 py-20 w-1/2">
                    <h1 className='text-4xl font-bold'>Frequently Asked Questions</h1>
                    <p className='py-3 text-sm'>As a safety expert, you may receive various questions and concerns from individuals and organizations regarding safety measures and practices. Here are some frequently asked questions (FAQ) and their answers that may help you in your role</p>
                </div>


                <div class="col py-20 w-1/2">


                <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                <span>How Can I Prevent Accidents In The Workplace?</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
            Accidents can be prevented by eliminating hazards, controlling risks, providing safety equipment, promoting safe work practices, and providing training and education to employees on safe work practices.</p>
                
                </div>
            </div>
            
            <h2 id="accordion-collapse-heading-2">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                <span>What Are The Most Common Workplace Hazards?
            </span>
            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">The most common workplace hazards include slips, trips, and falls, electrical hazards, machinery hazards, chemical hazards, and ergonomic hazards.</p>
                </div>
            </div>
            <h2 id="accordion-collapse-heading-3">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                <span>What Are The Safety Measures For Handling Hazardous Materials</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">Safety measures for handling hazardous materials include proper labeling and storage, providing personal protective equipment (PPE), using appropriate ventilation and containment systems, and providing training on safe handling practices.</p>
                
                </div>
            </div>
            <h2 id="accordion-collapse-heading-3">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                <span>How Can I Ensure Electrical Safety In The Workplace?</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">Electrical safety in the workplace can be ensured by properly maintaining and inspecting electrical equipment, using appropriate protective equipment, such as gloves and safety glasses, and providing training on safe work practices.</p>
                
                        </div>
                    </div>
                    </div>
               </div>
            </div>
        </div>
    <Footer/>
    </div>
    
  );
}

export default Home