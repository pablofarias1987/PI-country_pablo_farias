import style from '../styles/Home.css';
import Aside from './Aside';
import Countries from './Countries';

const Home = () => {
  return (
    <div className={style.container}>
      <Aside />
      <Countries />
    </div>
  )
}

export default Home;