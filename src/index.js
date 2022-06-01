import React from "react";
import { createRoot } from 'react-dom/client';
import { App } from "./pages";
import { GlobalStyle } from "./components";

const root = createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>
)