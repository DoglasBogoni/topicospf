import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const RequisicaoList = (props) => {

  const operacoesBodyTemplate = (rowData) => {
    return (
      <div>
        <Button icon="pi pi-times" className="p-button-rounded p-button-danger" aria-label="Excluir" onClick={() => props.excluir(rowData._id)}/>
        <Button icon="pi pi-pencil" className="p-button-rounded p-button-warning" aria-label="Editar" onClick={() => props.editar(rowData._id)}/>
      </div>
    )

  }


  return (
    <div className="App">
      <h4 className='name-requisicoes'>Listagem de Requisições</h4>
      <button
        className="btn btn-primary btn-sm"
        onClick={props.onClickAtualizar}
      >
        Atualizar Lista
      </button>
      <button className="btn btn-success btn-sm" onClick={props.inserir}>
        Inserir
      </button>

      <DataTable value={props.requisicoes} paginator responsiveLayout="scroll"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando de {first} até {last} de {totalRecords}"
        rows={5} rowsPerPageOptions={[5, 10, 20, 50]}
        emptyMessage="Nenhuma requisição encontrada."

        selectionMode="single" selection={props.requisicao} 
        onSelectionChange={e => props.setRequisicao(e.value)} dataKey="_id">

        <Column field="_id" header="ID" sortable></Column>
        <Column field="titulo" header="Título" sortable filter></Column>
        <Column field="descricao" header="Descrição" sortable filter></Column>
        <Column field="dataHoraCriada" header="Data e Hora Criada" sortable filter></Column>
        <Column field="status" header="Status" sortable filter></Column>
        <Column field="prazoAtendimento" header="Prazo de Atendimento" sortable filter></Column>
        <Column header="Operações" body={operacoesBodyTemplate}>
        </Column>
      </DataTable>
    </div>
  );
};
export default RequisicaoList;
