import styled from 'styled-components';
import check from '../../assets/check.png';
import colors from '../../styles/colors';
import { checkHabit, uncheckHabit } from '../../services/api';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import ProgressContext from '../../contexts/ProgressContext';

export default function Habit({ habit, habits, setHabits }) {
    const { user } = useContext(UserContext);
    const { setProgress } = useContext(ProgressContext);

    function changeHighestSequence(highestSequence, currentSequence, isCheck) {
        if (isCheck && highestSequence === currentSequence) {
            return highestSequence + 1;
        }
        if (!isCheck && highestSequence === currentSequence) {
            return highestSequence - 1;
        }
        return highestSequence;
    }

    function handlePromise(promise, isCheck) {
        promise
            .then(() => {
                const newHabits = habits.map((el) => {
                    if (el.id === habit.id) {
                        return {
                            ...el,
                            done: isCheck ? true : false,
                            currentSequence: isCheck
                                ? el.currentSequence + 1
                                : el.currentSequence - 1,
                            highestSequence: changeHighestSequence(
                                el.highestSequence,
                                el.currentSequence,
                                isCheck
                            ),
                        };
                    }
                    return el;
                });
                const doneHabits = newHabits.filter((el) => el.done);
                setProgress(
                    Math.round((doneHabits.length / habits.length) * 100)
                );
                setHabits(newHabits);
            })
            .catch((err) => {
                if (err.response.status === 400) {
                    alert(
                        `Não foi possível ${
                            isCheck ? 'marcar' : 'desmarcar'
                        } o hábito. Recarregue a página e tente novamente`
                    );
                } else {
                    alert('Um erro inesperado ocorreu');
                }
            });
    }

    function handleClick() {
        if (!habit.done) {
            const promise = checkHabit(habit.id, user.token);
            handlePromise(promise, true);
        } else {
            const promise = uncheckHabit(habit.id, user.token);
            handlePromise(promise, false);
        }
    }

    return (
        <Container>
            <div>
                <HabitTitle>{habit.name}</HabitTitle>
                <SequenceAndRecord habit={habit}>
                    <p>
                        Sequência atual:{' '}
                        <span>
                            {habit.currentSequence === 1
                                ? habit.currentSequence + ' dia'
                                : habit.currentSequence + ' dias'}
                        </span>
                    </p>
                    <p>
                        Seu recorde:{' '}
                        <span>
                            {habit.highestSequence === 1
                                ? habit.highestSequence + ' dia'
                                : habit.highestSequence + ' dias'}
                        </span>
                    </p>
                </SequenceAndRecord>
            </div>
            <CheckBox done={habit.done} onClick={handleClick}>
                <img src={check} alt="Botão de marcar hábito" />
            </CheckBox>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    border-radius: 5px;
    background-color: white;
    padding: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div:first-child {
        width: 70%;
    }
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

    p:first-child span {
        color: ${({ habit }) => (habit.done ? colors.green : 'inherit')};
    }

    p:last-child span {
        color: ${({ habit }) =>
            habit.currentSequence === habit.highestSequence &&
            habit.highestSequence !== 0
                ? colors.green
                : 'inherit'};
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
