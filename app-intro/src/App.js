//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import VeiculoList from './VeiculoList';
import VeiculoForm from './VeiculoForm';
import VeiculoSrv from "./services/VeiculoSrv";

import PrimeReact from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Toast } from 'primereact/toast';



function App() {
  const apiURL = process.env.REACT_APP_API_URL;
  const [veiculos, setVeiculos] = useState([])
  const toastRef = useRef();

  useEffect(() => {
    onClickAtualizar(); // ao inicializar execula método para atualizar
  }, []);


  const onClickAtualizar = () => {
    VeiculoSrv.listar().then(response => {
      setVeiculos(response.data);
      console.log("Veiculos atualizados");
      toastRef.current.show({
        severity: 'success',
        summary: "Veiculos atualizados",
        life: 3000
      });

    }).catch(e => {
      toastRef.current.show({
        severity: 'error',
        summary: e.message,
        life: 3000
      });
    });
  }

  const salvar = () => {
    if (veiculo._id == null) { // inclussão
      VeiculoSrv.incluir(veiculo).then(response => {
        setEditando(false);
        onClickAtualizar();
        toastRef.current.show({ severity: 'success', summary: "Salvou", life: 2000 });
      })
        .catch(e => {
          toastRef.current.show({ severity: 'error', summary: e.message, life: 4000 });
        });
        
    } else { // alteração
      VeiculoSrv.alterar(veiculo).then(response => {
        setEditando(false);
        onClickAtualizar();
        toastRef.current.show({ severity: 'success', summary: "Salvou", life: 2000 });
      })
        .catch(e => {
          toastRef.current.show({ severity: 'error', summary: e.message, life: 4000 });
        });
    }
  }
  
  
  const editar = (_id) => {
    setVeiculo(veiculos.filter((veiculo) => veiculo._id == _id)[0]);
    setEditando(true);
  }


  const excluir = (_id) => {

    VeiculoSrv.excluir(_id).then(response => {
    onClickAtualizar();
    toastRef.current.show({ severity: 'success',
    summary: "Excluído", life: 2000 });
    })
    .catch(e => {
    toastRef.current.show({ severity: 'error',
    summary: e.message, life: 4000 });
    });
    }

    

  // operação inserir

  const initialState = { id: null, modelo: '', cliente: '', ano: '' }
  const [veiculo, setVeiculo] = useState(initialState)
  const [editando, setEditando] = useState(false)

  const inserir = () => {
    setVeiculo(initialState);
    setEditando(true);
  }
  const cancelar = () => {
    console.log('Cancelou ...');
    setEditando(false);
  }



  if (!editando) {
    return (
      <div className="App">
        <Toast ref={toastRef} />
        <VeiculoList veiculos={veiculos} onClickAtualizar={onClickAtualizar}
          inserir={inserir} editar={editar} excluir={excluir}/>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Toast ref={toastRef} />
        <VeiculoForm veiculo={veiculo} setVeiculo={setVeiculo}
          salvar={salvar} cancelar={cancelar} />
      </div>
    );
  }

}
export default App;