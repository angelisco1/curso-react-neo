import { ADD_TAREA, DELETE_TAREA, COMPLETE_TAREA, INIT_TAREA } from "./action-types";

const initialState = {
  tareas: [
    {id: 0, nombre: 'Acabar mi lista de tareas', hecha: false},
    {id: 1, nombre: 'Ver TWD', hecha: true}
  ],
  // nextId: 2
}

function eliminar(state, id) {
  const nuevaListaTareas = state.tareas.filter(t => t.id != id);
  return {...state, tareas: nuevaListaTareas}
}

function anyadir(state, nuevaTarea) {
  const nuevaListaTareas = [...state.tareas, nuevaTarea]
  return {...state, tareas: nuevaListaTareas}
  // const nuevaTarea = {...tarea, id: state.nextId}
  // const nuevaListaTareas = [...state.tareas, nuevaTarea]
  // return {...state, tareas: nuevaListaTareas, nextId: state.nextId + 1}
}

function editar(state, tareaActualizada) {
  const nuevaListaTareas = state.tareas.map(t => {
    if (t.id === tareaActualizada.id) {
      return tareaActualizada;
    }
    return t;
  })
  return {...state, tareas: nuevaListaTareas}
}

export default function tareas(state = initialState, action) {
  switch(action.type) {
    case INIT_TAREA:
      return {...state, tareas: action.payload};
    case ADD_TAREA:
      return anyadir(state, action.payload);
    case DELETE_TAREA:
      return eliminar(state, action.payload);
    case COMPLETE_TAREA:
      return editar(state, action.payload);
    default:
      return state;
  }
}