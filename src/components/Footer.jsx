import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className='p-0 m-0 border-top'>
        <ul className='nav justify-content-center mt-4 pb-0 mb-0'>
          <li className='nav-item mb-2'>
            <a
              href='mailto:ayhanmetinde@gmail.com'
              className=' px-2 link-body-emphasis link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover'
            >
              E-mail
            </a>
          </li>
          <li className='nav-item'>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/ayhanmet/'
              className=' px-2 link-body-emphasis link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover'
            >
              Linkedin
            </a>
          </li>
          <li className='nav-item'>
            <a
              target='_blank'
              href='https://github.com/ayhanmetin'
              className='px-2 link-body-emphasis link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover'
            >
              Github
            </a>
          </li>
        </ul>
        <p className='text-center border-'>© 2024 Ayhan Metin</p>
      </footer>
    </>
  );
}
