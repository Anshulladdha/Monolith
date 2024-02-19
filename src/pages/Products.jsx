import React from "react";
import alarm from "../assets/alarm.png";
import Footer from "../components/Footer";
import { assets, items, productQualifcations } from "../utils/arrayConstants.jsx";
const Products = () => {
   // prodcuts list component
    const itemsComponent = []; 
    for (let i = 0; i < items.length; i += 4) {
       const group = items.slice(i, i + 4); 
       const groupComponent = ( 
        <div key={i} className="flex space-x-5">{group.map((item, index) => ( 
          <div key={index} className="card py-10" style={{ width: "20rem" }}> 
          <img src={item.icon} className="border rounded-lg" /> 
          <div className=""> 
          <h5 className="text-gray-400">Safety Equipment</h5>
           <h2 className="">{item.name}</h2>
            <p className="">₹{item.price}.00</p>
             <br /> 
             <button className="text-xl border border-red-500 text-red-500 hover:bg-red-500 hover:text-white text-red px-2 py-1"> Add To Cart </button> <br /> <br /> 
             <a href="enquiry-now" className="text-white block text-center px-4 py-2 bg-red-500" > ENQUIRY NOW </a> 
             </div> </div> 
             ))} </div> 
             ); 
             itemsComponent.push(groupComponent); 
            }
            // product qualification component 
            const productQualificationComponent = ( 
              <div className="container text-center"> 
              <div className="flex justify-around space-x-5"> 
              {productQualifcations.map((item, index) => ( 
                <div key={index} className="column bg-white border py-5">            
                <div className="icon text-4xl"> 
                <i className={`fas ${item.icon} text-red-600`}></i> 
                </div> 
                <div> 
                <h2 className="font-bold text-xl py-2">{item.title}</h2> 
                <p className="py-2">{item.description}</p> 
                </div> </div>
                 ))} 

                 </div> </div> 
                 ); 
                 // assests to show
                  const assestsComponent = ( 
                    <div> {assets.map((asset, index) => (
                       <div key={index} className="container flex justify-around">                      
                       <div className="row flex"> {index % 2 === 0 ? ( 
                        <> 

                        <div className=""> 
                        <div className=""> 
                        <img className="h-80 max-w-lg rounded-3xl" src={asset.image} ></img> 
                        </div> </div> 
                        <div className=""> 
                        <div className="text-3xl font-bold flex justify-center py-2"> 
                        <h1>{asset.title}</h1> 
                        </div> 
                        <div className="px-20 py-3">
                         <p>{asset.description}</p> 
                         </div> </div> 
                         </> 
                         ) : ( <> 

                         <div className=""> 
                         <div className="text-3xl font-bold flex justify-center py-2"> 
                         <h1>{asset.title}</h1> 
                         </div> 
                         <div className="py-3"> 
                         <p>{asset.description}</p> 
                         </div> </div> 
                         <div className=""> 
                         <div className="px-20"> 
                         <img className="h-80 max-w-lg rounded-3xl" src={asset.image} ></img> 
                         </div> </div> </> 
                         )} 
                         </div> </div> 
                         ))} 
                         </div> ); 
                         return ( 
                         <div> 
                         <div style=
                         {{ backgroundImage: `url(${alarm})`, 
                         backgroundSize: "cover", 
                         }} className="w-full h-96 flex justify-center py-10" > 
                         <div className=""> 
                         <h1 className="text-7xl py-10 font-bold text-white">Product</h1> 
                         <a href="/" className="text-2xl inline-block text-white hover:text-black border-2 border-red-500 hover:bg-red-500 px-3 py-3" > Back to Home </a>
                          </div> </div> 
                          {/*  Show product qualification /} <div className="bg-gray-200 px-10 py-20"> {productQualificationComponent} </div> {/*  Show list of assets /} <div className=" px-20 py-20">{assestsComponent}</div> {/*  Show list of all products */} 
                          <div className="py-10 px-20 bg-gray-200"> 
                          <div className=" flex justify-center text-4xl font-bold"> 
                          <h1> All Products</h1> 
                          </div> 
                          {itemsComponent} 
                          </div> 
                          <Footer /> 
                          </div> 
                          ); 
                        }; 
                        export default Products;




// import React from 'react'
// import alarm from '../assets/alarm.png';
// import fire from '../assets/fire.png'
// import fire1 from '../assets/fire1.png';
// import fire2 from '../assets/fire2.png';
// import fire3 from '../assets/fire3.png';
// import fire4 from '../assets/fire4.png';
// import cart1 from '../assets/cart1.png';
// import cart2 from '../assets/cart2.png';
// import cart3 from '../assets/cart3.png';
// import cart4 from '../assets/cart4.png';
// import cart5 from '../assets/cart5.png';
// import cart6 from '../assets/cart6.png';
// import cart7 from '../assets/cart7.png';
// import cart8 from '../assets/cart8.png';
// import Footer from '../components/Footer';


