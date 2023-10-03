import { useState } from "react";
import Button from "../Button/Button";
import DropDown from "../DropDown/DropDown";
import TextInput from "../TextInput/TextInput";
import "./Form.css";


const Form = (props) => {

  const [instituicao, setInstituicao] = useState('dado inst');
  const [vencimento, setVencimento] = useState('dado 12/10/14');
  const [arquivo, setAquivo] = useState('https://github.com/linofir.png');
  const [comentario, setComentario] = useState('dado coment')
  
  const [status, setStatus] = useState('');
  const [tipo, setTipo] = useState('');

  const tipoOptions = [
      'Conta pessoal',
      'Despesa fixa',
      'Salário',
      'Despesa variável',
      'Despesa jurídica',
      'Investimento'
  ];

  const  saved = (event) =>  {
    event.preventDefault();
    props.submitData({
      instituicao,
      vencimento,
      status,
      tipo,
      arquivo,
      comentario
    })
    setInstituicao('');
    setVencimento('');
    setStatus('');
    setTipo('');
    setAquivo('');
    setComentario('');
    console.log('dados salvos');
  };

  return (
    <section className="form">
      <form onSubmit={saved}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextInput 
          label="Instituição" 
          placeholder="Digite a instituição" 
          required={true}
          value={instituicao}
          onChangeValue={setInstituicao} 
        />
        <TextInput 
          label="Vencimento" 
          placeholder="Digite o vencimento" 
          required={true}
          value={vencimento}
          onChangeValue={setVencimento} 
        />
        <DropDown 
          label="Status" 
          options={props.statusOptions} 
          required={true}
          value= {status}
          onChangeValue = {setStatus}
        />
        <DropDown 
          label="Tipo" 
          options={tipoOptions} 
          required={true}
          value= {tipo}
          onChangeValue = {setTipo}
          placeholder="O arquivo relacionado"
        />
        <TextInput 
          label="Arquivo" 
          placeholder="O arquivo relacionado" 
          value={arquivo}
          onChangeValue={setAquivo} 
        />
        <TextInput 
          label="Comentário" 
          placeholder="Informação extra" 
          value={comentario}
          onChangeValue={setComentario} 
        />
        <Button> 
          Criar
        </Button>
      </form>
    </section>
  );
};

export default Form;
