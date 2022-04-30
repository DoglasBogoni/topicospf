import React from 'react'
const VeiculoForm = (props) => {

    const handleInputChange = (event) => {
        const { name, value } = event.target
        props.setVeiculo({ ...props.veiculo, [name]: value })
    }

    return (
        <form>
            <div class="form-group">
                <br></br>
                <h4 class="h2">Cadastrar Novo Veiculo </h4>

                <label>Modelo</label>
                <input class="form-control form-control-lg" type="text" name="modelo" placeholder="Digite o Modelo"
                    value={props.veiculo.modelo} onChange={handleInputChange} />
            </div>
            <div class="form-group">
                <label>Cliente</label>
                <input class="form-control form-control-lg" type="text" name="cliente" placeholder="Digite o Cliente"
                    value={props.veiculo.cliente} onChange={handleInputChange} />
            </div>
            <div class="form-group">
                <label>Ano</label>
                <input class="form-control form-control-lg" type="text" name="ano" placeholder="Digite o Ano"
                    value={props.veiculo.ano} onChange={handleInputChange} />
            </div>


            <br></br>
            <div class="form-group">
                <button type="button" onClick={props.salvar}
                    className="btn btn-outline-primary">Salvar</button>
                <button type="button" onClick={props.cancelar}
                    className="btn btn-outline-info">Cancelar</button>
            </div>
        </form>

    )
}
export default VeiculoForm