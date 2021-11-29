import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    height: 45px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    padding-left: 11px;
    font-size: 19.98px;
    line-height: 24.97px;
    font-family: 'Lexend Deca', sans-serif;
    outline: none;
    background-color: ${({ disabled }) => (disabled ? '#f2f2f2' : 'white')};

    &::placeholder {
        color: #dbdbdb;
    }
`;

export default Input;
