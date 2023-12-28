import { Link } from 'react-router-dom';
import ThemeIcon from './ThemeIcon';

function Footer() {
  return (
    <footer className="fixed-bottom ms-5" style={{ width: '25%', left: 0, bottom: 0 }}>
      <ThemeIcon />
      <div className="container">
      
        <hr className="featurette-divider mb-3"></hr>
        
        <div className="d-flex justify-content-between">
          <p>
            © 2023 Ayhan Metin ·&nbsp; 
            <a
              className="text-decoration-underline text-reset"
              href="#"
            >
              Privacy
            </a>{' '}
          </p>
          <p>
            <Link
              className="text-decoration-underline text-reset"
              to="/"
            >
              home
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
