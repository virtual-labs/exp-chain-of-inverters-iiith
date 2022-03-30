
function jpmos() {

    comp_count1 -= 1
    if(comp_count1 < 0){
        document.getElementById('error-container').style.display='flex'
        window.setTimeout("document.getElementById('error-container').style='display:none !important;';", 5000)
        return
    }
    
    //  keep tracking count
    var id = "pmos" + count1;
    count1 = count1 + 1;
    var container = document.getElementById("diagram");

    // render in workspace
    var d = document.createElement('div');
    d.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="svg-component" height="100" width="100" viewBox="0 0 100 100"><g><path d="M 29.78 77 L 29.78 27" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01"/><path d="M 35.33 77 L 35.33 27" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01"/><path d="M 35.33 39.5 L 52 39.5 L 52 2" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01"/><path d="M 52 102 L 52 64.5 L 35.33 64.5" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01"/><path d="M 2 52 L 18.67 52" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01"/><ellipse cx="24.02" cy="51.11" rx="5.357142857142858" ry="5.357142857142858" fill="none" stroke="green" stroke-width="2.5"/></g></svg> '
    d.id = id;
    d.className = 'component';
    d.midterminal = 1;
    d.outterminal = 1;
    d.voltage = 0;
    d.outvoltage = 0;
    d.number = count1;
    // Added javasript objects and their properties
    let d1 = new Object();
    d1.id = id;
    d1.voltage = 0;
    d1.midterminal = 1;
    d1.outterminal = 1;
    d1.outvoltage = 0;
    
    container.insertAdjacentElement("afterbegin", d);
    instance.draggable(id, { "containment": true });


    list_pmos.push(d1);
    addinstancepmos(id);

}

function jnmos() {
    comp_count2 -= 1
    if(comp_count2 < 0){
        document.getElementById('error-container').style.display='flex'
        window.setTimeout("document.getElementById('error-container').style='display:none !important;';", 5000)
        return
    }

    var person;

    var id = "nmos" + count2;


    var d = document.createElement('div');
    d.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="svg-component" height="100" width="100" viewBox="0 0 100 100"><g><path d="M 27.71 77 L 27.71 27" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01" /><path d="M 36.29 77 L 36.29 27" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01" /><path d="M 36.29 39.5 L 62 39.5 L 62 2" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01" /><path d="M 62 102 L 62 64.5 L 36.29 64.5" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.011" /><path d="M 2 52 L 27.71 52" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01"></g></svg>'
    d.id = id;
    d.className = 'component';
    d.voltage = 0;
    d.midterminal = 1;
    d.outterminal = 1;
    d.outvoltage = 0;
    count2 = count2 + 1;
    var container = document.getElementById("diagram");


    let d1 = new Object();
    d1.id = id;
    d1.voltage = 0;
    d1.midterminal = 1;
    d1.outterminal = 1;
    d1.outvoltage = 0;

    container.insertAdjacentElement("afterbegin", d);

    instance.draggable(id, { "containment": true });
    list_nmos.push(d1);

    addinstancenmos(id);


}
function jvdd() {
    comp_count3 -= 1
    if(comp_count3 < 0){
        document.getElementById('error-container').style.display='flex'
        window.setTimeout("document.getElementById('error-container').style='display:none !important;';", 5000)
        return
    }

    var person;

    var id = "vdd" + count3;

    var d = document.createElement('div');
    d.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="svg-component" height="100" width="100" viewBox="0 0 100 100"><g><path d="M 21 41 L 21 1 L 1 1 L 41 1" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01"/></g></svg>'
    d.id = id;
    d.className = 'component';
    d.voltage = 1;
    count3 = count3 + 1;

    let d1 = new Object();
    d1.id = id;
    d1.voltage = 1;

    var container = document.getElementById("diagram");


    container.insertAdjacentElement("afterbegin", d);

    instance.draggable(id, { "containment": true });
    list_vdd.push(d1);

    addinstancevdd(id);


}

