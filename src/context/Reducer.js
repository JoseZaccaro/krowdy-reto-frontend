export const initialState = {
  data: [
    { id: 1, question: "¿Cual fue tu video juego favorito durante tu infancia?", image: 'https://static.canalapps.com/uploads/2021/10/fondo-de-pantalla-negro-scaled.jpg', video: null },
    { id: 2, question: "¿Cual fue tu video juego favorito durante tu infancia 2?", image: 'https://static.canalapps.com/uploads/2021/10/fondo-de-pantalla-negro-scaled.jpg', video: null },
    { id: 3, question: "¿Cual fue tu video juego favorito durante tu infancia 3?", image: 'https://static.canalapps.com/uploads/2021/10/fondo-de-pantalla-negro-scaled.jpg', video: null },
    { id: 4, question: "¿Cual fue tu video juego favorito durante tu infancia 4?", image: 'https://static.canalapps.com/uploads/2021/10/fondo-de-pantalla-negro-scaled.jpg', video: null },
    { id: 5, question: "¿Cual fue tu video juego favorito durante tu infancia 5?", image: 'https://static.canalapps.com/uploads/2021/10/fondo-de-pantalla-negro-scaled.jpg', video: null },
  ],
}

export const actionTypes = {
  LOAD_DATA: "LOAD_DATA",
}

const reducer = (state, action) => {


  switch (action.type) {

    case "LOAD_DATA":
      return {
        ...state,
        data: action.data
      }
    default: return state;
  }
}
export default reducer