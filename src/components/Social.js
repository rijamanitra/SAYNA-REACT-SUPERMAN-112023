import React from 'react'
import facebook from '../assets/icones/facebook.png';
import instagram from '../assets/icones/instagram.png';
import twitter from '../assets/icones/twitter.png';
import '../styles/social.scss';
import { Link } from 'react-router-dom';

function social() {
  return (
      <div className="container">
          <div className="scroll">
              <Link href="#header"
              ><img
                      className="arrow2 hoveryellow"
                      src=""
                      alt="" /></Link
              ><img
                  className="social hoveryellow"
                  src={facebook}
                  alt=""
              />
              <img
                  className="social hoveryellow"
                  src={instagram} 
                  alt=""
              /><img
                  className="social hoveryellow"
                  src={twitter}
                  alt=""
              />
              <Link href="#contact"
              ><img
                      className="arrow2 hoveryellow"
                      src=""
                      alt=""
                  /></Link>
      </div>
  

</div>

  )
}

export default social