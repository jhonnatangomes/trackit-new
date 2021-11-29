import styled from 'styled-components';
import check from '../../assets/check.png';
import colors from '../../styles/colors';

export default function Habit({ habit }) {
    return (
        <Container>
            <div>
                <HabitTitle>{habit.name}</HabitTitle>
                <SequenceAndRecord>
                    <p>
                        Sequência atual:{' '}
                        {habit.currentSequence === 1
                            ? habit.currentSequence + ' dia'
                            : habit.currentSequence + ' dias'}
                    </p>
                    <p>
                        Seu recorde:{' '}
                        {habit.highestSequence === 1
                            ? habit.highestSequence + ' dia'
                            : habit.highestSequence + ' dias'}
                    </p>
                </SequenceAndRecord>
            </div>
            <CheckBox done={habit.done}>
                <img src={check} alt="Botão de marcar hábito" />
            </CheckBox>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 94px;
    border-radius: 5px;
    background-color: white;
    padding: 13px;
    display: flex;
    justify-content: space-between;
`;

const HabitTitle = styled.span`
    font-size: 20px;
    line-height: 25px;
    color: #666666;
`;

const SequenceAndRecord = styled.div`
    margin-top: 7px;

    p {
        font-size: 13px;
        line-height: 16.2px;
        color: #666666;
    }
`;

const CheckBox = styled.div`
    width: 69px;
    height: 69px;
    border-radius: 5px;
    background-color: ${({ done }) => (done ? colors.green : colors.gray)};
    border: ${({ done }) => (done ? 'none' : colors.grayBorder)};
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 35px;
        height: 28px;
    }
`;
