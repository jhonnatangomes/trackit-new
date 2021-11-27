import styled from 'styled-components';
import PageContainer from '../../shared/container';
import colors from '../../styles/colors';

export default function Habits() {
    return (
        <PageContainer>
            <MyHabits>
                <span>Meus hábitos</span>
                <div>+</div>
            </MyHabits>
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
