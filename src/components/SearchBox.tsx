import React, {ChangeEventHandler} from "react";

interface ISearchBoxProps extends ISearchChangeProps{
    searchfield:string,
}

interface ISearchChangeProps{
    searchChange: ChangeEventHandler<HTMLInputElement>
}

const SearchBox = ({ searchfield, searchChange }: ISearchBoxProps) => {
    return (
        <div className="pa2">
            <input
                aria-label="Search Robots"
                className='pa3 ba b--green bg-lightest-blue'
                type="search"
                placeholder="search robots"
                onChange={(e) => searchChange(e)} />
        </div>
    )
}

export default SearchBox;