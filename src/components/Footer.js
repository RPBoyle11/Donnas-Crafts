import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
    return(
      <footer id='contact-section' class='footer' role='content-info'>
        <div class='footer-wrapper'>
          <h2>Contact Info</h2>
          <i><p>If you have any questions about available or previously sold products, please feel free to contact me by email and I will get back to you within 24 hours.  My email address can be found here: </p></i>
          <ul class='social-media-links'>
            <li class='footer-links'>
              <a href='/'>© 2019 RP Boyle</a>
            </li>
            <li class='footer-links'>
              <a href='https://www.linkedin.com/in/rp-boyle/' target='_blank' rel="noopener noreferrer" aria-label="link to LinkedIn"><i className="devicon-linkedin-plain">LinkedIn</i></a>
            </li>
            <li class='footer-links'>
              <a href='https://github.com/rpboyle11' target='_blank' rel="noopener noreferrer" aria-label="link to Github"><i className="devicon-github-plain">Github</i></a>
            </li>
            <li class='footer-links'>
              <a href='mailto:rpboyle11@gmail.com' target='_blank' rel="noopener noreferrer" aria-label="link to email RP Boyle"><i className="devicon-gmail-plain">Gmail</i></a>
            </li>
          </ul>
        </div>
      </footer>
    )
}

