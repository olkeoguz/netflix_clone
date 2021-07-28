import { ArrowBackOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './watch.scss';

const Watch = () => {
  return (
    <div className='watch'>
      <Link to="/">
        <div className='back'>
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video
        className='video'
        autoPlay
        proggress
        controls
        src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      />
    </div>
  );
};

export default Watch;
