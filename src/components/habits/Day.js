import styled from 'styled-components';
import { useEffect, useState } from 'react';

export default function Day({
    day,
    habitInfo,
    setHabitInfo,
    dayIndex,
    disabled,
}) {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        if (habitInfo.days.includes(dayIndex)) {
            setSelected(true);
        }
    }, []);

    function handleClick() {
        if (!disabled) {
            if (!selected) {
                setHabitInfo({
                    ...habitInfo,
                    days: [...habitInfo.days, dayIndex],
                });
            } else {
                const newDays = habitInfo.days.filter((el) => el !== dayIndex);
                setHabitInfo({ ...habitInfo, days: newDays });
            }
            setSelected(!selected);
        }
    }

    return (
        <DayContainer selected={selected} onClick={handleClick}>
            <span>{day}</span>
        </DayContainer>
    );
}

const DayContainer = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #d5d5d5;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ selected }) => (selected ? '#cfcfcf' : 'white')};

    span {
        font-size: 19.98px;
        line-height: 24.97px;
        color: ${({ selected }) => (selected ? 'white' : '#dbdbdb')};
    }
`;
