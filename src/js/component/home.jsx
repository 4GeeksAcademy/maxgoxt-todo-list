import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

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
      <h1 className="contatiner">To Do List</h1>
      <input className="form-control" type="text" placeholder='¿Que tarea pendiente tenés?'
        value={tarea}
        onChange={(e) => { setTarea(e.target.value) }}
        onKeyDown={add}/>
      <ul className="list-group">
        {
          toDo.map((item, index) => {
            return (
              <li className="list-group-item d-flex justify-content-between" key={index}>{item}
                <i className="fa fa-trash" style={{color: '#c70000'}} onClick={() => del(index)}></i>
              </li>)
          })}
      </ul>
      <small>{toDo.length} tareas pendientes</small>
    </div>
  );
};

export default Home;
