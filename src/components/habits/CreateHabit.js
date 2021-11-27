import styled from 'styled-components';
import Input from '../../shared/input';
import Day from './Day';
import Button from '../../shared/button';
import colors from '../../styles/colors';
import { createHabit } from '../../services/api';
import { useContext, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import { Ellipsis } from 'react-spinners-css';

export default function CreateHabit({ habitInfo, setHabitInfo, setShowBox }) {
    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const [loading, setLoading] = useState(false);
    const { user } = useContext(UserContext);

    function saveHabit() {
        if (habitInfo.name && habitInfo.days.length) {
            setLoading(true);
            const promise = createHabit(habitInfo, user.token);
            promise
                .then((res) => {
                    console.log(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error(err.response);
                    setLoading(false);
                });
        }
        if (!habitInfo.name) {
            alert('Digite o nome do hábito');
        }
        if (!habitInfo.days.length) {
            alert('Selecione pelo menos um dia');
        }
    }

    return (
        <Container>
            <Input
                placeholder="nome do hábito"
                onChange={(e) =>
                    setHabitInfo({ ...habitInfo, name: e.target.value })
                }
                disabled={loading}
            />
            <Days>
                {days.map((day, i) => (
                    <Day
                        key={i}
                        day={day}
                        dayIndex={i}
                        habitInfo={habitInfo}
                        setHabitInfo={setHabitInfo}
                        disabled={loading}
                    />
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
                    onClick={() => setShowBox(false)}
                    disabled={loading}
                >
                    Cancelar
                </Button>
                <Button
                    width="84px"
                    height="35px"
                    fontSize="15.98px"
                    lineHeight="19.97px"
                    onClick={saveHabit}
                    disabled={loading}
                >
                    {loading ? <Ellipsis color="white" /> : 'Salvar'}
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
