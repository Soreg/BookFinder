import React, { Component } from 'react'
import styled from 'styled-components';

const InputWrapper = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    max-width: 750px;
    margin: 0 auto;

    @media (min-width: 650px) {
        flex-direction: row;
    }
`;

const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 35px;
    font-size: 18px;
    padding: 5px 10px;

    @media (min-width: 650px) {
        width: 80%
    }
`;

const Button = styled.button`
    height: 35px;
    width: 100%
    background: #16c08d;
    border: none;
    color: white;
    font-weight: bold;
    letter-spacing: 1.1px;
    cursor: pointer;

    @media (min-width: 650px) {
        width: 80px;
    }
`;

class SearchInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            searchTerm: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const { searchTerm } = this.state;

        if(searchTerm) {
            this.props.searchBooks(searchTerm);
        }
    }
    

    render() {
        return (
            <InputWrapper onSubmit={this.onSubmit}>
                <Input 
                    placeholder="Search.."
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                />
                <Button>Search</Button>
            </InputWrapper>        
        )
    }
}

export default SearchInput;