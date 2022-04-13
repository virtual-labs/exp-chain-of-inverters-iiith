function permutator(inputArr) {
    const results = [];

    function permute(arr, memo) {
        let cur

        memo = memo || [];

        for (let i = 0; i < arr.length; i++) {
            cur = arr.splice(i, 1);
            if (arr.length === 0) {
                results.push(memo.concat(cur));
            }
            permute(arr.slice(), memo.concat(cur));
            arr.splice(i, 0, cur[0]);
        }

        return results;
    }

    return permute(inputArr);
}

function inverterValidate() {
    const x = permutator([0, 1, 2, 3, 4])
    // console.log(x)
    circuitValid = 0
    for (let i = 0; i < x.length; i++) {
        if (connectionMap.has("input0$inverter" + x[i][0]) && connectionMap.has("inverter" + x[i][0] + "$inverter" + x[i][1]) && connectionMap.has("inverter" + x[i][1] + "$inverter" + x[i][2]) && connectionMap.has("inverter" + x[i][2] + "$inverter" + x[i][3]) && connectionMap.has("inverter" + x[i][3] + "$inverter" + x[i][4]) && connectionMap.has("inverter" + x[i][4] + "$output0")) {
            circuitValid = 1
            break
        }
    }
    document.getElementById('error-container').style = 'display:none;';
    if (circuitValid) {
        document.getElementById("graph-image").src = "./images/Screenshot (169).png"
        document.getElementById("graph-image").style.display = "block";
        changeObservation("&#10004; Circuit is correct", 'text-danger', 'text-success')
    }
    else {
        document.getElementById("graph-image").style.display = "none";
        changeObservation("&#10060; Circuit is incorrect", 'text-success', 'text-danger')
    }
}

function changeObservation(htmlText, removedClass, addedClass) {
    document.getElementById("output-text").innerHTML = htmlText
    document.getElementById("output-text").classList.remove(removedClass)
    document.getElementById("output-text").classList.add(addedClass)
}
