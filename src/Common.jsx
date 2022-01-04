import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import web from "../src/mages/iStock-1072470136.jpg"
const Common = (props) => {
    return (
        <>
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
       <div className="row">
           <div className="col-10 mx-auto">
           <div className='row'>
           <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center-flex-column">
               <h1>
               {props.name}
                 <strong classNme='brand-name'> 
                 Famous Tutorials </strong>
               </h1>
               <h2 
               Join Famous tutorials and Make your studies easier
                className="my-3">
               </h2>
               <div className='mt-3'>
                   <NavLink to={props.visit} className=" btn-Get - started -and -make- your-studies- easier">
                   {props.btname}{""}
                    </NavLink>
               </div>
           </div>
           <div className='col-lg-6 order-1 order-lg-2 header-img'>
               <img src={props.imgsrc} className='img-fluid-animated' alt="Common.img" />
           </div>
           </div>
           </div>
           </div>

           </div>

        </section>

        </>
    );
};
export default Common;