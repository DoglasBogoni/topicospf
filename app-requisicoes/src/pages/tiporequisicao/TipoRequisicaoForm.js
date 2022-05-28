import React from "react";

const TipoRequisicaoForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setTipoRequisicao({ ...props.tipoRequisicao, [name]: value });
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
                    <h1>Cadastro de Tipos de Requisição</h1>
                  </div>
                  <div class="form-content">
                    <form>
                      <div class="form-group">
                        <label>Descrição</label>
                        <input
                          class="form-control"
                          type="text"
                          name="descricao"
                          value={props.tipoRequisicao.descricao}
                          onChange={handleInputChange}
                        />
                      </div>
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
export default TipoRequisicaoForm;
