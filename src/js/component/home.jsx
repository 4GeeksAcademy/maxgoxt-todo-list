import React, { useState } from "react";

//create your first component
const Home = () => {

  const [toDo, setToDo] = useState([])
  const [tarea, setTarea] = useState('')

  function add(e) {
    if (e.key === "Enter" && tarea !== "") {
      setToDo(toDo.concat(tarea))
      setTarea("")
    }}

  function del(item) {
    setToDo(toDo.filter((x, newIndex) =>
      item != newIndex
    ))}

  return (
    <div className="w-50 mx-auto">
      <h1 className="contatiner fw-light">To Do List</h1>
      <input className="form-control fst-italic" type="text" placeholder='¿Que tarea pendiente tenés?'
        value={tarea}
        onChange={(e) => { setTarea(e.target.value) }}
        onKeyDown={add}/>
      <ul className="list-group">
        {
          toDo.map((item, index) => {
            return (
              <li className="list-group-item d-flex justify-content-between fst-italic" key={index}>{item}
                <i className="fa fa-trash" style={{color: '#c70000'}} onClick={() => del(index)}></i>
              </li>)
          })}
      </ul>
      <small className="fw-light">{toDo.length} tareas pendientes</small>
    </div>
  );
};

export default Home;
