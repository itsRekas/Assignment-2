// Arrays defining the panel navigation paths
let Panelprev = ["panel1", "panel1", "panel2", "panel3", "panel3", "panel2", "panel6", "panel7", "panel7", "panel4", "panel5", "panel8", "panel8"];
let Panelarray = ["panel1", "panel2", "panel3", "panel4", "panel5", "panel6", "panel7", "panel8", "panel8b", "panel9", "panel10", "panel11", "panel12"];
let Panelnexta = ["panel2", "panel3", "panel5", "panel9", "panel10", "panel7", "panel8", "panel11", "panel12", "panel9", "panel10", "panel11", "panel12"];
let Panelnextb = ["panel2", "panel6", "panel4", "panel9", "panel10", "panel7", "panel8b", "panel11", "panel12", "panel9", "panel10", "panel11", "panel12"];

// Index to keep track of the current panel being displayed
let currentindex = 0;

// Function to get the next panel in path 'a'
function getnexta(x) {
    return x === Panelnexta[currentindex];
}

// Function to get the next panel in path 'b'
function getnextb(x) {
    return x === Panelnextb[currentindex];
}

// Function to get the previous panel
function getback(x) {
    return x === Panelprev[currentindex];
}

// Function to navigate to the next panel in path 'a'
function nexta() {
    // Hide the current panel
    document.getElementById(Panelarray[currentindex]).style.display = 'none';
    // Update the current index to the next panel in path 'a'
    currentindex = Panelarray.findIndex(getnexta);
    console.log(Panelarray.findIndex(getnexta));
    // Display the next panel
    document.getElementById(Panelarray[currentindex]).style.display = 'block';
}

// Function to navigate to the next panel in path 'b'
function nextb() {
    // Hide the current panel
    document.getElementById(Panelarray[currentindex]).style.display = 'none';
    // Update the current index to the next panel in path 'b'
    currentindex = Panelarray.findIndex(getnextb);
    console.log(Panelarray.findIndex(getnextb));
    // Display the next panel
    document.getElementById(Panelarray[currentindex]).style.display = 'block';
}

// Function to navigate back to the previous panel
function back() {
    // Hide the current panel
    document.getElementById(Panelarray[currentindex]).style.display = 'none';
    // Update the current index to the previous panel
    currentindex = Panelarray.findIndex(getback);
    console.log(Panelarray.findIndex(getback));
    // Display the previous panel
    document.getElementById(Panelarray[currentindex]).style.display = 'block';
}

// Initially display the first panel
document.getElementById(Panelarray[currentindex]).style.display = 'block';
