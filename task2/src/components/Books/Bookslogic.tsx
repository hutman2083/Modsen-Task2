import React from "react";
import Search from "../SearchArea/Search";

class Books extends React.Component{
    constructor(props: {} | Readonly<{}>){
        super(props);
        this.state = {
            books: [],
            searchField: ''
    }
}
    
    render() {
        return(
            <div className="books">
                <Search onSearch={function (books: any[]): void {
                    throw new Error("Function not implemented.");
                } }/>
            </div>
        )
    }
}

export default Books;