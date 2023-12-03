import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle, faChartPie, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  // useEffect(() => {
  //   // Initialize VanillaTilt on each card
  //   VanillaTilt.init(document.querySelectorAll('.card'), {
  //     max: 25,
  //     speed: 400,
  //     glare: true,
  //     'max-glare': 0.8,
  //   });
  // }, []);

  return (
    <div className='mt-5'>

      <main className='d-flex top' style={{height:'615px'}}>
        <div className='fst-italic text-center' style={{ fontFamily: 'Roboto Slab,serif', padding: '120px', paddingTop:'150px', width: '75%'}}>
          <p className='mb-4' style={{ fontWeight: '700', fontSize: '2.7em', color: '#053B50' }}>Welcome to our Newsletter Plugin website!</p>
          <p style={{ marginBottom: '80px', color: '#053B50', fontSize: '1.3em' }}>where we transform your email marketing efforts into seamless and effective campaigns that captivate and connect with your audience.</p>
          <p className='text-dark'>Get started on your email marketing journey with just one click – <button className='btn rounded-pill' style={{ backgroundColor: '#053B50' }}><a className='text-decoration-none fw-bold' style={{ color: '#EEE' }} href="signup">Sign up</a></button> now!</p>
        </div>
        <div className="d-flex align-items-center" style={{ width: '25%' }} >
          <img 
          src='\gif2.gif'
          width={250} height={250} 
          alt='main' />
        </div>
      </main>


    <section className='temp' style={{marginTop:'-20px', fontFamily: 'Roboto Slab,serif'}} id='intro'>
    <p className=' display-4 p-2 mb-4 shadow rounded-pill text-center fw-bold fst-italic'  style={{color:'#F6F4EB', backgroundColor:'#4E6E81',  marginTop:'-50px'}}>Why Choose Us?</p>
    <div className="container py-4">
    <div className="p-5 mb-3 rounded-3" style={{marginTop:'-10px', backgroundColor:'#B6BBC4'}}>
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
      <div className="col-md-6">
        <div className="h-100 p-5 text-light rounded-3" style={{backgroundColor:'#31304D'}}>
          <h2>Effortless Creation and Management</h2>
          <p className='fst-italic'>Gone are the days of intricate newsletter creation. With MailMagnet, you embark on a journey of effortless newsletter design and management. Our intuitive platform streamlines the entire process, ensuring that even those with no design or technical background can craft professional and visually stunning newsletters.</p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="h-100 p-5 border rounded-3" style={{backgroundColor:'#F0ECE5'}}>
          <h2>Connect with Your Audience</h2>
          <p className='fst-italic'>Connecting with your audience shouldn't be a cumbersome task. MailMagnet simplifies this crucial aspect, providing you with tools that foster meaningful engagement. Whether you're a business aiming to strengthen client relationships or an individual sharing your passion, our platform ensures that your messages resonate with impact.</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* <div className='text-center temp' id='templates' style={{ padding: '80px',fontFamily: 'Roboto Slab, serif' }}>
        <p className='fw-bold px-5 display-6 fst-italic' style={{ color: '#053B50' }}>Select the Perfect Template</p>
        <div className='row mt-5 justify-content-between'>
          <div className="col-md-4 cards mb-4">
            <div className='card' style={{ width: '',  border: 'none' }}>
            <img src='https://eep.io/images/yzco4xsimv0y/2JmLe4nexVhHNLNQaX9R84/3575d029428669854b5e806b30869e99/Paid_Lander_Newsletters_Hero-min.png?w=1520&fm=avif&q=60' className='card-img-top' alt='img'/>
            <div className='card-body' style={{backgroundColor: '#053B50', paddingLeft:'50px', paddingRight: '50px'}}>
              <p className='card-title fst-italic text-light display-6'>Modern Minimalist</p>
              <p className='card-text text-light my-4'>Choose this template for a clean and sleek design that lets your content shine.</p>
              <a href='#' className='btn w-100 fw-bold mb-3 button' style={{backgroundColor: '#176B87', color:'#EEEEEE'}}>Select</a>
              
            </div>
          </div>
          </div>
          <div className='col-md-4 cards mb-4'>
            <div className='card' style={{ width: '', border: 'none' }}>
            <img src='https://eep.io/images/yzco4xsimv0y/2JmLe4nexVhHNLNQaX9R84/3575d029428669854b5e806b30869e99/Paid_Lander_Newsletters_Hero-min.png?w=1520&fm=avif&q=60' className='card-img-top' alt='img'/>
            <div className='card-body' style={{backgroundColor: '#053B50', paddingLeft:'50px', paddingRight: '50px'}}>
              <p className='card-title fst-italic text-light display-6'>Modern Minimalist</p>
              <p className='card-text text-light my-4'>Choose this template for a clean and sleek design that lets your content shine.</p>
              <a href='#' className='btn w-100 fw-bold mb-3 button' style={{backgroundColor: '#176B87', color:'#EEEEEE'}}>Select</a>
              
            </div>
          </div>
          </div>
          <div className='col-md-4 cards mb-4'>
            <div className='card' style={{ width: '', border: 'none' }}>
            <img src='https://eep.io/images/yzco4xsimv0y/2JmLe4nexVhHNLNQaX9R84/3575d029428669854b5e806b30869e99/Paid_Lander_Newsletters_Hero-min.png?w=1520&fm=avif&q=60' className='card-img-top' alt='img'/>
            <div className='card-body' style={{backgroundColor: '#053B50', paddingLeft:'50px', paddingRight: '50px'}}>
              <p className='card-title fst-italic text-light display-6'>Modern Minimalist</p>
              <p className='card-text text-light my-4'>Choose this template for a clean and sleek design that lets your content shine.</p>
              <a href='#' className='btn w-100 fw-bold mb-3 button' style={{backgroundColor: '#176B87', color:'#EEEEEE'}}>Select</a>
            </div>
          </div>
          </div>
          </div>
          </div> */}

    <div className='px-5 feat' id='features'  style={{ padding: '120px', fontFamily: 'Roboto Slab, serif' }}>
    <p className=' display-4 p-2 mb-4 shadow rounded-pill text-center fw-bold fst-italic'  style={{color:'#053B50', backgroundColor:'#D8D9DA', width:'70%', marginLeft:'190px', marginTop:'-50px'}}>Features we Provide</p>
      <div className='row g-4 py-5 row-cols-1 row-cols-lg-3'>
        <div className='feature col'>
          <div className='d-inline-flex align-items-center justify-content-center fs-1 mb-2'>
            <FontAwesomeIcon icon={faShuffle} />
          </div>
          <h3 className='fs-3 fw-bold mt-3 mb-4' style={{color:'#053B50'}}>Seamless Integration</h3>
          <p style={{fontSize:'0.9em', color:'#053B50', fontStyle:'italic'}}>"Our newsletter plugin offers seamless integration with popular content management systems like WordPress, Joomla, and Drupal. With just a few clicks, you can effortlessly integrate our plugin into your website, ensuring a hassle-free setup process. Say goodbye to complex installation procedures and hello to a user-friendly experience."</p>
        </div>
        <div className='feature col'>
          <div className='d-inline-flex align-items-center justify-content-center fs-1 mb-2'>
          <FontAwesomeIcon icon={faChartPie} />
          </div>
          <h3 className='fs-3 fw-bold mt-3 mb-4' style={{color:'#053B50'}}>Advanced Analytics</h3>
          <p style={{fontSize:'0.9em', color:'#053B50', fontStyle:'italic'}}>"Gain valuable insights into your email campaigns with our advanced analytics feature. Track open rates, click-through rates, subscriber engagement, and more in real-time. With this data at your fingertips, you can fine-tune your newsletter content and strategies for optimal results, ensuring your messages reach and resonate with your target audience."</p>
        </div>
        <div className='feature col'>
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
<script>
  var rellax = new Rellax('.rellax');
</script>
    </div>
  )
}


export default Home
