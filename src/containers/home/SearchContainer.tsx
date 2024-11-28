import SearchInput from '../../components/SearchInput'
import { FaMeta, FaMicrosoft, FaPaypal } from "react-icons/fa6";
import { RiNetflixFill } from "react-icons/ri";

const SearchContainer = () => {
    return (
        <div className='w-full flex justify-center items-center lg:p-4'>
            <div className='w-11/12 lg:w-3/4 flex flex-col justify-center items-center bg-sky-600 rounded-xl'>
                <div className='mt-12 p-2 text-center'>
                    <h1 className='text-white lg:text-5xl text-xl'> Find the perfect <strong className='text-blue-800'>freelancer</strong> in just a few clicks </h1>
                </div>
                <div className='lg:mt-16 mb-8 mt-8 flex justify-center items-center'>
                    <div className='lg:flex hidden'>
                        <SearchInput height={60} width={600} bgColor='white' btnRight='1' btnTop='1' btnHeight={42} btnWidth={64}/>
                    </div>
                    <div className='flex lg:hidden'>
                        <SearchInput height={60} width={300} bgColor='white' btnRight='1' btnTop='1' btnHeight={42} btnWidth={28}/>
                    </div>
                </div>
                <div className='lg:mt-16 mt-8 mb-8 lg:mb-16 hidden lg:flex justify-center items-center lg:space-x-10'>
                    <h1 className='font-serif text-gray-300 font-semibold text-xs'> Trusted By: </h1>
                    <FaMeta className='text-5xl text-white'/>
                    <FaMicrosoft className='text-5xl text-white'/>
                    <FaPaypal className='text-5xl text-white'/>
                    <RiNetflixFill className='text-5xl text-white'/>
                </div>
            </div>
        </div>
    )
}

export default SearchContainer