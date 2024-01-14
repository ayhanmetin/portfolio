import writings from '../writings';
import './gradient.css';

function Writing() {
  return (
    <>
      <div
        className='container'
      >
        <header className='name'>
          <p className='text-start mb-0 pt-2 mt-3 ps-1 mb-4 p-1 fs-6 text'>
          Some writings
          </p>
        </header>
        <hr className='featurette-divider mb-3'></hr>
        <div className='container ms-2 m-0 p-0 mt-4 fs-4 text'>
          {writings.map((writing, index) => (
            <div key={index}>
              <figure>
                <blockquote className='blockquote fs-6 text'>
                  <p>
                    <a className='link-underline-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover' target='_blank' href={writing.link}>
                      {writing.title}
                    </a>
                  </p>
                </blockquote>
                <figcaption className='blockquote-footer text-body-secondary  fs-6 text'>
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
