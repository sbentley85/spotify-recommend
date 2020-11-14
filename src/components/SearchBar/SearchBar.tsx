import React from 'react';
import SearchButton from './SearchButton'
import SearchInput from './SearchInput'

const SearchBar = (props: any) => {
    return (
        <div id="searchbar">

            <SearchInput onChange={props.updateSearchTerm}/>
            <SearchButton onSearch={props.onSearch}/>
        </div>
    );
};

export default SearchBar;