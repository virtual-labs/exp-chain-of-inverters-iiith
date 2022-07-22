import { setCoordinates, fillInputDots, objectDisappear, objectAppear, fillColor, setColor, unsetColor } from "./animation-utility.js";
'use strict';

window.simulationStatus = simulationStatus;
window.restartCircuit = restartCircuit;
window.setSpeed = setSpeed;
window.setInput = setInput;
// Dimensions of working area
const circuitBoard = document.getElementById("circuit-board");
const sidePanels = document.getElementsByClassName("v-datalist-container");

// Distance of working area from top
const circuitBoardTop = circuitBoard.offsetTop;

// Full height of window
const windowHeight = window.innerHeight;
const width = window.innerWidth;
const svg = document.querySelector(".svg");
const svgns = "http://www.w3.org/2000/svg";

const EMPTY = "";
const status = document.getElementById("play-or-pause");
const observ = document.getElementById("observations");
const speed = document.getElementById("speed");


const objects = [
    document.getElementById("input0"),
    document.getElementById("input1"),
    document.getElementById("input2"),
    document.getElementById("output0"),
    document.getElementById("output1"),
    document.getElementById("output2")
];
const textInput = [
    document.createElementNS(svgns, "text"),
    document.createElementNS(svgns, "text"),
    document.createElementNS(svgns, "text")
];
const textOutput = [
    document.createElementNS(svgns, "text"),
    document.createElementNS(svgns, "text"),
    document.createElementNS(svgns, "text")
];
const inputDots = [
    document.createElementNS(svgns, "circle"),
    document.createElementNS(svgns, "circle"),
    document.createElementNS(svgns, "circle"),
    document.createElementNS(svgns, "circle"),
    document.createElementNS(svgns, "circle"),
    document.createElementNS(svgns, "circle"),
    document.createElementNS(svgns, "circle"),
    document.createElementNS(svgns, "circle"),
    document.createElementNS(svgns, "circle")
];

let decide = false;
let circuitStarted = false;

function demoWidth() {
    if (width < 1024) {
        circuitBoard.style.height = "600px";
    } else {
        circuitBoard.style.height = `${windowHeight - circuitBoardTop - 20}px`;
    }
    sidePanels[0].style.height = circuitBoard.style.height;
}

//initialise input text
function textIOInit() {
    for (const text of textInput) {
        text.textContent = 2;
    }
}
function outputCoordinates() {
    setCoordinates(895, 108, textOutput[0]);
    svg.append(textOutput[0]);
    setCoordinates(895, 373, textOutput[1]);
    svg.append(textOutput[1]);
    setCoordinates(895, 638, textOutput[2]);
    svg.append(textOutput[2]);
}

function inputDotsDisappear() {
    for (const inputDot of inputDots) {
        objectDisappear(inputDot);
    }
}


// function to disappear the output text
function outputDisappear() {
    for (const text of textOutput) {
        objectDisappear(text);
    }
}

function inputTextDisappear() {
    for (const text of textInput) {
        objectDisappear(text);
    }
}

// function to appear the input text
function clearObservation() {
    observ.innerHTML = EMPTY;
}
function allDisappear() {
    inputDotsDisappear();
    outputDisappear();
    inputTextDisappear();
    for (const object of objects) {
        fillColor(object, "#008000");
    }
}


function setInput() {
    if (timeline.progress() === 0) {
        if (textInput[0].textContent !== "0") {
            changeTo0(-5, 108, 0, 0);
            changeTo0(-5, 373, 1, 1);
            changeTo0(-5, 638, 2, 2);
        }
        else {
            changeTo1(-5, 108, 0, 0);
            changeTo1(-5, 373, 1, 1);
            changeTo1(-5, 638, 2, 2);
        }
        setter(textInput[1].textContent, inputDots[1]);
    }
    else if (timeline.progress() === 1) {
        observ.innerHTML = "Simulation has finished. Press Reset to start again";
    }
    else {
        observ.innerHTML = "Simulation has started wait for it to end";
    }
}


function changeTo1(coordinateX, coordinateY, object, textObject) {
    textInput[textObject].textContent = 1;
    svg.appendChild(textInput[textObject]);
    setCoordinates(coordinateX, coordinateY, textInput[textObject]);

    fillColor(objects[object], "#03b1fc");
    objectAppear(textInput[textObject]);
    clearObservation();
}

function changeTo0(coordinateX, coordinateY, object, textObject) {
    textInput[textObject].textContent = 0;
    svg.appendChild(textInput[textObject]);
    setCoordinates(coordinateX, coordinateY, textInput[textObject]);

    fillColor(objects[object], "#eeeb22");
    objectAppear(textInput[textObject]);
    clearObservation();
}

function reboot() {
    for (const text of textInput) {
        text.textContent = 2;
    }
}
function display() {
    observ.innerHTML = `
    <p>
        The delay caused by one inverter is calculated to approx 2 nano seconds. Here we have used the scale 1 second = 0.4 nano seconds.
    </p>
    <p>
        Simulation has finished. Press Reset to start again
    </p>`;
}
function setter(value, component) {
    //toggles the text content a of input/output component b
    if (value === "1") {
        unsetColor(component);
    }
    else {
        setColor(component);
    }
}

function setSpeed(speed) {
    if (circuitStarted) {
        timeline.timeScale(parseInt(speed));
        observ.innerHTML = `${speed}x speed`;
    }
}

function restartCircuit() {
    circuitStarted = false;
    timeline.seek(0);
    timeline.pause();
    allDisappear();
    reboot();
    clearObservation();
    decide = false;
    status.innerHTML = "Start";
    observ.innerHTML = "Successfully restored";
    speed.selectedIndex = 0;

}

