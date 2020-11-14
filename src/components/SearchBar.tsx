import React from 'react';

const SearchBar = (props: any) => {
    return (
        <div id="searchbar">
            <input type="text" id="input" onChange={props.updateSearchTerm}/>
            <button onClick={props.onSearch}>Search</button>
        </div>
    );
};

export default SearchBar;