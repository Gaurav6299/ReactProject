import React, { useState } from 'react'

const Contact = () => {
  const [textarea, setTextArea] = useState("Message")
  return (
    <>
      <section className="contact-section">
        <div className="row">
          <div className="form">
            <h2>CONTACT US</h2>
            <p>To Learn more about being featured,get in touch-we'd love to hear from you!</p>
            <div className="info">
              <input type="text" placeholder='Name*' />
              <input type="text" placeholder='Email*' />
            </div>
            <div className="subject">
              <input type="text" placeholder='Subject*' />
            </div>
            <div className="textarea">
              <textarea placeholder='Message' rows={10} cols={43} />
            </div>
            <button className='btn'>Send</button>
          </div>
          <div className="get-in-touch">
            <h2>Email Us</h2>
            <p>kumargaurav6299@gmail.com</p>
            <h2 className='connect-wth'>Connect With Us</h2>
            <div className='icons'>
              <a href="https://www.facebook.com/" style={{ color: "black" }}>
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/accounts/login/" style={{ color: "black" }}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/feed/" style={{ color: "black" }}>
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <p style={{
              backgroundColor: "black",
              width: "254px"
            }}>The Love Local Collective in a nutshell;</p>

            <p className='para'>Eat|Drink|Sleep|Love Like a Local</p>
            <p style={{ width: "421px" }}>Your comprehensive & always-honest virtual tour guide to all the best things independent, unmissible and local to you.</p>
            <h3>Let's be independent, together!</h3>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact