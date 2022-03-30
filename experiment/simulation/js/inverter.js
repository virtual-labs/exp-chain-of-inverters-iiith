function inverter(){
    if(count7%2 == 1 ){
        if(list_input[0].input)
        {
            document.getElementById("output-box").innerHTML = "Output is 0 "
        }
        else
        {
            document.getElementById("output-box").innerHTML = "Output is 1 "
        }
       
      
    }
    if(count7%2 == 0 ){
        if(list_input[0].input)
        {
            document.getElementById("output-box").innerHTML = "Output is 1 "
        }
        else
        {
            document.getElementById("output-box").innerHTML = "Output is 0 "
        }
      

    }
    invertervalidate()
}

function permutator(inputArr) {
    var results = [];
  
    function permute(arr, memo) {
      var cur, memo = memo || [];
  
      for (var i = 0; i < arr.length; i++) {
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

function invertervalidate()
{
    x = permutator([0, 1, 2, 3, 4])
    // console.log(x)
    circuit_valid = 0
    for (let i = 0; i < x.length; i++) {
        if(jsmap.has("input0$inverter" + x[i][0]) && jsmap.has("inverter" + x[i][0] + "$inverter" + x[i][1]) && jsmap.has("inverter" + x[i][1] + "$inverter" + x[i][2]) && jsmap.has("inverter" + x[i][2] + "$inverter" + x[i][3]) && jsmap.has("inverter" + x[i][3] + "$inverter" + x[i][4]) && jsmap.has("inverter" + x[i][4] + "$output0")){
            circuit_valid = 1
            break
        }
    }
    if(circuit_valid)
    {
        document.getElementById("graph-image").src = "./images/Screenshot (169).png" 
        document.getElementById("graph-image").style.display = "block";      
    }
    else
    {  
        document.getElementById("graph-image").style.display = "none";
        alert("The circuit is wrong");
    }
}
