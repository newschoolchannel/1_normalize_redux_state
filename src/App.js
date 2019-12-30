import React, { useContext, useReducer }  from "react"

import Store from "./context"
import reducer from "./reducer"

import TweetList from "./components/TweetList"

function App() {
  const globalStore = useContext(Store)
  const [state, dispatch] = useReducer(reducer, globalStore)

  return (
    <Store.Provider value={{ state, dispatch }}>
      <TweetList/>
    </Store.Provider>
  );
}

export default App;
