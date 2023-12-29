import writings from '../writings';
import './gradient.css';

function Writing() {
  return (
    <>
      <div
        className='container'
      >
        <header className='name'>
          <p className='text-start mb-0 pt-2 mt-3 border-start ps-3 mb-5 p-1 border-5 border-primary fs-5 text'>
          “Quality is not an act; it is a habit” <i>Aristotle.</i>
          </p>
        </header>
        <div className='ms-0 ps-0 mt-2 text-with-gradient'></div>
        <div className='container ms-2 m-0 p-0 mt-4 fs-4 text'>
          {writings.map((writing, index) => (
            <div key={index}>
              <figure>
                <blockquote className='blockquote fs-5 text'>
                  <p>
                    <a className='link-underline-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover' target='_blank' href={writing.link}>
                      {writing.title}
                    </a>
                  </p>
                </blockquote>
                <figcaption className='blockquote-footer text-body-secondary'>
                  {writing.content} @
                  <cite title='Source Title'>
                    {' '}
                    {writing.author} - {writing.date}{' '}
                  </cite>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Writing;
