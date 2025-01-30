import React from "react";
import { Estilos } from "./components/EstilosGlobais/Estilos";
import { Card } from "./components/Card/Card";
import { ProvedorTema } from "./components/ProvedorTema/ProvedorTema";
import { Cabecalho } from "./components/Cabecalho/Cabecalho";
import { Tipografia } from "./components/Tipografia/Tipografia";
import { CampoTexto } from "./components/CampoTexto/CampoTexto";
import { Rodape } from "./components/Rodape/Rodape";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Cabecalho />
      <Card>
        <Tipografia variante="h1" componente="h1">
          Freelando
        </Tipografia>
        <Tipografia variante="body" componente="body">
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores
          freelancers. Em seguida, você poderá dar mais detalhes sobre suas
          demandas e sobre sua forma de trabalho.
        </Tipografia>
        <CampoTexto titulo="Nome Completo" />
      </Card>
      <Rodape>
       
      </Rodape>
    </ProvedorTema>
  );
}

export default App;
