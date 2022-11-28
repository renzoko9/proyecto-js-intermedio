import React, { useState } from 'react';
import FormNotas from './FormNotas';
import Nota from './Nota';

const ListaNotas = () => {

    const [todos, setTodos] = useState([]);

    function handleUpdate(id, valueNombre, valueNota){
        const temp = [ ...todos];
        const item = temp.find(item => item.id === id);
        item.nombre = valueNombre;
        item.nota = valueNota;
        setTodos(temp);
    }

    function handleDelete(id){
        const temp = todos.filter((item) => item.id !== id);
        setTodos(temp);
    }

    return (
        <div className="todoContainer">
            <div className='txtCabecera'>
                <h1>Registro de Notas</h1>
            </div>

            <FormNotas notas={todos} agregarNota={setTodos}></FormNotas>

            <table className='tableNotas'>
                <tr className="todoInfoHead">
                    <th className="todoNombre">Nombre</th>
                    <th className="todoNota">Nota</th>
                    <th className="todoNota">Acciones</th>
                </tr>
                    {
                        todos.map((item) => (
                            <Nota key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />              
                        ))
                    }
            </table>
            
        </div>
    );
}

export default ListaNotas;
