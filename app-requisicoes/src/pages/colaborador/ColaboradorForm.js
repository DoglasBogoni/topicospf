import React from "react";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const ColaboradorForm = (props) => {
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    props.setColaborador({ ...props.colaborador, [id]: value });
  };

  const[ contraSenha,setContraSenha] = useState();

  return (
    <form>
      <div>
        <div className="card">
          <h5>Cadastro de Colaboradores</h5>
          <div className="p-fluid grid formgrid">

            <div className="field col-12 md:col-4">
              <label htmlFor="nome">Nome</label>
              <InputText id="nome" defaultvalue={props.colaborador.nome}
                {...register("nome", {
                  required: { value: true, message: "O nome é obrigátorio." },
                  minLength: { value: 2, message: "O nome deve ter pelo menos 2 caracteres." },
                  maxLength: { value: 50, message: "O nome deve ter pelo menos 50 caracteres." }
                })}
                onChange={handleInputChange} />
              {errors.nome && <span style={{ color: 'red' }}>{errors.nome.message} </span>}
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="email">Email</label>
              <InputText id="email" value={props.colaborador.email} onChange={handleInputChange} />
            </div>

            <div className="field col-4 md:col-4">
              <label htmlFor="senha">Senha</label>
              <Password id="senha" defaultValue={props.colaborador.senha} 
               {...register("nome", {
                required: { value: false, message: "senha é obrigátorio." },
                minLength: { value: 2, message: "senha deve ter pelo menos 2 caracteres." },
                maxLength: { value: 50, message: "Senha deve ter pelo menos 50 caracteres." }
              })}


              onChange={handleInputChange} toggleMask />
              {errors.nome && <span style={{ color: 'red' }}>{errors.nome.message} </span>}
            </div>

          </div>
        </div>
      </div>

      <Button label="Salvar" icon="pi pi-save" onClick={props.colaborador.salvar} className="p-button-secondary p-button-text" />
      <Button label="Cancelar" icon="pi pi-times-circle" onClick={props.colaborador.cancelar} className="p-button-secondary p-button-text" />
    </form>



  );
};
export default ColaboradorForm;
