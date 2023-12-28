import './gradient.css';

function TestingHub() {
  return (
    <>
      <div className="container" style={{ marginLeft: 'calc(var(--bs-gutter-x) * 7)', marginTop: '1.5rem' }}>
        <header className="name">
          <p className="text-start mb-0 pt-2 mt-5 border-start ps-3 mb-5 p-1 border-5 border-primary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
            explicabo totam, beatae dolores iure aperiam rerum veritatis dolore
          </p>
        </header>
        <div className="mt-2 text-with-gradient">
          Projects that we
        </div>
        <div className="container mt-4">
          <div className="row">
            {[...Array(7)].map((_, index) => (
              <div key={index} className="col-md-3 mb-2 px-1">
                <div className="card p-0 m-2 h-1" style={{ width: '99%' }}>
                  <div className="card-body p-2">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-1 text-muted">
                      Card subtitle
                    </h6>
                    <p className="card-text">
                      Some quick example text to
                    </p>
                    <a href="#" className="card-link">
                      Card link
                    </a>
                    <a href="#" className="card-link">
                      Another link
                    </a>
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

export default TestingHub;
