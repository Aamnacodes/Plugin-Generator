import React from 'react';
import VanillaTilt from 'vanilla-tilt';
import Navbar from './Navbar'
import { color } from 'framer-motion'

const Home = () => {
  return (
    <div className='mt-5'>
    <main className='d-flex'>
      <div className=' fst-italic text-center' style={{fontFamily:'Roboto Slab,serif', backgroundColor: '#176B87', padding: '120px'}}>
       <p className='' style={{fontWeight:'700',fontSize:'2em', color: '#EEEEEE'}}>Welcome to our Newsletter Plugin website!</p>
       <p style={{marginBottom: '80px', color:'#EEE', fontSize:'1.2em'}}>where we transform your email marketing efforts into seamless and effective campaigns that captivate and connect with your audience.</p>
       <p className='text-light'>Get started on your email marketing journey with just one click – <button className='btn rounded-pill' style={{backgroundColor: '#64CCC5'}}><a className='text-decoration-none fw-bold' style={{color:'#053B50'}} href="signup">Sign up</a></button> now!</p>
      </div>
      <div className="d-flex align-items-center" style={{backgroundColor:'#176B87'}}>
        <img style={{marginRight:'100px'}} className='rounded-pill' src='https://wppals.com/wp-content/uploads/2020/09/email-campaign-concept-illustration_114360-1633.jpg' width={400} height={300} alt='main'/>
      </div>
      </main>
      <div className='text-center' style={{padding:'80px',backgroundColor: '#64CCC5', fontFamily:'Roboto Slab, serif'}}>
      <p className='fw-bold px-5' style={{color: '#053B50', fontSize:'1.5em'}}>Select the perfect template for your newsletter from our selection of three distinct designs, each crafted to complement your content and preferences.</p>
      <div className='row mt-5'>
      <div className="col-md-4" data-tilt data-tilt-scale="1.1">
          <div className='card' style={{width:'18rem'}}>
            <img src='https://eep.io/images/yzco4xsimv0y/2JmLe4nexVhHNLNQaX9R84/3575d029428669854b5e806b30869e99/Paid_Lander_Newsletters_Hero-min.png?w=1520&fm=avif&q=60' className='card-img-top' alt='img'/>
            <div className='card-body' style={{backgroundColor: '#053B50', paddingLeft:'50px', paddingRight: '50px'}}>
              <p className='card-title fst-italic text-light display-6'>Modern Minimalist</p>
              <p className='card-text text-light my-4'>Choose this template for a clean and sleek design that lets your content shine.</p>
              <a href='#' className='btn w-100 fw-bold mb-3 button' style={{backgroundColor: '#176B87', color:'#EEEEEE'}}>Select</a>
            </div>
          </div>
        </div>
        <div className='col-md-4' data-tilt data-tilt-glare data-tilt-max-glare="0.8">
          <div className='card' style={{width:'18rem'}}>
            <img src='https://eep.io/images/yzco4xsimv0y/2JmLe4nexVhHNLNQaX9R84/3575d029428669854b5e806b30869e99/Paid_Lander_Newsletters_Hero-min.png?w=1520&fm=avif&q=60' className='card-img-top' alt='img'/>
            <div className='card-body' style={{backgroundColor: '#053B50', paddingLeft:'50px', paddingRight: '50px'}}>
              <p className='card-title fst-italic text-light display-6'>Modern Minimalist</p>
              <p className='card-text text-light my-4'>Choose this template for a clean and sleek design that lets your content shine.</p>
              <a href='#' className='btn w-100 fw-bold mb-3 button' style={{backgroundColor: '#176B87', color:'#EEEEEE'}}>Select</a>
            </div>
          </div>
        </div>
        <div className='col-md-4' data-tilt data-tilt-glare data-tilt-max-glare="0.8">
          <div className='card' style={{width:'18rem'}}>
            <img src='https://eep.io/images/yzco4xsimv0y/2JmLe4nexVhHNLNQaX9R84/3575d029428669854b5e806b30869e99/Paid_Lander_Newsletters_Hero-min.png?w=1520&fm=avif&q=60' className='card-img-top' alt='img'/>
            <div className='card-body' style={{backgroundColor: '#053B50', paddingLeft:'50px', paddingRight: '50px'}}>
              <p className='card-title fst-italic text-light display-6'>Modern Minimalist</p>
              <p className='card-text text-light my-4'>Choose this template for a clean and sleek design that lets your content shine.</p>
              <a href='#' className='btn w-100 fw-bold mb-3 button' style={{backgroundColor: '#176B87', color:'#EEEEEE'}}>Select</a>
            </div>
          </div>
        </div>
      </div>
      </div>
      <footer>

      </footer>
    </div>
  )
}

export default Home;