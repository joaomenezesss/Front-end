
import React, { useState } from 'react';

function AdicionarFuncionario({ onAdd }) {
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');          // Empresa
  const [nome, setNome] = useState('');  // Nome
  const [matricula, setMatricula] = useState('');// Matricula
  const [cargo, setCargo] = useState(''); // Cargo
  const [endereco, setEndereco] = useState('');  // Endereco
  const [salario, setSalario] = useState('');  // Salário Base
  const [departamento, setDepartamento] = useState(''); // Departamento
  const [dataadmissao, setDataAdmissao] = useState('');
  const [datanascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  
  const handleSubmit = () => {
    // Verificação básica para o nome e o CPF.     
    if (nome && cpf) {
      onAdd({ 
        cpf,
        matricula,
        cnpj, 
        departamento, 
        nome, 
        endereco, 
        salario,
        cargo,
        dataadmissao,
        datanascimento,
        telefone,
        email 
      });

      // Reset dos campos após o cadastro
      setCpf('');
      setCnpj('');
      setNome('');
      setMatricula('');
      setCargo('');
      setEndereco('');
      setSalario('');
      setDepartamento('');
      setDataAdmissao('');
      setDataNascimento('');
      setTelefone('');
      setEmail('');
    }
  };

  return (
    <div>
      <h2>Cadastrar Funcionário</h2>
      <input type="number" placeholder="cpf" value={cpf} onChange={e => setCpf(e.target.value)} />

      <input type="number" placeholder="cnpj" value={cnpj} onChange={e => setCnpj(e.target.value)} />
      <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
      <input type="text" placeholder="Matricula" value={matricula} onChange={e => setMatricula(e.target.value)} />
      <input type="text" placeholder="Cargo" value={cargo} onChange={e => setCargo(e.target.value)} />
      <input type="date" placeholder="Dataadmissao" value={dataadmissao} onChange={e => setDataAdmissao(e.target.value)} />
      <input type="date" placeholder="DataNascimento" value={datanascimento} onChange={e => setDataNascimento(e.target.value)} />
      <input type="text" placeholder="Salário" value={salario} onChange={e => setSalario(e.target.value)} />

      <input type="number" placeholder="Departamento" value={departamento} onChange={e => setDepartamento(e.target.value)} />
      <input type="text" placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
      <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="text" placeholder="Endereco" value={endereco} onChange={e => setEndereco(e.target.value)} />
      
      <button onClick={handleSubmit}>Adicionar</button>
    </div>
  );
}


export default AdicionarFuncionario;
