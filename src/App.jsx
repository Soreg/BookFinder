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
      bookResults: null,
    }

    this.searchBooks = this.searchBooks.bind(this);
  }

  searchBooks(query) {
    // Search books here
    console.log(query);
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