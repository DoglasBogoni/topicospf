
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { button } from 'primereact/button';
const SolicitanteList = (props) => {

  const operacoesBodyTemplate = (rowData) => {
    return (
      <div>
        <button onClick={() => props.editar(rowData._id)}
          className="btn btn-warning btn-sm">Editar</button>
        <button onClick={() => props.excluir(rowData._id)}
          className="btn btn-danger btn-sm">Excluir</button>
      </div>
    )
  }

  return (
    <div className="App">
      <h4>Listagem de Solicitantes</h4>
      <button
        className="btn btn-primary btn-sm"
        onClick={props.onClickAtualizar}
      >
        Atualizar Lista
      </button>
      <button className="btn btn-success btn-sm" onClick={props.inserir}>
        Inserir
      </button>

      <DataTable value={props.solicitantes} Paginator responsiveLayout="scroll"
        paginator
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando de {first} Até {last} de {totalRecords}"
        rows={5} rowsPerPageOptions={[5, 10, 20, 50]}

        selectionMode="single" selection={props.solicitantes}
        onSelectionChange={ e => props.setSolicitante(e.value) } dataKey="_id"

      >
        <Column field="_id" header="id" sortable ></Column>
        <Column field="nome" header="Nome" sortable filter></Column>
        <Column field="email" header="Email" sortable filter></Column>
        <Column field="senha" header="Senha" sortable filter></Column>
        <Column header="Operações" sortable filter body={operacoesBodyTemplate}></Column>
      </DataTable>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Senha</th>
            <th>Operações</th>
          </tr>
        </thead>
        <tbody>
          {props.solicitantes.length > 0 ? (
            props.solicitantes.map((o, index) => (
              <tr key={index}>
                <td>{o._id}</td>
                <td>{o.nome}</td>
                <td>{o.email}</td>
                <td>{o.senha}</td>
                <td>
                  <button
                    onClick={() => props.editar(o._id)}
                    className="btn btn-warning btn-sm"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => props.excluir(o._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>Nenhum colaborador!.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default SolicitanteList;