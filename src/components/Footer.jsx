import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className='p-0 m-0'>
        <ul className='nav justify-content-center border-top pb-0 mb-0'>
          <li className='nav-item'>
            <a
              href='mailto:ayhanmetinde@gmail.com'
              className='nav-link px-2 text-body-secondary'
            >
              E-mail
            </a>
          </li>
          <li className='nav-item'>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/ayhanmet/'
              className='nav-link px-2 text-body-secondary'
            >
              Linkedin
            </a>
          </li>
          <li className='nav-item'>
            <a
              target='_blank'
              href='https://github.com/ayhanmetin'
              className='nav-link px-2 text-body-secondary'
            >
              Github
            </a>
          </li>
          <li className='nav-item'>
            <a
              target='_blank'
              href='https://instagram.com/ayhanmett'
              className='nav-link px-2 text-body-secondary'
            >
              Instagram
            </a>
          </li>
        </ul>
        <p class='text-center text-body-secondary border-'>
          © 2024 Ayhan Metin
        </p>
      </footer>
    </>
  );
}
