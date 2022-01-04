import React from 'react';
import web from "../src/mages/iStock-1072470136.jpg"
import Common from './Common';
const About = () => {
    return (
        <>
        
        <Common 
        name='welcome to About Page'
         imgsrc={web}
          visit='/Contact' 
          btname='Contact now'/>

        </>
    );
};
export default About;