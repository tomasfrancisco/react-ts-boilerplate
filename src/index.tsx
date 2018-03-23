import "./global.styles";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppController } from "@modules/app";
import registerServiceWorker from "./registerServiceWorker";

const domElement = document.getElementById("root") as HTMLElement;
ReactDOM.render(<AppController />, domElement);
registerServiceWorker();
