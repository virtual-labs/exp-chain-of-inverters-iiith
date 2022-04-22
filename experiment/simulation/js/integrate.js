'use strict';

function compInverter() {
    maxCount.Inverter -= 1;
    if (maxCount.Inverter < 0) {
        document.getElementById('error-container').style.display = 'flex';
        return;
    }
    const id = "inverter" + count.Inverter;
    const svgElement = document.createElement('div');
    svgElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-0.5 -0.5 84 53"><g><path d="M 1 26 L 21 26" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 21 1 L 61 26 L 21 51 Z" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="all"/><ellipse cx="66" cy="26" rx="5" ry="5" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" pointer-events="all"/><path d="M 71 26 L 81 26" fill="none" stroke="rgb(0, 0, 0)" stroke-width="3" stroke-miterlimit="10" pointer-events="stroke"/></g></svg>';
    svgElement.id = id;
    svgElement.className = 'component';
    count.Inverter += 1;
    const container = document.getElementById("diagram");
    container.insertAdjacentElement("afterbegin", svgElement);
    jsplumbInstance.draggable(id, { "containment": true });
    addInstanceInverter(id);
}

function comp2Input0() {
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
}

function comp2Output() {
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
}