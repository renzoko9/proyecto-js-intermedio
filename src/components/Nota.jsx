import React, { useState } from 'react';

const Nota = ({ item, onUpdate, onDelete }) => {

    const [isEdit, setIsEdit] = useState(false);

    function FormEdit(){

        const [newValueNombre, setNewValueNombre] = useState(item.nombre);
        const [newValueNota, setNewValueNota] = useState(item.nota);

        function handleSubmit(e){
            e.preventDefault();
        }

        function handleChangeNombre(e){
            const value = e.target.value;
            setNewValueNombre(value);
        }

        function handleChangeNota(e){
            const value = e.target.value;
            setNewValueNota(value);
        }

        function handleClickUpdateTodo(){
            onUpdate(item.id, newValueNombre, newValueNota);
            setIsEdit(false);
        }

        return(
            <tr className="todoInfo">
                <td className="todoNombre">
                    <form className="todoUpdateForm" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            className="todoInputNombreEdit" 
                            onChange={handleChangeNombre} 
                            value={newValueNombre}
                        />
                    </form>
                </td>
                <td className="todoNota">
                    <form className="todoUpdateForm" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            className="todoInputNotaEdit" 
                            onChange={handleChangeNota} 
                            value={newValueNota}
                        />
                    </form>
                </td>
                <td className="todoButtonEdit">
                    <form className="todoUpdateForm" onSubmit={handleSubmit}>
                        <button className="button" onClick={handleClickUpdateTodo}>
                            Actualizar
                        </button>
                    </form>
                </td>
            </tr>
            
        );
    }

    function TodoElement(){
        return (
            <tr className="todoInfo">
                <td className="todoNombre">{item.nombre}</td>
                <td className="todoNota">{item.nota}</td>
                <td className="todoButton">
                    <button className="button" onClick={() => setIsEdit(true)}>Editar</button>
                    <button className="buttonDelete" onClick={(e) => onDelete(item.id)}>Eliminar</button>
                </td>
            </tr>
        );
    }

    return (isEdit ? <FormEdit/> : <TodoElement/>)
}

export default Nota;
