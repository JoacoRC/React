import React from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import './Card.css';
import App from "./App";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  
    <App />
  
);