function jground() {

    comp_count4 -= 1
    if(comp_count4 < 0){
        document.getElementById('error-container').style.display='flex'
        window.setTimeout("document.getElementById('error-container').style='display:none !important;';", 5000)
        return
    }

    var id = "ground" + count4;

    var container = document.getElementById("diagram");

    var d = document.createElement('div');
    d.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="svg-component" height="100" width="100" viewBox="0 0 100 100"><g><path d="M 31 1 L 31 31 L 1 31 L 61 31" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01"/><path d="M 11 41 L 51 41" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01"/><path d="M 21 51 L 41 51" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01"/></g></svg>'
    d.id = id;
    d.className = 'component';
    d.voltage = 0;
    count4 = count4 + 1;
    
    let d1 = new Object();
    d1.id = id;
    d1.voltage = 0;



    container.insertAdjacentElement("afterbegin", d);

    instance.draggable(id, { "containment": true });
    list_ground.push(d1);

    addinstanceground(id);
    


}

function jinput() {
    var person;

    var id = "input" + count5;


    var d = document.createElement('div');
    d.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="svg-component" height="100" width="100" viewBox="0 0 100 100"><g><path d="M 1 31 L 1 1 L 61 1 L 41 31" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01"/><path d="M 1 31 L 41 31" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01"/></g></svg>'
    d.id = id;
    d.className = 'component';
    d.input = 0;
    d.voltage = 5;
    count5 = count5 + 1;
    var container = document.getElementById("diagram");
    
    let d1 = new Object();
    d1.id = id;
    d1.input = 1;
    d1.voltage = 5;

    container.insertAdjacentElement("afterbegin", d);

    instance.draggable(id, { "containment": true });
    list_input.push(d1);

    addinstanceinput(id);

}

function joutput() {
    var person;

    var id = "output" + count6;
    var d = document.createElement('div');
    d.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="svg-component" height="100" width="100" viewBox="0 0 100 100"><g><path d="M 61 31 L 61 1 L 1 1 L 21 31" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01"/><path d="M 61 31 L 21 31" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01"/></g></svg>'
    d.id = id;
    d.className = 'component';
    d.outputsign = 1;
    d.voltage = 0;

    let d1 = new Object();
    d1.id = id;
    d1.voltage = 0;
    d1.outputsign = 1;

    count6 = count6 + 1;
    var container = document.getElementById("diagram");


    container.insertAdjacentElement("afterbegin", d);

    instance.draggable(id, { "containment": true });
    list_ouput.push(d1);

    addinstanceoutput(id);


}
function jinverter() {
    
    var id = "inverter" + count7;
    var d = document.createElement('div');
    d.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="svg-component" height="100" width="100" viewBox="0 0 100 100"><g><path d="M 31 81 L 71 41 L 31 1 L 31 81" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01" pointer-events="stroke"/><path d="M 1 41 L 31 41" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01" pointer-events="stroke"/><ellipse cx="81" cy="41" rx="10" ry="10" fill="none" stroke="green" stroke-width="2.5" pointer-events="all"/><path d="M 91 41 L 111 41" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01" pointer-events="stroke"/></g></svg>'
    d.id = id;
    d.className = 'component';
    d.outputsign = 1;
    d.voltage = 0;

    let d1 = new Object();
    d1.id = id;
    d1.voltage = 0;
    d1.outputsign = 1;

    count7 = count7 + 1;
    var container = document.getElementById("diagram");


    container.insertAdjacentElement("afterbegin", d);

    instance.draggable(id, { "containment": true });
    list_inverter.push(d1);

    addinstanceinverter(id);


}

