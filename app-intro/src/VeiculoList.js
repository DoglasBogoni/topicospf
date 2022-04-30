



const VeiculoList = (props) => (

    <div>
        <br></br>
        <h4 class="h2">Listagem de Veiculos </h4>
        <br></br>

    


        <table className="table table-sm">
            <thead>
                <tr>
                    <td scope="col" > <button onClick={props.onClickAtualizar} class="btn btn-success"> Atualizar Lista</button></td>
                </tr>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Modelo</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">ano</th>
                    <th scope="col">Operações</th>
                </tr>
            </thead>
            <tbody> {props.veiculos.length > 0 ? (props.veiculos.map((o, index) => (
                <tr key={index}>
                    <td>{index}</td>
                    <td>{o.modelo}</td>
                    <td>{o.cliente}</td>
                    <td>{o.ano}</td>
                        <td>
                            <button onClick={() => props.editar(o._id)} className="btn btn-primary btn-sm" >Editar</button>
                            <button onClick={() => props.excluir(o._id)} className="btn btn-danger btn-sm">Excluir</button>
                            
                        </td>
                </tr>
            ))) : (
                <tr> <td colSpan={3}>Nenhum veiculo.</td> </tr>
            )}
            </tbody>
        </table>

        <button type="button" class="btn btn-primary btn-lg btn-block" onClick={props.inserir}>Inserir</button>
    </div>
    
)
export default VeiculoList

