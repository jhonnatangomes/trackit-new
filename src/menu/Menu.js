import styled from 'styled-components';
import colors from '../styles/colors';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

export default function Menu() {
    return (
        <Container>
            <StyledLink>Hábitos</StyledLink>
            <Today>
                <CircularProgressbar
                    value={100}
                    styles={buildStyles({
                        trailColor: 'white',
                    })}
                />
                <span>Hoje</span>
            </Today>
            <StyledLink>Histórico</StyledLink>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    span {
        font-size: 17.98px;
        line-height: 22.47px;
    }
`;

const StyledLink = styled.span`
    color: ${colors.blue};
`;

const Today = styled.div`
    width: 91px;
    height: 91px;
    border-radius: 50%;
    align-self: last baseline;
    margin-bottom: 10px;
    background-color: ${colors.blue};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 6px;
    position: relative;

    span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;