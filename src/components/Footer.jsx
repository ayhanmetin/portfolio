import { Link } from 'react-router-dom';
import ThemeIcon from './ThemeIcon';

function Footer() {
  return (
    <footer
      className='fixed-bottom'
      
    >
      <div className='container'>
        <ThemeIcon />
        <hr className='featurette-divider mb-3'></hr>

        <div className='d-flex justify-content-between'>
          <p>
            © 2023 Ayhan Metin ·&nbsp;
            <a
            target='_blank'
            href='https://www.linkedin.com/in/ayhanmet/'
            className='text-decoration-underline text-reset link-hover'
          >
            linkedin
          </a>
          </p>
          <p>
            <Link className='text-decoration-underline text-reset' to='/'>
              home
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
