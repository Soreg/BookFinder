import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import SearchInput from './js/components/SearchInput.jsx';

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: #bedad9;
`;

const Page = styled.div`
  box-sizing: border-box;
  padding: 30px 50px;
  width: 100%;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  text-align: center;
  font-weight: bold;
  font-style: italic;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookResultQuantity: null,
      bookResults: null,
      searchError: false
    }

    this.searchBooks = this.searchBooks.bind(this);
  }

  SetBookResults(result) {
    this.setState({
      bookResultQuantity: result.totalItems,
      bookResults: result.items
    })
  }

  searchBooks(query) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // If returned data has books, set new state
      if(data.items && data.items.length > 0) {
        this.SetBookResults(data)
      }
    }).catch(err => {
      console.log(err);
    }) 
  }

  render() {
    return (
      <Wrapper>
        <Page>
          <Heading>Book Finder</Heading>
          <SearchInput searchBooks={this.searchBooks} />
        </Page>
      </Wrapper>
    );
  }
}

export default App;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;