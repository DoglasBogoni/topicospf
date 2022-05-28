import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import UsuariosList from './UsuariosList';
import UsuariosForm from './UsuariosForm';

function Usuarios() {
    // Declare variaveis de state
    let usuariosList = [
        { id: 1, nome: 'Fulano', email: 'email1@teste', celular: '54 6565 5454' },
        { id: 2, nome: 'Beltrano', email: 'email2@teste', celular: '54 6565 5454' },
    ]
    const [usuarios, setUsuarios] = useState(usuariosList)

    const onClickAtualizar = () => {
        usuariosList = [
            { id: 1, nome: 'Fulano', email: 'email1@teste', celular: '54 6565 5454' },
            { id: 2, nome: 'Beltrano', email: 'email2@teste', celular: '54 6565 5454' },
            { id: 3, nome: 'Ciclano', email: 'email3@teste', celular: '54 65555 8854' }
        ];
        setUsuarios(usuariosList);
    }

    // operação inserir
    const initialState = { id: null, nome: '', email: '', celular: '' }
    const [usuario, setUsuario] = useState(initialState)
    const [editando, setEditando] = useState(false)
    const onClickInserir = () => {
        setUsuario(initialState);
        setEditando(true);
    }

    // operação editar

    const onClickEditar = (id) => {
        setUsuario(usuarios.filter((usuario) => usuario.id == id)[0]);
        setEditando(true);
    }


    // operação excluir
    const onClickExcluir = (id) => {
        setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    }

    const onClickSalvar = () => {
        console.log('Salvar ...');
        if (usuario.id == null) { // inclussão
            usuario.id = usuarios.length + 1
            setUsuarios([...usuarios, usuario])
        } else { // alteração
            setUsuarios(usuarios.map((find) => (find.id === usuario.id ? usuario : find)))
        }
        setEditando(false);
    }
    const onClickCancelar = () => {
        console.log('Cancelou ...');
        setEditando(false);
    }

    if (!editando) {
        return (
            <div>
                <UsuariosList usuarios={usuarios}
                    onClickAtualizar={onClickAtualizar}
                    onClickInserir={onClickInserir}
                    onClickEditar={onClickEditar}
                    onClickExcluir={onClickExcluir} />
            </div>
        );
    } else {
        return (
            <div>
                <UsuariosForm usuario={usuario}
                    onClickSalvar={onClickSalvar}
                    onClickCancelar={onClickCancelar}
                    setUsuario={setUsuario} />
            </div>
        );
    }
}

export default Usuarios;