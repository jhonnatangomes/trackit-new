import styled from 'styled-components';
import Input from '../../shared/input';
import Day from './Day';
import Button from '../../shared/button';
import colors from '../../styles/colors';

export default function CreateHabit() {
    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    return (
        <Container>
            <Input placeholder="nome do hábito" />
            <Days>
                {days.map((day, i) => (
                    <Day key={i} day={day} />
                ))}
            </Days>
            <ButtonsContainer>
                <Button
                    width="69px"
                    height="20px"
                    backgroundColor="white"
                    color={colors.blue}
                    fontSize="15.98px"
                    lineHeight="19.97px"
                >
                    Cancelar
                </Button>
                <Button
                    width="84px"
                    height="35px"
                    fontSize="15.98px"
                    lineHeight="19.97px"
                >
                    Salvar
                </Button>
            </ButtonsContainer>
        </Container>
    );
}

const Container = styled.div`
    width: 100;
    height: 180px;
    background-color: white;
    padding: 18px 18px 15px 18px;
    border-radius: 5px;
    margin-top: 20px;
`;

const Days = styled.div`
    margin-top: 8px;
    display: flex;
    div:not(:last-child) {
        margin-right: 4px;
    }
`;

const ButtonsContainer = styled.div`
    margin-top: 29px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button:first-child {
        margin-right: 23px;
    }
`;
