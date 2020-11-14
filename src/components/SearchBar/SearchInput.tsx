import React from 'react';
import { Input } from 'semantic-ui-react'

const SearchInput = (props: any) => <Input placeholder='Search...' onChange={props.onChange} id='input'/>

export default SearchInput