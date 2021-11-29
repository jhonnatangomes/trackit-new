import styled from 'styled-components';
import PageContainer from '../../shared/container';
import colors from '../../styles/colors';

export default function History() {
    return (
        <PageContainer>
            <HistoryTitle>Histórico</HistoryTitle>
            <Description>
                Em breve você poderá ver o histórico dos seus hábitos aqui
            </Description>
        </PageContainer>
    );
}

const HistoryTitle = styled.span`
    font-size: 23px;
    line-height: 28.7px;
    color: ${colors.darkBlue};
`;

const Description = styled.span`
    display: inline-block;
    margin-top: 17px;
    font-size: 18px;
    line-height: 22.5px;
    color: #666666;
`;
