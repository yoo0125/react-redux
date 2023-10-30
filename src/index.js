import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode store={store}>
<App />
</React.StrictMode>
);

export default App;
