
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { button } from 'primereact/button';
const RequisicaoList = (props) => {

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
      <h4>Listagem de Requisições</h4>
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

        selectionMode="single" selection={props.Requisicaos}
        onSelectionChange={ e => props.setRequisicao(e.value) } dataKey="_id"

      >
        <Column field="_id" header="id" sortable ></Column>
        <Column field="titulo" header="Titulo" sortable filter></Column>
        <Column field="descricao" header="Descricao" sortable filter></Column>
        <Column field="date" header="DataHoraCriada" sortable filter></Column>
        <Column field="status" header="Status" sortable filter></Column>
        <Column field="date" header="prazoAtendimento" sortable filter></Column>
        <Column header="Operações" sortable filter body={operacoesBodyTemplate}></Column>
      </DataTable>
    </div>
  );
};
export default RequisicaoList;
