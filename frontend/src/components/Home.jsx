import React, { useEffect } from 'react';

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

      <main className='d-flex hero' style={{height:'615px'}}>
        <div className='fst-italic text-center' style={{ fontFamily: 'Roboto Slab,serif', padding: '120px', paddingTop:'100px'}}>
          <p className='' style={{ fontWeight: '700', fontSize: '2.3em', color: '#053B50' }}>Welcome to our Newsletter Plugin website!</p>
          <p style={{ marginBottom: '80px', color: '#053B50', fontSize: '1.3em' }}>where we transform your email marketing efforts into seamless and effective campaigns that captivate and connect with your audience.</p>
          <p className='text-dark'>Get started on your email marketing journey with just one click – <button className='btn rounded-pill' style={{ backgroundColor: '#053B50' }}><a className='text-decoration-none fw-bold' style={{ color: '#EEE' }} href="signup">Sign up</a></button> now!</p>
        </div>
        <div className="d-flex align-items-center" >
          <img style={{ marginRight: '100px' }} className='rounded-pill' src='https://wppals.com/wp-content/uploads/2020/09/email-campaign-concept-illustration_114360-1633.jpg' width={400} height={300} alt='main' />
        </div>
      </main>

      <div className='text-center temp' id='templates' style={{ padding: '80px',fontFamily: 'Roboto Slab, serif' }}>
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
          </div>

    <div className='px-5 feat border-top' id='features'  style={{ padding: '120px', fontFamily: 'Roboto Slab, serif' }}>
      <p className='pb-2 display-5 mb-5 text-center fw-bold fst-italic'  style={{ color: '#053B50', marginTop:'-50px'}}>Features we provide</p>
      <div className='row g-4 py-5 row-cols-1 row-cols-lg-3'>
        <div className='feature col'>
          <div className='feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3'>
            <svg className='bi' width='1em' height='1em'>
            </svg>
          </div>
          <h3 className='fs-3 fw-bold mt-3 mb-4' style={{color:'#053B50'}}>Seamless Integration</h3>
          <p style={{fontSize:'0.9em', color:'#053B50', fontStyle:'italic'}}>"Our newsletter plugin offers seamless integration with popular content management systems like WordPress, Joomla, and Drupal. With just a few clicks, you can effortlessly integrate our plugin into your website, ensuring a hassle-free setup process. Say goodbye to complex installation procedures and hello to a user-friendly experience."</p>
        </div>
        <div className='feature col'>
          <div className='feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3'>
          <svg className='bi' width='1em' height='1em'>
            </svg>
          </div>
          <h3 className='fs-3 fw-bold mt-3 mb-4' style={{color:'#053B50'}}>Advanced Analytics</h3>
          <p style={{fontSize:'0.9em', color:'#053B50', fontStyle:'italic'}}>"Gain valuable insights into your email campaigns with our advanced analytics feature. Track open rates, click-through rates, subscriber engagement, and more in real-time. With this data at your fingertips, you can fine-tune your newsletter content and strategies for optimal results, ensuring your messages reach and resonate with your target audience."</p>
        </div>
        <div className='feature col'>
          <div className='feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3'>
          <svg className='bi' width='1em' height='1em'>
            </svg>
          </div>
          <h3 className='fs-3 fw-bold mt-3 mb-4' style={{color:'#053B50'}}>Customizable Templates</h3>
          <p style={{fontSize:'0.9em', color:'#053B50', fontStyle:'italic'}}>"Create stunning newsletters that match your brand's identity with our customizable templates. Choose from a wide range of professionally designed templates or personalize your own with our easy-to-use editor. Tailor your newsletters to your audience, giving you the perfect blend of style and substance to captivate your readers."</p>
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
        <ul className="list-unstyled">
          <li><a className='text-decoration-none text-light' href="#">Home</a></li>
          <li><a className='text-decoration-none text-light' href="#templates">Templates</a></li>
          <li><a className='text-decoration-none text-light' href="#features">Features</a></li>
        </ul>
      </div>
      <div className="col-md-4">
        <h5 className="mb-4 fw-bold text-decoration-underline">Connect With Us</h5>
        <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
        <a href="#" className="social-icon"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
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
