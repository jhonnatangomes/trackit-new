import styled from 'styled-components';

export default function Day({ day }) {
    return (
        <DayContainer>
            <span>{day}</span>
        </DayContainer>
    );
}

const DayContainer = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #d5d5d5;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        font-size: 19.98px;
        line-height: 24.97px;
        color: #dbdbdb;
    }
`;
