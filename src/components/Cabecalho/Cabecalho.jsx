import styled from '@emotion/styled';

const CabecalhoEstilizado = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${props => props.theme.espacamentos.m}; 
    background:  ${props => props.theme.cores.primarias.a};
    height: 104px;
    gap: 10px;
`;

export const Cabecalho = ({ children }) => {
    return (
        <CabecalhoEstilizado>
            {children}
        </CabecalhoEstilizado>
    );
}