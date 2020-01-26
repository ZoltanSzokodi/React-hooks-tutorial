import React, { createContext, useReducer } from 'react';

/* !!!!!!!!!!!!!!!!!!!! JUST UNCOMMENT THE SECTIONS NEEDED FOR RECAP !!!!!!!!!!!!!!!!!!!!! */


// ------------- useSTATE ---------------
// import HookStateCounter from './hooks/useState/HookStateCounter'
// import HookStateObject from './hooks/useState/HookStateObject'
// import HookStateArray from './hooks/useState/HookStateArray'

// ------------- useEFFECT ---------------
// import HookEffectCounter from './hooks/useEffect/HookEffectCounter'
// import HookEffectMouse from './hooks/useEffect/HookEffectMouse'
// import HookEffectMouseOut from './hooks/useEffect/HookEffectMouseOut'
// import HookIntervalCounter from './hooks/useEffect/HookIntervalCounter'
// import DataFetching1 from './hooks/useEffect/DataFetching1'
// import DataFetching2 from './hooks/useEffect/DataFetching2'
// import DataFetching3 from './hooks/useEffect/DataFetching3'

// ------------- useCONTEXT ---------------
// import ComponentA from './hooks/useContext/ComponentA'

// ------------- useREDUCER ---------------
// import ReducerCounter1 from './hooks/useReducer/ReducerCounter1'
// import ReducerCounter2 from './hooks/useReducer/ReducerCounter2'
// import ReducerCounter3 from './hooks/useReducer/ReducerCounter3'

// ------------- useREDUCER with useCONTEXT ---------------
// import ComponentA from './hooks/useReducerUseContext/ComponentA'
// import ComponentB from './hooks/useReducerUseContext/ComponentB'
// import ComponentC from './hooks/useReducerUseContext/ComponentC'

// ------------- DATA FETCHING with useREDUCER ---------------
import ConventionalDataFetching from './hooks/useReducerFetchData/ConventionalDataFetching'
import ReducerDataFetching from './hooks/useReducerFetchData/ReducerDataFetching'


import './App.css';

// ------------------- useCONTEXT ------------------
// export const UserContext = createContext();
// export const ColorContext = createContext();

// ------------- useREDUCER with useCONTEXT ---------------
// export const CountContext = createContext()

// const initialState = 0;

// const reducer = (state, action) => {
//   switch (action) {
//     case ('increment'):
//       return state + 1
//     case ('decrement'):
//       return state - 1
//     case ('reset'):
//       return initialState
//     default:
//       return state
//   }
// }

function App() {

  // ------------- useREDUCER with useCONTEXT ---------------
  // const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      {/* ------------- useSTATE --------------- */}
      {/* <HookStateCounter /> */}
      {/* <HookStateObject /> */}
      {/* <HookStateArray /> */}

      {/* ------------- useEFFECT --------------- */}
      {/* <HookEffectCounter /> */}
      {/* <HookEffectMouse /> */}
      {/* <HookEffectMouseOut /> */}
      {/* <HookIntervalCounter /> */}
      {/* <DataFetching1 /> */}
      {/* <DataFetching2 /> */}
      {/* <DataFetching3 /> */}

      {/*------------- useCONTEXT ---------------*/}
      {/* <UserContext.Provider value={'Rupert'}>
        <ColorContext.Provider value={'black'}>
          <ComponentA />
        </ColorContext.Provider>
      </UserContext.Provider> */}

      {/*------------- useREDUCER ---------------*/}
      {/* <ReducerCounter1 /> */}
      {/* <ReducerCounter2 /> */}
      {/* <ReducerCounter3 /> */}

      {/*------------- useREDUCER with useCONTEXT ---------------*/}
      {/* <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <div>
          Count: {count}
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </div>
      </CountContext.Provider> */}

      {/* ------------- DATA FETCHING with useREDUCER --------------- */}
      {/* <ConventionalDataFetching /> */}
      <ReducerDataFetching />
    </div>
  );
}

export default App
