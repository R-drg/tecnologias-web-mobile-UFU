import './App.css';
import Aluno from './Aluno'
import { useEffect } from 'react';
import alunosList from './alunosList';

function App() {
  // const alunosList = require('./alunosList');

  const alunosTable = alunosList.map(
    (aluno,i) => <Aluno key={i} nome={aluno.nome}  nota_1={aluno.nota_1} nota_2={aluno.nota_2} nota_3={aluno.nota_3} nota_4={aluno.nota_4}/>
  )


  return (
    <div className="container">
      <h1 className="title">Sistema de alunos</h1>
      <div className="table-div">
        <table>
          <thead>
          <tr className="table-head">
            <th>Nome</th>
            <th>Prova 1</th>
            <th>Prova 2</th>
            <th>Prova 3</th>
            <th>Prova 4</th>
            <th>Média</th>
            <th>Resultado</th>
          </tr>
          </thead>
          <tbody>
            {alunosTable}
          </tbody>
        </table>
      </div>
    </div>
  );

}

export default App;
