import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <>
      <div className="ms-5">
        <div className="h4 pb-2 mb-4 text-danger border-bottom border-danger mt-5 fw-light fs-3 text">
          The page you're looking for is in another castle!
        </div>
        <Link to="/" className="btn btn-outline-warning mt-5">
          Go to home page
        </Link>
      </div>
    </>
  );
}

export default PageNotFound;
