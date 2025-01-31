import styled from '@emotion/styled'


const RodapeEstilizado = styled.footer`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 200px;
align-items: center;
background: ${props => props.theme.cores.primarias.a};
padding: ${props => props.theme.espacamentos.xl};
color: ${props => props.theme.cores.branco};
gap: 386px;
`;

export const Rodape = ({ children }) => {
    return(
        <RodapeEstilizado>
            {children}
        </RodapeEstilizado>
    );
}