function simulationStatus() {
    if (!decide) {
        startCircuit();
    }
    else {
        stopCircuit();
    }
}
function stopCircuit() {
    if (timeline.progress() !== 1) {
        timeline.pause();
        observ.innerHTML = "Simulation has been Paused";
        decide = false;
        status.innerHTML = "Start";
    }
    else {
        observ.innerHTML = "Please Restart the simulation";
    }
}
function startCircuit() {
    if (circuitStarted) {
        timeline.play();
        timeline.timeScale(parseInt(speed.value));
        observ.innerHTML = "Simulation has started";
        decide = true;
        status.innerHTML = "Pause";
    }
    else {
        if (textInput[0].textContent !== "2") {
            circuitStarted = true;
            timeline.play();
            timeline.timeScale(parseInt(speed.value));
            observ.innerHTML = "Simulation has started.";
            decide = true;
            status.innerHTML = "Pause";
        }
        else if (textInput[0].textContent === "2") {
            observ.innerHTML = "Please set the value of input to either 0 or 1";
        }
    }
}

function initInputDots() {
    //sets the coordinates of the input dots
    for (const inputDot of inputDots) {
        fillInputDots(inputDot, 0, 200, 15, "#FF0000");
        svg.append(inputDot);
    }
}

function getReverse(value) {
    if (value === "0") {
        return "1";
    }
    else {
        return "0";
    }
}

function simulator1Task1() {
    setter(textInput[0].textContent, inputDots[0]);
    objectAppear(inputDots[0]);
    timeline.to(inputDots[0], {
        motionPath: {
            path: "#path0",
            align: "#path0",
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        },

        duration: 10,
        delay: 0,
        repeat: 0,
        repeatDelay: 3,
        yoyo: true,
        ease: "none",
        paused: false,

    }, 0);
}

function simulator1Task2() {
    setter(textInput[0].textContent, inputDots[1]);
    objectAppear(inputDots[1]);

}

function simulator2Task2() {
    setter(getReverse(textInput[0].textContent), inputDots[2]);
    objectAppear(inputDots[2]);

}

function simulator3Task2() {
    setter(textInput[0].textContent, inputDots[3]);
    objectAppear(inputDots[3]);

}

function simulator1Task3() {
    setter(textInput[0].textContent, inputDots[4]);
    objectAppear(inputDots[4]);
}
function simulator2Task3() {
    setter(getReverse(textInput[0].textContent), inputDots[5]);
    objectAppear(inputDots[5]);
}
function simulator3Task3() {
    setter(textInput[0].textContent, inputDots[6]);
    objectAppear(inputDots[6]);
}
function simulator4Task3() {
    setter(getReverse(textInput[0].textContent), inputDots[7]);
    objectAppear(inputDots[7]);
}
function simulator5Task3() {
    setter(textInput[0].textContent, inputDots[8]);
    objectAppear(inputDots[8]);
}


function outputHandler() {
    textOutput[0].textContent = textInput[0].textContent;
    textOutput[1].textContent = textInput[1].textContent;
    textOutput[2].textContent = textInput[2].textContent;
    objectAppear(textOutput[0]);
    objectAppear(textOutput[1]);
    objectAppear(textOutput[2]);
    setter(textOutput[0].textContent, objects[3]);
    setter(textOutput[0].textContent, objects[4]);
    setter(textOutput[0].textContent, objects[5]);

}


//execution starts here
let timeline = gsap.timeline({ repeat: 0, repeatDelay: 0 });
gsap.registerPlugin(MotionPathPlugin);
demoWidth();
textIOInit();
outputCoordinates();
inputDotsDisappear();
initInputDots();
outputDisappear();

timeline.add(simulator1Task1, 0);
timeline.add(simulator1Task2, 0);
timeline.add(simulator1Task3, 0);
timeline.add(simulator2Task3, 3);
timeline.add(simulator2Task2, 4.33);
timeline.add(simulator3Task3, 6);
timeline.add(simulator3Task2, 8.76);
timeline.add(simulator4Task3, 9);
timeline.add(simulator5Task3, 12);
timeline.add(inputDotsDisappear, 14);
timeline.add(outputHandler, 14);
timeline.add(display, 14);
timeline.eventCallback("onComplete", display);
timeline.pause();

timeline.to(inputDots[1], {
    motionPath: {
        path: "#path1",
        align: "#path1",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 3.33,
    delay: 0,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 0);
timeline.to(inputDots[2], {
    motionPath: {
        path: "#path2",
        align: "#path2",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 3.33,
    delay: 4.33,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 0);
timeline.to(inputDots[3], {
    motionPath: {
        path: "#path3",
        align: "#path3",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },

    duration: 3.33,
    delay: 8.76,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 0);
timeline.to(inputDots[4], {
    motionPath: {
        path: "#path4",
        align: "#path4",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },
    duration: 1.5,
    delay: 0,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 0);
timeline.to(inputDots[5], {
    motionPath: {
        path: "#path5",
        align: "#path5",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },
    duration: 2,
    delay: 3,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 0);
timeline.to(inputDots[6], {
    motionPath: {
        path: "#path6",
        align: "#path6",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },
    duration: 2,
    delay: 6,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 0);
timeline.to(inputDots[7], {
    motionPath: {
        path: "#path7",
        align: "#path7",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },
    duration: 2,
    delay: 9,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 0);
timeline.to(inputDots[8], {
    motionPath: {
        path: "#path8",
        align: "#path8",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    },
    duration: 2,
    delay: 12,
    repeat: 0,
    repeatDelay: 3,
    yoyo: true,
    ease: "none",
    paused: false,

}, 0);
inputDotsDisappear();