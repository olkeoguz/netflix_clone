import { useRef } from 'react';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import './home.scss';

const Home = () => {
  const movieListRef = useRef();
  const homeStartRef = useRef();

  const handleForwardClick = () => {
    movieListRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBackClick = () => {
    homeStartRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='home' ref={homeStartRef}>
      <Navbar onForwardClick={handleForwardClick} onBackClick={handleBackClick} />
      <Featured type='movie' />
      <div className='lists' ref={movieListRef}>
        <List />
        <List />
        <List />
        <List />
        <List />
      </div>
    </div>
  );
};

export default Home;
