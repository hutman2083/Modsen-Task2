import { ChangeEventHandler } from "react";
import "./style.css"

const Search = (props: { handleSearch: ChangeEventHandler<HTMLInputElement> | undefined; }) => {  
    return (
    <div className="search-area">
        <form action="">
            <input onChange={props.handleSearch} type="text" />
            <button type="submit">Search</button>
            </form>
        
        
    </div>

    )
}

export default Search;