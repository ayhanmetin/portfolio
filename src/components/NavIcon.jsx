import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function NavIcon() {
  return (
    <ul>
      <li>
        <a href='https://www.linkedin.com/in/ayhanmet' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} />
          <span className='sr-only'>Linkedin</span>
        </a>
      </li>
      <li>
        <a href='https://www.github.com/ayhanmetin' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faGithub} />
          <span className='sr-only'>Github</span>
        </a>
      </li>
      <li>
        <a href='mailto:ayhanmetinde@gmail.com'>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
    </ul>
  );
}
