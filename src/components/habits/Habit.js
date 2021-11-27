import styled from 'styled-components';
import Days from '../../shared/days';
import Day from './Day';
import deleteIcon from '../../assets/delete.png';
import { deleteHabit } from '../../services/api';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

export default function Habit({ habit, habits, setHabits }) {
    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const { user } = useContext(UserContext);

    function handleClick() {
        const confirm = window.confirm(
            'Você tem certeza que quer deletar esse hábito?'
        );
        if (confirm) {
            const promise = deleteHabit(habit.id, user.token);
            promise
                .then(() => {
                    const newHabits = habits.filter((el) => el.id !== habit.id);
                    setHabits(newHabits);
                })
                .catch(() => {
                    alert(
                        'Um erro inesperado ocorreu. Por favor, recarregue a página'
                    );
                });
        }
    }

    return (
        <Container>
            <HabitTitle>{habit.name}</HabitTitle>
            <Days>
                {days.map((day, i) => (
                    <Day
                        key={i}
                        day={day}
                        habitInfo={habit}
                        dayIndex={i}
                        disabled={true}
                    />
                ))}
            </Days>
            <DeleteIcon
                src={deleteIcon}
                alt="Ícone de deletar"
                onClick={handleClick}
            />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 91px;
    padding: 13px 15px;
    background-color: white;
    border-radius: 5px;
    position: relative;
`;

const HabitTitle = styled.span`
    font-size: 20px;
    line-height: 25px;
    color: #666666;
`;

const DeleteIcon = styled.img`
    width: 13px;
    height: 15px;
    position: absolute;
    right: 10px;
    top: 11px;
`;
