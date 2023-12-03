import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle, faChartPie, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import ScrollReveal from 'scrollreveal';


const Home = () => {

  useEffect(() => {
    ScrollReveal().reveal('.page-title', {
      delay: 100,
      origin: 'top',
      distance: '80px',
      scale: 0.9
    });
    ScrollReveal().reveal('.page-content', {
      delay: 500,
      origin: 'bottom',
      distance: '80px',
      scale: 0.9
    });
    ScrollReveal().reveal('.page-sign', {
      delay: 900,
      origin: 'left',
      distance: '80px',
      scale: 0.9
    });
    ScrollReveal().reveal('.page-gif', {
      delay: 100,
      origin: 'top',
      distance: '80px',
      scale: 0.9
    });

    ScrollReveal().reveal('.info-card', {
      origin: 'top',
      distance: '50px',
      interval: 100
    });
  }, []); 

  return (
    <div className='mt-5'>

      <main className='d-flex top' style={{height:'615px'}}>
        <div className='fst-italic text-center' style={{ fontFamily: 'Roboto Slab,serif', padding: '120px', paddingTop:'150px', width: '75%'}}>
          <p className='mb-4 page-title' style={{ fontWeight: '700', fontSize: '2.7em', color: '#053B50' }}>Welcome to our Newsletter Plugin website!</p>
          <p className='page-content' style={{ marginBottom: '80px', color: '#053B50', fontSize: '1.3em' }}>where we transform your email marketing efforts into seamless and effective campaigns that captivate and connect with your audience.</p>
          <p className='text-dark page-sign'>Get started on your email marketing journey with just one click – <button className='btn rounded-pill' style={{ backgroundColor: '#053B50' }}><a className='text-decoration-none fw-bold' style={{ color: '#EEE' }} href="signup">Sign up</a></button> now!</p>
        </div>
        <div className="d-flex page-gif align-items-center" style={{ width: '25%' }} >
          <img 
          src='\gif2.gif'
          width={250} height={250} 
          alt='main' />
        </div>
      </main>


    <section className='temp' style={{marginTop:'-20px', fontFamily: 'Roboto Slab,serif'}} id='intro'>
    <p className='info-card display-4 p-2 mb-4 shadow rounded-pill text-center fw-bold fst-italic'  style={{color:'#F6F4EB', backgroundColor:'#4E6E81',  marginTop:'-50px'}}>Why Choose Us?</p>
    <div className="container py-4">
    <div className="info-card p-5 mb-3 rounded-3" style={{marginTop:'-10px', backgroundColor:'#B6BBC4'}}>
    <h1 className="display-5 fw-bold">Elevate Your Communication Effortlessly</h1>
    
     <div className='d-flex'>
     <div className="container-fluid " style={{width:'85%'}}>
        <p className="p-3 fst-italic fs-5">In the bustling world of digital communication, our platform stands as a beacon of simplicity and efficiency. Welcome to MailMagnet - your trusted partner in newsletter convenience.
        At MailMagnet, we understand the challenges of crafting and managing compelling newsletters. Our mission is clear: to empower businesses and individuals, enhancing their ability to connect with their audience, elevate communication strategies, and achieve their goals seamlessly.</p>
      </div>
      <div className="d-flex align-items-center" style={{ width: '15%' }} >
          <img 
          src='\letter-1174_256.gif'
          width={150} height={150} 
          alt='main' />
      </div>
      </div>

    </div>

    <div className="row align-items-md-stretch">
      <div className="info-card col-md-6">
        <div className="h-100 p-5 text-light rounded-3" style={{backgroundColor:'#31304D'}}>
          <h2>Effortless Creation and Management</h2>
          <p className='fst-italic'>Gone are the days of intricate newsletter creation. With MailMagnet, you embark on a journey of effortless newsletter design and management. Our intuitive platform streamlines the entire process, ensuring that even those with no design or technical background can craft professional and visually stunning newsletters.</p>
        </div>
      </div>
      <div className="info-card col-md-6">
        <div className="h-100 p-5 border rounded-3" style={{backgroundColor:'#F0ECE5'}}>
          <h2>Connect with Your Audience</h2>
          <p className='fst-italic'>Connecting with your audience shouldn't be a cumbersome task. MailMagnet simplifies this crucial aspect, providing you with tools that foster meaningful engagement. Whether you're a business aiming to strengthen client relationships or an individual sharing your passion, our platform ensures that your messages resonate with impact.</p>
        </div>
      </div>
    </div>
  </div>
</section>


    <div className='px-5 feat' id='features'  style={{ padding: '120px', fontFamily: 'Roboto Slab, serif' }}>
    <p className='info-card display-4 p-2 mb-4 shadow rounded-pill text-center fw-bold fst-italic'  style={{color:'#053B50', backgroundColor:'#D8D9DA', width:'70%', marginLeft:'190px', marginTop:'-50px'}}>Features we Provide</p>
      <div className='row g-4 py-5 row-cols-1 row-cols-lg-3'>
        <div className='info-card feature col'>
          <div className='d-inline-flex align-items-center justify-content-center fs-1 mb-2'>
            <FontAwesomeIcon icon={faShuffle} />
          </div>
          <h3 className='fs-3 fw-bold mt-3 mb-4' style={{color:'#053B50'}}>Seamless Integration</h3>
          <p style={{fontSize:'0.9em', color:'#053B50', fontStyle:'italic'}}>"Our newsletter plugin offers seamless integration with popular content management systems like WordPress, Joomla, and Drupal. With just a few clicks, you can effortlessly integrate our plugin into your website, ensuring a hassle-free setup process. Say goodbye to complex installation procedures and hello to a user-friendly experience."</p>
        </div>
        <div className='info-card feature col'>
          <div className='d-inline-flex align-items-center justify-content-center fs-1 mb-2'>
          <FontAwesomeIcon icon={faChartPie} />
          </div>
          <h3 className='fs-3 fw-bold mt-3 mb-4' style={{color:'#053B50'}}>Advanced Analytics</h3>
          <p style={{fontSize:'0.9em', color:'#053B50', fontStyle:'italic'}}>"Gain valuable insights into your email campaigns with our advanced analytics feature. Track open rates, click-through rates, subscriber engagement, and more in real-time. With this data at your fingertips, you can fine-tune your newsletter content and strategies for optimal results, ensuring your messages reach and resonate with your target audience."</p>
        </div>
        <div className='info-card feature col'>
          <div className='d-inline-flex align-items-center justify-content-center fs-1 mb-2'>
          <FontAwesomeIcon icon={faCommentDots} />
          </div>
          <h3 className='fs-3 fw-bold mt-3 mb-4' style={{color:'#053B50'}}>Improved Communication</h3>
          <p style={{fontSize:'0.9em', color:'#053B50', fontStyle:'italic'}}>"Communication lies at the heart of success. Connecting with your audience shouldn't be a cumbersome task. MailMagnet is designed to enhance your communication strategies, enabling you to convey your message with clarity and style. Say goodbye to convoluted processes and hello to a platform that prioritizes seamless and effective communication."</p>
        </div>
      </div>
    </div>

<footer className="footer" style={{ backgroundColor: '#053B50', color: '#EEEEEE', fontFamily: 'Roboto Slab, serif', padding: '40px 0' }}>
  <div className="container text-center">
    <div className="row">
      <div className="col-md-4">
        <h5 className="mb-4 fw-bold text-decoration-underline">Contact Us</h5>
        <p>123 Main Street</p>
        <p>City, State ZIP</p>
        <p>Email: example@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div className="col-md-4">
        <h5 className="mb-4 fw-bold text-decoration-underline">Quick Links</h5>
        <ul className="list-unstyled social-icon-cont">
          <li className='socialicon'><a className='socialicon' href="#">Home</a></li>
          <li className='socialicon'><a className='socialicon' href="#intro">Why us?</a></li>
          <li className='socialicon'><a className='socialicon' href="#features">Features</a></li>
        </ul>
      </div>
      <div className="col-md-4">
      <h5 className="mb-4 fw-bold text-decoration-underline">Connect With Us</h5>
      <div className='social-icon-cont'>
      <a href="#" className="socialicon"><FontAwesomeIcon icon={faFacebookF} /></a>
      <a href="#" className="socialicon"><FontAwesomeIcon icon={faTwitter} /></a>
      <a href="#" className="socialicon"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="#" className="socialicon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
      </div>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col">
        <p className="text-center">&copy; {new Date().getFullYear()} MailMagnet. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}


export default Home
