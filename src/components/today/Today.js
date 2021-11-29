import styled from 'styled-components';
import PageContainer from '../../shared/container.js';
import colors from '../../styles/colors.js';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
dayjs.locale('pt-br');

export default function Today() {
    return (
        <PageContainer>
            <Title>
                {dayjs().format('dddd').replace('-feira', '')},{' '}
                {dayjs().format('DD/MM')}
            </Title>
            <HabitPercentage>Nenhum hábito concluído ainda</HabitPercentage>
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
