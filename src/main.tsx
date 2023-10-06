import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppWithContext from "./AppWithContext.tsx";
// import AppWithRedux from "./AppWithRedux.tsx";
// import AppWithZustand from "./AppWithZustand.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppWithContext />
    {/*<AppWithRedux />*/}
    {/*<AppWithZustand />*/}
  </React.StrictMode>,
)
