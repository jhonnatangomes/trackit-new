import styled from 'styled-components';
import Days from '../../shared/days';
import Day from './Day';

export default function Habit({ habit }) {
    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
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
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 91px;
    padding: 13px 15px;
    background-color: white;
    border-radius: 5px;
`;

const HabitTitle = styled.span`
    font-size: 20px;
    line-height: 25px;
    color: #666666;
`;