// const Products = () => {
//   return (
//     <div>
//         <div style={
//         {
//           backgroundImage:`url(${alarm})`,
//           backgroundSize:'cover'
//         }
        
//       } className='w-full h-96 flex  justify-center py-10'>
//         <div className=''>
//             <h1 className='text-7xl py-10 font-bold text-white'>Product</h1>
            
//             <a href='/' className='text-2xl inline-block text-white hover:text-black   
//             border-2 border-red-500 hover:bg-red-500 px-3 py-3'>Back to Home</a>
//         </div>
//         </div>
// {/* ------------------------------------------- */}
// <div className='bg-gray-200 px-10 py-20'>
//                 <div class="container text-center">
//                     <div class="row flex justify-around space-x-5">
//                         <div class="col px-5 text-left bg-white border py-5">
//                         <div className='text-4xl'><i className='fas fa-quidditch text-red-600'></i></div>
//                         <div ><h1 className='font-bold text-2xl py-2'>Quality Assurance</h1>
//                         <p className='py-2'>Our products are not only ISI-approved, but they also undergo rigorous testing and quality control measures to ensure that they meet the highest industry standards</p>
//                         </div>
//                         </div>
                        
//                         <div class="col px-5 text-left border bg-white py-5">
//                         <div className='text-4xl '><i className='fas fa-draw-polygon text-red-600'></i></div>
//                         <div ><h1 className='font-bold text-2xl py-2'>Durability</h1>
//                         <p className='py-2'>Our safety equipment products are made from high-quality materials that are designed to last, even in the toughest of conditions.</p>
//                         </div>
//                         </div>
                        
//                         <div class="col px-5 text-left bg-white py-5">
//                         <div className='text-4xl'><i className='fas fa-id-badge text-red-600'></i></div>
//                         <div ><h1 className='font-bold text-2xl py-2'>ISI Approved</h1>
//                         <p className='py-2'>Our safety equipment products are ISI (Indian Standards Institute) approved, which means that they meet the stringent quality and safety requirements set by the Indian government.

// </p>
//                         </div>
//                         </div>

//                         <div class="col px-5 text-left bg-white py-5">
//                         <div className='text-4xl '><i className='fas fa-code-branch py-2 text-red-600'></i></div>
//                         <div ><h1 className='font-bold text-2xl py-2'>Customization</h1>
//                         <p className='py-2'>We understand that every customer has unique safety requirements, which is why we offer a wide range of customizable safety equipment products to meet the needs of our customers.</p>
//                         </div>
//                         </div>
                        
//                     </div>
//                 </div>
// </div>

// {/* ------------------------------------------------------------- */}
// <div className=' px-20 py-20'>
//               <div class="container flex justify-around">
//                 <div class=" row flex ">
//                 <div class=" ">
//                     <div className=''>
//                     <img className=' h-80 max-w-lg rounded-3xl' src={`${fire}`}></img>
//                     </div>
//                   </div>
//                   <div class="">
//                     <div className='text-3xl font-bold flex justify-center py-2'><h1>FIRE HYDRANT SERVICES</h1></div>
//                     <div className='px-20  py-3'><p>A fire hydrant system is a crucial component of any building’s fire safety infrastructure. It comprises a network of pipes and valves that are connected to a pressurized water source, such as a water tank or municipal water supply. In the event of a fire, the hydrant system allows firefighters to quickly and easily access a large volume of water, helping to extinguish flames and prevent the spread of fire.</p></div>
//                   </div>
                  
//                 </div>
//               </div>
// </div>
// {/* ----- */}

// <div className=' px-20 py-20'>
//               <div class="container flex justify-around">
//                 <div class=" row flex ">
                
//                   <div class="">
//                     <div className='text-3xl font-bold flex justify-center py-2'><h1>FIRE EXTINGUISHERS</h1></div>
//                     <div className=' py-3'><p>Fire extinguishers are an essential component of any fire safety plan. They are designed to quickly and effectively extinguish small fires, preventing them from spreading and causing extensive damage. We offer a range of fire extinguisher services to help you keep your building safe and compliant with local fire codes and regulations.</p></div>
//                   </div>
//                   <div class=" ">
//                     <div className=' px-20'>
//                     <img className=' h-80 max-w-lg rounded-3xl' src={`${fire1}`}></img>
//                     </div>
//                   </div>

