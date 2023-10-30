import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
/*<React.StrictMode store={store}>
<App />
</React.StrictMode>*/
<Provider store={store}>
<App />
</Provider>
);

export default App;
