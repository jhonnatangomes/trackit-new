import styled from 'styled-components';
import PageContainer from '../../shared/container.js';
import colors from '../../styles/colors.js';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { getHabitToday } from '../../services/api.js';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../contexts/UserContext.js';
import Habit from './Habit.js';
import ProgressContext from '../../contexts/ProgressContext.js';
dayjs.locale('pt-br');

export default function Today() {
    const [habits, setHabits] = useState(null);
    const { user } = useContext(UserContext);
    const { progress, setProgress } = useContext(ProgressContext);

    useEffect(() => {
        if (user) {
            const promise = getHabitToday(user.token);
            promise.then((res) => {
                setHabits(res.data);
                const doneHabits = res.data.filter((habit) => habit.done);
                setProgress(
                    Math.round((doneHabits.length / res.data.length) * 100)
                );
            });
        }
    }, [user]);

    return (
        <PageContainer>
            <Title>
                {dayjs().format('dddd').replace('-feira', '')},{' '}
                {dayjs().format('DD/MM')}
            </Title>
            <HabitPercentage progress={progress}>
                {progress
                    ? progress + '% dos hábitos concluídos'
                    : 'Nenhum hábito concluído ainda'}
            </HabitPercentage>
            <Habits>
                {habits
                    ? habits.map((habit) => (
                          <Habit
                              key={habit.id}
                              habit={habit}
                              habits={habits}
                              setHabits={setHabits}
                          />
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
    color: ${({ progress }) => (progress ? colors.green : '#bababa')};
`;

const Habits = styled.div`
    margin-top: 28px;

    & > div {
        margin-bottom: 10px;
    }
`;