function jmux() {
    
    var id = "mux" + count8;
    var d = document.createElement('div');
    d.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="svg-component" height="100" width="100" viewBox="0 0 100 100"><g><path d="M 1 41 L 1 1 L 21 21 L 41 1 L 41 41" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01" pointer-events="stroke"/></g></svg>'
    d.id = id;
    d.className = 'component';
    d.outputsign = 1;
    d.voltage = 0;

    let d1 = new Object();
    d1.id = id;
    d1.voltage = 0;
    d1.outputsign = 1;

    count8 = count8 + 1;
    var container = document.getElementById("diagram");


    container.insertAdjacentElement("afterbegin", d);

    instance.draggable(id, { "containment": true });
    list_inverter.push(d1);

    addinstancemux(id);


}

function jlatch() {
    
    var id = "latch" + count9;
    var d = document.createElement('div');
    d.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="svg-component" height="100" width="100" viewBox="0 0 100 100"><g><path d="M 41 41 L 1 41 L 1 1" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01" pointer-events="stroke"/></g></svg>'
    d.id = id;
    d.className = 'component';
   

    let d1 = new Object();
    d1.id = id;
    d1.voltage = 0;
    d1.outputsign = 1;

    count9 = count9 + 1;
    var container = document.getElementById("diagram");


    container.insertAdjacentElement("afterbegin", d);

    instance.draggable(id, { "containment": true });
    list_inverter.push(d1);

    addinstancelatch(id);


}

function jtransistor() {
    
    var id = "pt" + count10;
    var d = document.createElement('div');
    d.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="svg-component" height="100" width="100" viewBox="0 0 100 100"><g><path d="M 1 81 L 1 1 L 41 21 L 1 41" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01" pointer-events="stroke"/></g></svg>'
    d.id = id;
    d.className = 'component';
  
    let d1 = new Object();
    d1.id = id;
    d1.voltage = 0;
    d1.outputsign = 1;

    count10 = count10 + 1;
    var container = document.getElementById("diagram");


    container.insertAdjacentElement("afterbegin", d);

    instance.draggable(id, { "containment": true });
    list_inverter.push(d1);

    addinstancetransistor(id);


}
function jclock() {
    
    var id = "clock" + count11;
    var d = document.createElement('div');
    //d.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="svg-component" height="100" width="100" viewBox="0 0 100 100"><g><path d="M 1 81 L 1 1 L 41 21 L 1 41" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01" pointer-events="stroke"/></g></svg>'
    d.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="svg-component" height="100" width="100" viewBox="0 0 100 100"><g><path d="M 1 31 L 1 1 L 61 1 L 41 31" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01"/><path d="M 1 31 L 41 31" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01"/></g></svg>'
    d.id = id;
    d.className = 'component';
    d.outputsign = 1;
    d.voltage = 0;

    let d1 = new Object();
    d1.id = id;
    d1.voltage = 0;
    d1.outputsign = 1;

    count11 = count11 + 1;
    var container = document.getElementById("diagram");


    container.insertAdjacentElement("afterbegin", d);

    instance.draggable(id, { "containment": true });
    list_inverter.push(d1);

    addinstanceclock(id);


}
function jclockbar() {
    
    var id = "clockbar" + count12;
    var d = document.createElement('div');
    d.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="svg-component" height="100" width="100" viewBox="0 0 100 100"><g><path d="M 1 31 L 1 1 L 61 1 L 41 31" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01"/><path d="M 1 31 L 41 31" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01"/></g></svg>'
    //d.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="svg-component" height="100" width="100" viewBox="0 0 100 100"><g><path d="M 1 81 L 1 1 L 41 21 L 1 41" fill="none" stroke="green" stroke-width="2.5" stroke-miterlimit="0.01" pointer-events="stroke"/></g></svg>'
    d.id = id;
    d.className = 'component';
    d.outputsign = 1;
    d.voltage = 0;

    let d1 = new Object();
    d1.id = id;
    d1.voltage = 0;
    d1.outputsign = 1;

    count12 = count12 + 1;
    var container = document.getElementById("diagram");


    container.insertAdjacentElement("afterbegin", d);

    instance.draggable(id, { "containment": true });
    list_inverter.push(d1);

    addinstanceclockbar(id);


}

