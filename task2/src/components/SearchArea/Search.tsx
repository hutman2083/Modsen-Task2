import { ChangeEventHandler, FormEventHandler } from "react";
import "./style.css"

const Search = (props: {
    searchBook: FormEventHandler<HTMLFormElement> | undefined; handleSearch: ChangeEventHandler<HTMLInputElement> | undefined; 
}) => {  
    return (
    <div className="search-area">
        <form onSubmit={props.searchBook} action="">
            <input onChange={props.handleSearch} type="text" />
            <button type="submit">Search</button>
            </form>


    </div>

    )
}

export default Search;