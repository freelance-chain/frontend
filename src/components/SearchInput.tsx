import React from "react";

interface SearchInputProps {
  width: number;
  bgColor: string
  btnTop: string
  btnRight: string
  height: number
  btnWidth?:number
  btnHeight?:number
}

const SearchInput: React.FC<SearchInputProps> = ({ width, bgColor="transparent", btnRight="1", btnTop="1",height, btnHeight=4,btnWidth=4 }) => {
  console.log(btnWidth);
  
  return (
    <div className={`w-full`}>
      <div className="relative">
        <input
          style={{ width: width, height:height }}
          className={`w-full bg-${bgColor} placeholder:text-slate-400 text-slate-700 text-sm border border-slate-400 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
          placeholder="Search for any service..."
        />
        <button
          className={`absolute top-${btnTop} right-${btnRight} flex items-center rounded bg-sky-600 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`mr-2`} style={{width: btnWidth, height:btnHeight}}>
            <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default SearchInput