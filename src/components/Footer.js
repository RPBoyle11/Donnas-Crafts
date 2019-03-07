import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
    return(
      <footer id='contact-section' class='footer' role='contentinfo'>
        <div class='footer-wrapper'>
          <i><p>If you have any questions about available or previously sold products, please feel free to contact me by email or facebook, and I will get back to you within 24 hours.  Links to both can be found below. </p></i>
          <ul class='social-media-links'>
            <li class='footer-links'>
              <i><a href='/'>© 2019 RP Boyle</a></i>
            </li>
            <li class='footer-links'>
              <a href='https://www.facebook.com/DonnasCraftsnCreations/' target='_blank' rel="noopener noreferrer" aria-label="link to Facebook"><i className="devicon-facebook-plain">Facebook</i></a>
            </li>
            <li class='footer-links'>
              <a href='mailto:dboyle20@comcast.net' target='_blank' rel="noopener noreferrer" aria-label="link to email Donna Boyle"><i className="devicon-gmail-plain">Gmail</i></a>
            </li>
          </ul>
        </div>
      </footer>
    )
}

