let p1= document.getElementById("panel1");
let p2= document.getElementById("panel2");
let p3= document.getElementById("panel3");
let p4= document.getElementById("panel4");
let p5= document.getElementById("panel5");
let p6= document.getElementById("panel6");
let p7= document.getElementById("panel7");
let p8= document.getElementById("panel8");
let p9= document.getElementById("panel9");
let p10= document.getElementById("panel10");
let p11= document.getElementById("panel11");
let p12= document.getElementById("panel12");

let Panelprev= ["panel1","panel1","panel2","panel3","panel3","panel2","panel6","panel7","panel7","panel4","panel5", "panel8", "panel8"]
let Panelarray=["panel1","panel2","panel3","panel4","panel5","panel6","panel7","panel8","panel8b","panel9","panel10","panel11","panel12"]
let Panelnexta=["panel2","panel3","panel5","panel9","panel10","panel7","panel8","panel11","panel12","panel9","panel10","panel11","panel12"]
let Panelnextb=["panel2","panel6","panel4","panel9","panel10","panel7","panel8b","panel11","panel12","panel9","panel10","panel11","panel12"]

let currentindex=0;

function getnexta(x){
    return x===Panelnexta[currentindex];
}

function getnextb(x){
    return x===Panelnextb[currentindex];
}

function getback(x){
    return x===Panelprev[currentindex];
}

function nexta(){
    document.getElementById(Panelarray[currentindex]).style.display='none';
    currentindex=Panelarray.findIndex(getnexta);
    console.log(Panelarray.findIndex(getnexta));
    document.getElementById(Panelarray[currentindex]).style.display='block';
}

function nextb(){
    document.getElementById(Panelarray[currentindex]).style.display='none';
    currentindex=Panelarray.findIndex(getnextb);
    console.log(Panelarray.findIndex(getnextb));
    document.getElementById(Panelarray[currentindex]).style.display='block';
}

function back(){
    document.getElementById(Panelarray[currentindex]).style.display='none';
    currentindex=Panelarray.findIndex(getback);
    console.log(Panelarray.findIndex(getback));
    document.getElementById(Panelarray[currentindex]).style.display='block';
}

document.getElementById(Panelarray[currentindex]).style.display='block';