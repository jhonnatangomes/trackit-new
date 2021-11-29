import styled from 'styled-components';
import PageContainer from '../../shared/container.js';
import colors from '../../styles/colors.js';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { getHabitToday } from '../../services/api.js';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../contexts/UserContext.js';
import Habit from './Habit.js';
dayjs.locale('pt-br');

export default function Today() {
    const [habits, setHabits] = useState(null);
    const { user } = useContext(UserContext);
    console.log(habits);

    useEffect(() => {
        if (user) {
            const promise = getHabitToday(user.token);
            promise.then((res) => setHabits(res.data));
        }
    }, [user]);

    return (
        <PageContainer>
            <Title>
                {dayjs().format('dddd').replace('-feira', '')},{' '}
                {dayjs().format('DD/MM')}
            </Title>
            <HabitPercentage>Nenhum hábito concluído ainda</HabitPercentage>
            <Habits>
                {habits
                    ? habits.map((habit) => (
                          <Habit key={habit.id} habit={habit} />
                      ))
                    : ''}
            </Habits>
        </PageContainer>
    );
}

const Title = styled.span`
    font-size: 22.98px;
    line-height: 28.72px;
    color: ${colors.darkBlue};
    display: inline-block;
    margin-top: 6px;
`;

const HabitPercentage = styled.p`
    font-size: 18px;
    line-height: 22.5px;
    color: #bababa;
`;

const Habits = styled.div`
    margin-top: 28px;

    div:not(:last-child) {
        margin-bottom: 10px;
    }
`;
