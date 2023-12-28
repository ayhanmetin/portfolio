import './gradient.css';
import githubTesting from '../githubTesting';

function Testing() {
  return (
    <>
      <div
        className='container'
        style={{
          marginLeft: 'calc(var(--bs-gutter-x) * 7)',
          marginTop: '1.5rem',
        }}
      >
        <header className='name'>
          <p className='text-start mb-0 pt-2 mt-5 border-start ps-3 mb-5 p-1 border-5 border-primary'>
          “Quality is never an accident; it is always the result of intelligent effort.” – <i>John Ruskin.</i>
          </p>
        </header>
        <div className='mt-2 text-with-gradient'></div>
        <div className='container mt-4'>
          <div className='row'>
            {githubTesting.map((test, index) => (
              <div key={index} className='col-md-3 mb-1 px-1'>
                <div className='card p-0 m-1 h-1' style={{ width: '99%' }}>
                  <div className='card-body p-2'>
                    <h6 className='card-subtitle p-2 text-muted'>
                      {test.title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </h6>
                    <p className='card-text'>
                      {test.text}&nbsp; » &nbsp;
                      <a href={test.githubLink}className='card-link'>
                        github
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Testing;
