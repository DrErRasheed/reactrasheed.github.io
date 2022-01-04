import React, { useState } from 'react';

const Contact = () => {
    const [data,setData] = useState({
Enteryourfullname:'',
phonenumber:'',
emailaddress:'',
message:''


    });

    const InputEvent = (event) => {
        const {name,value} = event.target;
        setData((preval) => {
            return {
                ...preval,
                [name] : value,
            };
        });
    };

    
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.Enteryourfullname}. My mobile number is ${data.phonenumber} and email is ${data.emailaddress},Here is what I want to say ${data.message}`
         );


    };
    return (
        <>
        <div className='my-5'>
            <h1 className='text-center' >Contact Us </h1>
        </div>
        <div className='container contact_div'>
            <div className='row'>
                <div className='col-md-6 col-10 mx-auto'>
                <form onSubmit={formSubmit}>
                <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Enter your full Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1"
  name="Enter your full Name"
  value={data.Enteryourfullname}
  onchange={InputEvent}
   placeholder="Enter your Name"/>
</div>
 <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">phone number</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" 
  name="phone number"
  value={data.phonenumber}
  onchange={InputEvent}
  placeholder="mobile number"/>
</div>
 <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" 
  name="Email Address"
  value={data.emailaddress}
  onchange={InputEvent}
  placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1"
   class="form-label"> Message </label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
  name="Message"
  value={data.message}
  onchange={InputEvent}
  ></textarea>
</div>
 <div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
                </form>

                </div>
            </div>
        </div>
          
        </>
    );
};
export default Contact;