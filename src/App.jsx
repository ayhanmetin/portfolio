import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import SiteRoutes from './SiteRoutes';
function App() {
  return (
    <>
      <div
        style={{ margin: '0', padding: '0', marginBottom: '10px' }}
        className="container"
      >
        <div className="row m-0">
          <div className="col-2 pl-0 d-none d-xl-block m-0 p-0">
            <Nav />
          </div>
          <div className="col-12 col-xl-8 align-self-right">
            <SiteRoutes />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;