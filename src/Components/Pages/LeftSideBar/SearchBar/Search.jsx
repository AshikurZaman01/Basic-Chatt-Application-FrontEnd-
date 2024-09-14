import React, { useState, useEffect } from 'react';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // This function handles the search logic
    const performSearch = (query) => {
        // Replace this with your actual search logic
        console.log('Searching for:', query);
    };

    // This effect runs whenever searchTerm changes
    useEffect(() => {
        if (searchTerm.trim()) {
            performSearch(searchTerm);
        }
    }, [searchTerm]);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleReset = () => {
        setSearchTerm('');
    };

    return (
        <div className="bg-orange-800 p-2 rounded-lg shadow-inner">
            <div className="w-full mx-auto">
                <label className="flex items-center gap-2 bg-orange-700 rounded-md p-2">
                    <input 
                        type="text" 
                        value={searchTerm}
                        onChange={handleInputChange}
                        className="flex-grow p-2 bg-transparent border-none text-white focus:outline-none" 
                        placeholder="Search users..." 
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-6 w-6 text-white">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                    {searchTerm && (
                        <button
                            onClick={handleReset}
                            className="text-white ml-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-6 w-6">
                                <path
                                    fillRule="evenodd"
                                    d="M8 1a7 7 0 1 1-7 7A7 7 0 0 1 8 1zM2.293 8.293a1 1 0 0 1 1.414 1.414L4 9.414l4-4 1.293 1.293a1 1 0 0 1 1.414-1.414L8 6.586 2.293 8.293z"
                                    clipRule="evenodd" />
                            </svg>
                        </button>
                    )}
                </label>
            </div>
        </div>
    );
};

export default Search;
