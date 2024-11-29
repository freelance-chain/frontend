import { Link } from 'react-router-dom'
import SearchContainer from './SearchContainer'
import Services from './Services'
import TopProfiles from './TopProfiles'

const HomePage = () => {
  const user = null;
  return (
    <div className='lg:mt-16 lg:mb-16 flex flex-col justify-center items-center'>
      {user ? (
        <div></div>
      ) : (
        <div className='flex flex-col justify-center items-center'>
          <SearchContainer />
          <Services />
          <TopProfiles />
          <div className='lg:w-3/4 lg:mt-32 lg:p-8 flex flex-col justify-center items-center bg-sky-900 rounded-xl'>
            <h1 className='text-white text-4xl font-sans mt-2'> Make your next game-changing hire right now. </h1>
            <Link to={'/sign-up'} className='lg:mt-8 text-center text-white rounded-lg border lg:p-2 lg:w-48 bg-sky-600 hover:bg-white hover:text-sky-600 transition duration-300 ease-in-out'> Get Started </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage