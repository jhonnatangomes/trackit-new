import styled from 'styled-components';
import colors from '../styles/colors';

const Button = styled.button`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background-color: ${({ backgroundColor }) =>
        backgroundColor ? backgroundColor : colors.blue};
    border-radius: 4.63px;
    color: ${({ color }) => (color ? color : 'white')};
    font-size: ${({ fontSize }) => fontSize};
    line-height: ${({ lineHeight }) => lineHeight};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
`;

export default Button;
