import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

const App = () => {


  return (
    <div className='flex justify-center bg-white dark:bg-[#1c3378] text-stone-900 dark:text-white'>
      <Outlet />
      <ScrollToTop />
    </div>
  );
};

export default App;
