import React from "react";
import Search from "../SearchArea/Search";

class Books extends React.Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            books: [],
            searchField: ''

        }
    }

    handleSearch = (e: { target: { value: any; }; }) => {
        this.setState({ searchField: e.target.value})
    }

    render() {
        return (
            <div>
                <Search handleSearch={this.handleSearch} />
            </div>
        );
    }
}

export default Books;