//                 </div>
//               </div>
// </div>
// {/* --------- */}
// <div className=' px-20 py-20'>
//               <div class="container flex justify-around">
//                 <div class=" row flex ">
//                 <div class=" ">
//                     <div className=''>
//                     <img className=' h-80 max-w-lg rounded-3xl' src={`${fire2}`}></img>
//                     </div>
//                   </div>
//                   <div class="">
//                     <div className='text-3xl font-bold flex justify-center py-2'><h1>SPRINKLE SYSTEM</h1></div>
//                     <div className='px-20  py-3'><p>A sprinkler system is a critical component of any building’s fire safety plan. It consists of a network of pipes and sprinkler heads that are installed throughout the building and connected to a pressurized water supply. When a fire is detected, the sprinkler system activates and sprays water onto the flames, helping to extinguish the fire and prevent it from spreading.</p></div>
//                   </div>
                  
//                 </div>
//               </div>
// </div>
// {/* -------- */}
// <div className=' px-20 py-20'>
//               <div class="container flex justify-around">
//                 <div class=" row flex ">
                
//                   <div class="">
//                     <div className='text-3xl font-bold flex justify-center py-2'><h1>FOAM POURER SYSTEM</h1></div>
//                     <div className=' py-3'><p>When it comes to fire protection, traditional water-based sprinkler systems may not always be the best choice. Certain types of fires, such as those involving flammable liquids or gases, can actually be spread and made more dangerous by the use of water. That’s where foam pourer systems come in – they are a highly effective alternative to traditional sprinkler systems that can suppress these types of fires more efficiently.</p></div>
//                   </div>
//                   <div class=" ">
//                     <div className=' px-20'>
//                     <img className=' h-80 max-w-lg rounded-3xl' src={`${fire3}`}></img>
//                     </div>
//                   </div>

//                 </div>
//               </div>
// </div>
// {/* ----- */}
// <div className=' px-20 py-20'>
//               <div class="container flex justify-around">
//                 <div class=" row flex ">
//                 <div class=" ">
//                     <div className=''>
//                     <img className=' h-80 max-w-lg rounded-3xl' src={`${fire4}`}></img>
//                     </div>
//                   </div>
//                   <div class="">
//                     <div className='text-3xl font-bold flex justify-center py-2'><h1>INDUSTRIAL FIRE SAFETY EQUIPMENTS</h1></div>
//                     <div className='px-10  py-3'><p>Industrial fire safety equipment is essential for protecting both personnel and property in industrial environments where there is a high risk of fire. We offer a wide range of industrial fire safety equipment to help you prevent, detect, and extinguish fires in your facility.</p></div>
//                   </div>
                  
//                 </div>
//               </div>
// </div>
// {/* ----------------------------------------------------------------------------------- */}
// <div className='py-10 px-20  bg-gray-200'>

//         <div className=' flex justify-center text-4xl font-bold'><h1> All Products</h1></div>
//         <div className='flex space-x-5'>
//             <div className='card  py-10' style={{
//                 width:"20rem"
//             }}>
//                 <img src={`${cart1}`} className='border rounded-lg' />
//                 <div className=''>
//                     <h5 className='text-gray-400'>Safety Equipment</h5>
//                     <h2 className=''>2 Way Breeching Inlet Valve</h2>
//                     <p className=''>₹1800.00</p>
//                     <br/>
//                     <button className='text-xl border border-red-500 text-red-500 hover:bg-red-500 hover:text-white text-red  px-2 py-1  '>Add To Cart</button>
//                     <br/><br/>
//                     <a href='enquiry-now' className='text-white block text-center px-4 py-2 bg-red-500'>ENQUIRY NOW</a>
//                 </div>
//             </div>
            
//             <div className='card py-10   w-full' style={{
//                 width:"20rem"
//             }}>
//                 <img src={`${cart2}`} className='border rounded-md' />
//                 <div className=''>
//                     <h5 className='text-gray-400'>Safety Equipment</h5>
//                     <h2 className=''>A Hunt Fire Alarm Control Panel</h2>
//                     <p className=''>₹18000.00</p>
//                     <br/>
//                     <button className='text-xl border border-red-500 text-red-500 hover:bg-red-500 hover:text-white text-red  px-2 py-1  '>Add To Cart</button>
//                     <br/><br/>
//                     <a href='enquiry-now' className='text-white block text-center px-4 py-2 bg-red-500'>ENQUIRY NOW</a>
//                 </div>
//             </div>

