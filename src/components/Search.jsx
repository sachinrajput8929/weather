import React, { useRef } from 'react'

const Search = (props) => {
    const searchInput = useRef();

    const handleChange = (event) => {
        props.eventHandler(event.target.value);
    };

    return (
        <div>
          <div className="max-w-md mt-3 mx-auto"> 
            <h2 className="text-center p-3 text-2xl mt-2 text-black-900 font-bold ">Weather</h2>  
            <div className="relative">
              <input 
                type="search" 
                value={props.searchData} 
                onChange={handleChange} 
                ref={searchInput}  
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Search  ..." 
                required 
              />
              <button 
                onClick={props.searchWeather}   
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      );
      
}

export default Search;
