import writings from '../writings';
import './gradient.css';

function Writing() {
  return (
    <>
      <div
        className="container"
        style={{
          marginLeft: 'calc(var(--bs-gutter-x) * 7)',
          marginTop: '1.5rem',
        }}
      >
        <header className="name">
          <p className="text-start mb-0 pt-2 mt-5 border-start ps-3 mb-5 p-1 border-5 border-primary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
            explicabo totam, beatae dolores iure aperiam rerum veritatis dolore
          </p>
        </header>

        <div className="ms-0 ps-0 mt-2 text-with-gradient">Writings</div>

        <div className="container m-0 p-0 mt-4">
          {writings.map((writing, index) => (
            <div key={index}>
              <figure>
                <blockquote className="blockquote fs-5 text">
                  <p>{writing.title}</p>
                </blockquote>
                <figcaption className="blockquote-footer text-body-secondary">
                  {writing.author} @
                  <cite title="Source Title"> {writing.date}</cite>
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
