import styled from '@emotion/styled';

const CabecalhoEstilizado = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${props => props.theme.espacamentos.m}; 
    margin-bottom: 80px;
    background:  ${props => props.theme.cores.primarias.a};
    height: 104px;
`;

export const Cabecalho = ({ children }) => {
    return (
        <CabecalhoEstilizado>
            {children}
        </CabecalhoEstilizado>
    );
}