function jfinput0() {
    var person;

    var id = "input0";

    var d = document.createElement('div');
    d.innerHTML = 'Input 1<br>1'
    d.id = id;
    d.className = 'input_component1';
    d.classList.add("HIGH");
    d.addEventListener("dblclick", ()=>{
        k = document.getElementById("input0")
        if(k.classList.contains("HIGH"))
        {
            k.classList.remove("HIGH")
            k.classList.add("LOW")
            k.innerHTML = 'Input 1<br>0'
            list_input[0].input = 0;
        }
        else
        {
            k.classList.remove("LOW")
            k.classList.add("HIGH")
            k.innerHTML = 'Input 1<br>1'
            list_input[0].input = 1;
        }
    })
    d.input = 0;
    d.voltage = 5;
    var container = document.getElementById("diagram");
    
    let d1 = new Object();
    d1.id = id;
    d1.input = 1;
    d1.voltage = 5;

    container.insertAdjacentElement("afterbegin", d);

    instance.draggable(id, { "containment": true });
    list_input.push(d1);

    addinstancefinalinput(id);

}

function jfinput1() {
    var person;

    var id = "input1";

    var d = document.createElement('div');
    d.innerHTML = 'Input 2<br>1'
    d.id = id;
    d.className = 'input_component2';
    d.classList.add("HIGH");
    d.addEventListener("dblclick", ()=>{
        k = document.getElementById("input1")
        if(k.classList.contains("HIGH"))
        {
            k.classList.remove("HIGH")
            k.classList.add("LOW")
            k.innerHTML = 'Input 2<br>0'
            list_input[1].input = 0;
        }
        else
        {
            k.classList.remove("LOW")
            k.classList.add("HIGH")
            k.innerHTML = 'Input 2<br>1'
            list_input[1].input = 1;
        }
    })
    d.input = 0;
    d.voltage = 5;
    var container = document.getElementById("diagram");
    
    let d1 = new Object();
    d1.id = id;
    d1.input = 1;
    d1.voltage = 5;

    container.insertAdjacentElement("afterbegin", d);

    instance.draggable(id, { "containment": true });
    list_input.push(d1);

    addinstancefinalinput(id);

}

function jfoutput() {
    var person;

    var id = "output0";
    var d = document.createElement('div');
    d.innerHTML = 'Output<br>-'
    d.id = id;
    d.className = 'output_component';
    d.outputsign = 1;
    d.voltage = 0;

    let d1 = new Object();
    d1.id = id;
    d1.voltage = 0;
    d1.outputsign = 1;

    count6 = count6 + 1;
    var container = document.getElementById("diagram");


    container.insertAdjacentElement("afterbegin", d);

    instance.draggable(id, { "containment": true });
    list_ouput.push(d1);

    addinstancefinaloutput(id);
}

function jf2input0() {
    var person;

    var id = "input0";

    var d = document.createElement('div');
    d.innerHTML = 'Input 1<br><br>'
    d.id = id;
    d.className = 'input_component1';
    d.input = 0;
    d.voltage = 5;
    var container = document.getElementById("diagram");
    let d1 = new Object();
    d1.id = id;
    d1.input = 1;
    d1.voltage = 5;
    container.insertAdjacentElement("afterbegin", d);
    instance.draggable(id, { "containment": true });
    list_input.push(d1);
    addinstancefinalinput(id);

}

function jf2output() {
    var person;

    var id = "output0";
    var d = document.createElement('div');
    d.innerHTML = 'Output<br><br>'
    d.id = id;
    d.className = 'output_component';
    d.outputsign = 1;
    d.voltage = 0;

    let d1 = new Object();
    d1.id = id;
    d1.voltage = 0;
    d1.outputsign = 1;

    count6 = count6 + 1;
    var container = document.getElementById("diagram");


    container.insertAdjacentElement("afterbegin", d);

    instance.draggable(id, { "containment": true });
    list_ouput.push(d1);

    addinstancefinaloutput(id);
}
