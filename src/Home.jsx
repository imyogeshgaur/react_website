import React from 'react'
import img from '../src/img/weather.jpg';
const Home = () =>{
return(
    <>
    <section id="header" className='d-flex align-item-center'>
    <div className="container-fluid nav_bg">
        <div className="row">
             <div className="col-10 mx-auto">
             <div className="row">
               <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-item-center justify-content-center flex-column">
                  <h1>
                    Grow Your Business with <strong className="brand-name"> Yogesh Gaur</strong> 
                  </h1>

                  <h2 className='my-3'>
                    We are the team of talented developer making website
                  </h2>
                  <div className="mt-3">
                  <a href="" className='btn btn-outline-primary'> Get Started
                  </a>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                   <img src={img} alt="home.img"/>
                </div>
                </div>
             </div>
        </div>
    </div>
    </section>
   </>
);
}

export default Home;