import React from "react";
import Search from "../SearchArea/Search";
import request from "superagent";

interface IState {
    books: any[];
    searchField: string;
}

interface IProps {}

class Books extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }

    searchBook = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (this.state.searchField) { // добавляем проверку на пустую строку
            request
                .get("https://www.googleapis.com/books/v1/volumes")
                .query({ q: this.state.searchField })
                .then ((data) => {
                    console.log(data);
                });
        }
    }

    handleSearch = (e: { target: { value: any; }; }) => {
        this.setState({ searchField: e.target.value})
    }

    render() {
        return (
            <div>
                <Search searchBook={this.searchBook} handleSearch={this.handleSearch} />
            </div>
        );
    }
}

export default Books;
