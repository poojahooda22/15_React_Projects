// import React from 'react';
// import { Routes, Route } from 'react-router-dom';

// import Home from './Home';
// import Movie from './SingleMovie';

// function App() {
//   return (
//     <Routes>
//       <Route path='/' element={<Home />} />
//       <Route path='movies/:id' element={<Movie />} />
//     </Routes>
//   );
// }

// export default App;


/* useReducer hook */
import React, {useReducer} from "react";


const reducer = (state, action) => {
  switch(action.type) {
    case"INCREMENT":
      return {count: state.count + 1, showText: state.showText};
    case "toggleSHowText":
      return {count: state.count, showText: !state.showText};
    default: 
      return state;
  }

};

const App = () => {

  const [state, dispatch] = useReducer(reducer, {count: 0, showText: true});
  return (
    <div>
      <h1>{state.countt}</h1>

      <button
      onClick = {() => {
        dispatch({type: "INCREMENT"});
        dispatch({type: "toggleShowText"});
      }}
      >
        Click Here
        </button>
        {state.showText && <p>This is a text</p>}
    </div>
  )
}

export default App;