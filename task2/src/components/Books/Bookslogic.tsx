import React from "react";
import { render } from '@testing-library/react';
import Search from "../SearchArea/Search";

class Books extends React.Component{
    render() {
        return(
            <div className="books">
                <Search/>
            </div>
        )
    }
}

export default Books;