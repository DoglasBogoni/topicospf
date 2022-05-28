import React from "react";

const SolicitanteForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setSolicitante({ ...props.solicitante, [name]: value });
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
                    <h1>Cadastro de Soliciante</h1>
                  </div>
                  <div class="form-content">
                    <form>
                      <div class="form-group">
                        <label>Nome</label>
                        <input
                          class="form-control"
                          type="text"
                          name="nome"
                          value={props.solicitante.nome}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div class="form-group">
                        <label>Email</label>
                        <input
                          class="form-control"
                          type="text"
                          name="email"
                          value={props.solicitante.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div class="form-group">
                        <label>Senha</label>
                        <input
                          class="form-control"
                          type="password"
                          name="senha"
                          value={props.solicitante.senha}
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
export default SolicitanteForm;