//             <div className='card w-1/4  py-10' style={{
//                 width:"20rem"
//             }}>
//                 <img src={`${cart3}`} className='border rounded-md' />
//                 <div className=''>
//                     <h5 className='text-gray-400'>Safety Equipment</h5>
//                     <h2 className=''>A Hunt Fire Alarm Hooter</h2>
//                     {/* <div class=""><span style="">Rated <strong class="">0</strong> out of 5</span></div> */}
//                     <p className=''>₹850.00</p>
//                     <br/>
//                     <button className='text-xl border border-red-500 text-red-500 hover:bg-red-500 hover:text-white text-red  px-2 py-1  '>Add To Cart</button>
//                     <br/><br/>
//                     <a href='enquiry-now' className='text-white block text-center px-4 py-2 bg-red-500'>ENQUIRY NOW</a>
//                 </div>
//             </div>

//             <div className='card   py-10' style={{
//                 width:"20rem"
//             }}>
//                 <img src={`${cart4}`} className='border rounded-md ' />
//                 <div className=''>
//                     <h5 className='text-gray-400'>Safety Equipment</h5>
//                     <h2 className=''>Agni Emergency Exit Light</h2>
//                     {/* <div class=""><span style="">Rated <strong class="">0</strong> out of 5</span></div> */}
//                     <p className=''>₹2650.00</p>
//                     <br/>
//                     <button className='text-xl border border-red-500 text-red-500 hover:bg-red-500 hover:text-white text-red  px-2 py-1  '>Add To Cart</button>
//                     <br/><br/>
//                     <a href='enquiry-now' className='text-white block text-center px-4 py-2 bg-red-500'>ENQUIRY NOW</a>
//                 </div>
//             </div>
            

//         </div>
//         {/* ----- */}
//         <div className='flex space-x-5'>
//             <div className='card ' style={{
//                 width:"20rem"
//             }}>
//                 <img src={`${cart5}`} className='border rounded-lg' />
//                 <div className=''>
//                     <h5 className='text-gray-400'>Safety Equipment</h5>
//                     <h2>Anti Shock Helmet</h2>
//                     <p>₹3500.00</p>
//                     <br/>
//                     <button className='text-xl border border-red-500 text-red-500 hover:bg-red-500 hover:text-white text-red  px-2 py-1  '>Add To Cart</button>
//                     <br/><br/>
//                     <a href='enquiry-now' className='text-white block text-center px-4 py-2 bg-red-500'>ENQUIRY NOW</a>
//                 </div>
//             </div>
            
//             <div className='card   w-full' style={{
//                 width:"20rem"
//             }}>
//                 <img src={`${cart6}`} className='border rounded-md' />
//                 <div className=''>
//                     <h5 className='text-gray-400'>Safety Equipment</h5>
//                     <h2>Brass Ball Valve</h2>
//                     <p>₹100.00</p>
//                     <br/>
//                     <button className='text-xl border border-red-500 text-red-500 hover:bg-red-500 hover:text-white text-red  px-2 py-1  '>Add To Cart</button>
//                     <br/><br/>
//                     <a href='enquiry-now' className='text-white block text-center px-4 py-2 bg-red-500'>ENQUIRY NOW</a>
//                 </div>
//             </div>

//             <div className='card w-1/4' style={{
//                 width:"20rem"
//             }}>
//                 <img src={`${cart7}`} className='border rounded-md' />
//                 <div className=''>
//                     <h5 className='text-gray-400'>Safety Equipment</h5>
//                     <h2 className=''>Disposable Nitrile Gloves</h2>
//                     {/* <div class=""><span style="">Rated <strong class="">0</strong> out of 5</span></div> */}
//                     <p className=''>₹210.00</p>
//                     <br/>
//                     <button className='text-xl border border-red-500 text-red-500 hover:bg-red-500 hover:text-white text-red  px-2 py-1  '>Add To Cart</button>
//                     <br/><br/>
//                     <a href='enquiry-now' className='text-white block text-center px-4 py-2 bg-red-500'>ENQUIRY NOW</a>
//                 </div>
//             </div>

//             <div className='card' style={{
//                 width:"20rem"
//             }}>
//                 <img src={`${cart8}`} className='border rounded-md ' />
//                 <div className=''>
//                     <h5 className='text-gray-400'>Safety Equipment</h5>
//                     <h2 className=''>Double Door Fire Hose Box</h2>
//                     {/* <div class=""><span style="">Rated <strong class="">0</strong> out of 5</span></div> */}
//                     <p className=''>₹10000.00</p>
//                     <br/>
//                     <button className='text-xl border border-red-500 text-red-500 hover:bg-red-500 hover:text-white text-red  px-2 py-1  '>Add To Cart</button>
//                     <br/><br/>
//                     <a href='enquiry-now' className='text-white block text-center px-4 py-2 bg-red-500'>ENQUIRY NOW</a>
//                 </div>
//             </div>
            

//         </div>

// </div>

//     <Footer/>
//     </div>
//   )
// }

// export default Products