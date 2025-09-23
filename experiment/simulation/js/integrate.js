'use strict';
import { jsplumbInstance,addInstanceFinalInput,addInstanceFinalOutput,addInstanceInverter } from "./components.js";
import {inverterValidate} from "./inverter.js";
import {componentsList} from "./main.js";
window.compInverter = compInverter;
window.inverterValidate = inverterValidate;
let count = { PMOS: 0, NMOS: 0, VDD: 0, Ground: 0, Inverter: 0, Mux: 0, Latch: 0, Transistor: 0, Clock: 0, Clockbar: 0 };
let maxCount = { PMOS: 0, NMOS: 0, VDD: 0, Ground: 0, Inverter: 5, Mux: 0, Latch: 0, Transistor: 0, Clock: 0, Clockbar: 0 };

export function resetCounts() {
    count = { PMOS: 0, NMOS: 0, VDD: 0, Ground: 0, Inverter: 0, Mux: 0, Latch: 0, Transistor: 0, Clock: 0, Clockbar: 0 };
    maxCount = { PMOS: 0, NMOS: 0, VDD: 0, Ground: 0, Inverter: 5, Mux: 0, Latch: 0, Transistor: 0, Clock: 0, Clockbar: 0 };
}
function menu(id, event,type) {
    contextMenu.style.top = `${event.clientY}px`;
    contextMenu.style.left = `${event.clientX}px`;
    contextMenu.style.display = "block";
    
    deleteOption.removeEventListener("click", deleteEventHandler);
    deleteOption.addEventListener("click", deleteEventHandler);
    
    function deleteEventHandler(event) {
        event.preventDefault();
        const connections = jsplumbInstance.getAllConnections();
        // console.log("+++++++++++");
        // console.log(connections);
    connections.forEach(connection => {
        if (connection.sourceId === id || connection.targetId === id) {
            jsplumbInstance.deleteConnection(connection);
        }
    });
        const element = document.getElementById(id);
        // console.log("type ",count[type]);
        if (element) {
            hideEndpoints(id); // Hide all endpoints
            element.style.display = 'none'; // Hide the element
            maxCount[type] += 1;
            count[type] -= 1;
        }
        // console.log("type ",count[type]);
        contextMenu.style.display = "none";
    }
}

function hideEndpoints(id) {
    const endpoints = jsplumbInstance.getEndpoints(id);
  
    if (endpoints) {
        endpoints.forEach(endpoint => {
        endpoint.canvas.style.visibility = 'hidden';
        });
    }
}
function showEndpoints(id) {
    const endpoints = jsplumbInstance.getEndpoints(id);
    if (endpoints) {
        endpoints.forEach(endpoint => {
            
            endpoint.canvas.style.visibility = 'visible';
        });
    }
}
export function compInverter() {
    maxCount.Inverter -= 1;
    if (maxCount.Inverter < 0) {
        document.getElementById('error-container').style.display = 'flex';
        return;
    }
    const id = "inverter" + count.Inverter;
    let svgElement = document.getElementById(id);
    if (!svgElement) {
    svgElement = document.createElement('div');
    svgElement.innerHTML = 
    `<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" version="1.1" viewBox="-0.5 -0.5 84 53">
        <g class="demo-transistor">
            <path d="M 1 26 L 21 26" />
            <path d="M 21 1 L 61 26 L 21 51 Z" />
            <ellipse cx="66" cy="26" rx="5" ry="5"/>
            <path d="M 71 26 L 81 26"/>
        </g>
    </svg>`;
    svgElement.id = id;
    svgElement.className = 'component';
    count.Inverter += 1;
    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", svgElement);
    jsplumbInstance.draggable(id, { "containment": true });
    svgElement.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        menu(id,event,'Inverter');
    });
    componentsList.push(svgElement);
    } else {
    svgElement.style.display = 'block'; // Show the element if it was previously hidden
    showEndpoints(id); // Show the endpoints
}
    addInstanceInverter(id);
}

export function comp2Input0() {
    const id = "input0";
    const svgElement = document.createElement('div');
    svgElement.innerHTML = 'Input 1<br><br>';
    svgElement.id = id;
    svgElement.className = 'io-component';
    svgElement.style.top = "1.25rem";
    svgElement.style.left = "0.625rem";
    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", svgElement);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstanceFinalInput(id);
    componentsList.push(svgElement);
}

export function comp2Output() {
    const id = "output0";
    const svgElement = document.createElement('div');
    svgElement.innerHTML = 'Output<br><br>';
    svgElement.id = id;
    svgElement.className = 'io-component';
    svgElement.style.top = "1.25rem";
    svgElement.style.right = "0.625rem";
    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", svgElement);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstanceFinalOutput(id);
    componentsList.push(svgElement);
}