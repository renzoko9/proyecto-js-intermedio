import React, { useState } from 'react';

const FormNotas = ({notas, agregarNota}) => {
    
    const [nombre, setNombre] = useState("");
    const [nota, setNota] = useState("");


    function handleChangeNombre(event){
        const value = event.target.value;   
        setNombre(value);
    } 

    function handleChangeNota(event){
        const value = event.target.value;   
        setNota(value);
    }

    function handleSubmit(e){
        e.preventDefault();
        
        const newTodo = {
            id: crypto.randomUUID(),
            nombre: nombre,
            nota: nota,
            completed: false,
        }

        const temp = [ ...notas];
        temp.unshift(newTodo);

        agregarNota(temp);
        setNombre("");
        setNota("");
    }

    return (
        <form className="todoCreateForm" onSubmit={handleSubmit}>
            <input onChange={handleChangeNombre} className="todoInputNombre" value={nombre} placeholder="Nombre"/>
            <input onChange={handleChangeNota} className='todoInputNota' value={nota} placeholder='Nota' />
            <input 
                onClick={handleSubmit}
                type="submit" 
                value="Agregar" 
                className="buttonCreate" 
            />
        </form>
    );
}

export default FormNotas;
