import { ADD_TAREA, DELETE_TAREA, COMPLETE_TAREA, INIT_TAREA } from "./action-types";

const URL = 'https://todo-list-603ba.firebaseio.com/tareas';

function createActionAddTarea(tarea) {
  return {
    type: ADD_TAREA,
    payload: tarea
  }
}

export function addTarea(tarea) {
  return (dispatch) => {
    fetch(URL + '.json', {method: 'POST', body: JSON.stringify(tarea)})
      .then(resp => resp.json())
      .then(datos => {
        // console.log(datos);
        dispatch(createActionAddTarea({...tarea, id: datos.name}));
      })
    // setTimeout(() => {
    //   dispatch(createActionAddTarea(tarea));
    // }, 1500)
  }
}

function createActionDelTarea(id) {
  return {
    type: DELETE_TAREA,
    payload: id
  }
}

export function deleteTarea(id) {
  return (dispatch) => {
    fetch(`${URL}/${id}.json`, {method: 'DELETE'})
      .then(resp => resp.json())
      .then(() => {
        dispatch(createActionDelTarea(id));
      })
  }
}

export function completeTarea(tarea) {
  return (dispatch) => {
    const tareaActualizada = {nombre: tarea.nombre, hecha: !tarea.hecha};
    fetch(`${URL}/${tarea.id}.json`, {method: 'PUT', body: JSON.stringify(tareaActualizada)})
      .then(resp => resp.json())
      .then(() => {
        dispatch(createActionCompleteTarea({...tareaActualizada, id: tarea.id}));
      })
  }
}

function createActionCompleteTarea(tarea) {
  return {
    type: COMPLETE_TAREA,
    payload: tarea
  }
}

function createActionInitTareas(tareas) {
  return {
    type: INIT_TAREA,
    payload: tareas
  }
}

export function initTareas() {
  return (dispatch) => {
    fetch(URL + '.json')
      .then(resp => resp.json())
      .then(datos => {
        console.log(datos);
        const tareas = [];
        for (let id in datos) {
          tareas.push({id: id, ...datos[id]});
        }
        dispatch(createActionInitTareas(tareas));
      })
  }
}