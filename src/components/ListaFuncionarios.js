
import React from 'react';

function ListaFuncionarios({ funcionarios, onEdit, onDelete }) {
  return (
    <div>
      <h2>Consultar Funcionários</h2>
      <ul>
        {funcionarios.map(funcionario => (
          <li key={funcionario.cpf}>
            {funcionario.nome}
            <button onClick={() => onEdit(funcionario)}>Editar</button>
            <button onClick={() => onDelete(funcionario.cpf)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaFuncionarios;
