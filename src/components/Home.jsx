import './gradient.css';
import Skills from './Skills';

function Home() {
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
            Web Applications enthusiast and dynamic engineer skilled in react
            development, <br /> quality assurance, and agile practices.
          </p>
        </header>
        <div className="mt-2 mb-5 text-with-gradient">Skills</div>{' '}
        <p>
          A passionate frontend developer from Germany. This is a long paragraph
          written to show how the
        </p>
        <p className="text-body-secondary">
          Latest writing{' '}
          <a href="#" className="text-reset">
            reset link
          </a>
          .
        </p>
        <Skills />
      </div>
    </>
  );
}

export default Home;
