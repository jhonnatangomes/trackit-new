import styled from 'styled-components';
import PageContainer from '../../shared/container';
import colors from '../../styles/colors';
import { useContext, useEffect, useState } from 'react';
import { getHabits } from '../../services/api';
import UserContext from '../../contexts/UserContext';
import { useNavigate } from 'react-router';
import CreateHabit from './CreateHabit';

export default function Habits() {
    const [habits, setHabits] = useState(null);
    const [showBox, setShowBox] = useState(false);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            const promise = getHabits(user.token);
            promise
                .then((res) => setHabits(res.data))
                .catch((err) => {
                    if (err.response.status === 401) {
                        alert('Você não está mais logado!');
                        navigate('/');
                    }
                });
        }
    }, [user]);

    return (
        <PageContainer>
            <MyHabits>
                <span>Meus hábitos</span>
                <div onClick={() => setShowBox(!showBox)}>+</div>
            </MyHabits>
            {showBox ? <CreateHabit /> : ''}
            {habits ? (
                habits.length ? (
                    ''
                ) : (
                    <NoHabitsYet>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um
                        hábito para começar a trackear!
                    </NoHabitsYet>
                )
            ) : (
                ''
            )}
        </PageContainer>
    );
}

const MyHabits = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        font-size: 22.98px;
        line-height: 28.72px;
        color: ${colors.darkBlue};
    }

    div {
        width: 40px;
        height: 35px;
        background-color: ${colors.blue};
        border-radius: 4.63px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 26.98px;
        line-height: 33.72px;
        color: white;
    }
`;

const NoHabitsYet = styled.span`
    display: inline-block;
    font-size: 17.98px;
    line-height: 22.47px;
    color: #666666;
    margin-top: 28px;
`;
