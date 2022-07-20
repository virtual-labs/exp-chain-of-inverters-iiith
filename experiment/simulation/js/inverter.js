'use strict';
import { connectionMap } from "./main.js";
export function permutator(inputArr) {
    const results = [];

    function permute(arr, memo) {
        let currentCase;

        memo = memo || [];

        for (let i = 0; i < arr.length; i++) {
            currentCase = arr.splice(i, 1);
            if (arr.length === 0) {
                results.push(memo.concat(currentCase));
            }
            permute(arr.slice(), memo.concat(currentCase));
            arr.splice(i, 0, currentCase[0]);
        }

        return results;
    }

    return permute(inputArr);
}

export function inverterValidate() {
    const permutatorMap = permutator([0, 1, 2, 3, 4]);
    let circuitValid = 0;
    for (let i = 0; i < permutatorMap.length; i++) {
        if (connectionMap.has("input0$inverter" + permutatorMap[i][0]) && connectionMap.has("inverter" + permutatorMap[i][0] + "$inverter" + permutatorMap[i][1]) && connectionMap.has("inverter" + permutatorMap[i][1] + "$inverter" + permutatorMap[i][2]) && connectionMap.has("inverter" + permutatorMap[i][2] + "$inverter" + permutatorMap[i][3]) && connectionMap.has("inverter" + permutatorMap[i][3] + "$inverter" + permutatorMap[i][4]) && connectionMap.has("inverter" + permutatorMap[i][4] + "$output0") && connectionMap.size === 6) {
            circuitValid = 1;
            break;
        }
    }
    document.getElementById('error-container').style = 'display:none;';
    if (circuitValid) {
        document.getElementById("graph-image").src = "./images/delay-inverter.png";
        document.getElementById("graph-image").style.display = "block";
        document.getElementById("output-box").style.display = "block";
        changeObservation("&#10004; Circuit is correct", 'text-danger', 'text-success');
    } else {
        document.getElementById("graph-image").style.display = "none";
        document.getElementById("output-box").style.display = "none";
        changeObservation("&#10060; Circuit is incorrect", 'text-success', 'text-danger');
    }
}

export function changeObservation(htmlText, removedClass, addedClass) {
    const observationBoxElem = document.getElementById("output-text");
    observationBoxElem.innerHTML = htmlText;
    observationBoxElem.classList.remove(removedClass);
    observationBoxElem.classList.add(addedClass);
}
