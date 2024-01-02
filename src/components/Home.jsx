import './gradient.css';
import Skills from './Skills';

function Home() {
  return (
    <>
      <div className='container'>
        <header className='name'>
          <p className='text-start mb-0 pt-2 mt-3 border-start ps-3 mb-5 p-1 text'>
            Enthusiast in Web Applications and AI, skilled in frontend
            development, quality assurance, and agile practices.
          </p>
        </header>
        <Skills />
      </div>
    </>
  );
}

export default Home;
