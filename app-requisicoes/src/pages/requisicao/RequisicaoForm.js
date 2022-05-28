import React from "react";
import { RadioButton } from 'primereact/radiobutton';

const RequisicaoForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setRequisicao({ ...props.requisicao, [name]: value });
  };
  return (

    <div class="container">
      <div class="row">
        <div class="col">
          <div>
            <form>
              <div class="form">
                <div class="form-toggle"></div>
                <div class="form-panel one">
                  <div class="form-header">
                    <h1>Cadastro de Requisição</h1>
                  </div>
                  <div class="form-content">
                    <form>
                      <div class="form-group">
                        <label>Título</label>
                        <input
                          class="form-control"
                          type="text"
                          name="titulo"
                          value={props.requisicao.titulo}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div class="form-group">
                        <label>Descrição</label>
                        <input
                          class="form-control"
                          type="text"
                          name="descricao"
                          value={props.requisicao.descricao}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div class="form-group">
                        <label>Data e Hora Criada</label>
                        <input
                          class="form-control"
                          type="datetime-local"
                          name="dataHoraCriada"
                          value={props.requisicao.dataHoraCriada}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div class="form-group">
                        <label>Prazo de Atendimento</label>
                        <input
                          class="form-control"
                          type="date"
                          name="prazoAtendimento"
                          value={props.requisicao.prazoAtendimento}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div class="form-group">
                        <label>Status</label><br />
                        <RadioButton inputId="nova" value="Nova" name="status" onChange={handleInputChange} checked={props.requisicao.status === 'Nova'} />
                        <label htmlFor="nova">Nova</label><br />
                        
                        <RadioButton inputId="finalizada" value="Finalizada" name="status" onChange={handleInputChange} checked={props.requisicao.status === 'Finalizada'} />
                        <label htmlFor="finalizada">Finalizada</label><br />
                        
                        <RadioButton inputId="cancelada" value="Cancelada" name="status" onChange={handleInputChange} checked={props.requisicao.status === 'Cancelada'} />
                        <label htmlFor="cancelada">Cancelada</label><br />
                      </div><br />
                      <div class="form-group">
                        <button type="button" onClick={props.salvar}
                          className="btn btn-primary btn-sm">Salvar</button>
                        <button type="button" onClick={props.cancelar}
                          className="btn btn-danger btn-sm">Cancelar</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>


  );
};
export default RequisicaoForm;
