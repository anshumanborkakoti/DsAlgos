const _ = require('lodash');


// Your previous Plain Text content is preserved below:

// Today we’re going to build a basic spreadsheet application like Google sheets or Excel but much simpler. Our spreadsheet, let’s call it OpenSheet, will only support cells which hold either integers or formulas that sum two cells.

// You are tasked with writing a program that handles this functionality for OpenSheet. You can make any decisions you want regarding how this program is organized, but there must be some sort of setter/getter methods that can be called by the application for any given cell. All inputs will be strings. 

// For setting you can expect two inputs: the cell location and the cell value. 

// Example of how your setter could look
// set_cell("C1", "45")
// set_cell("B1", "10")
// set_cell("A1", "=C1+B1")

// For getting you will be provided one input that is the cell location.

// Example of how your getter could look
// set_cell("C1", "45") 
// set_cell("B1", "10")
// set_cell("A1", "=C1+B1")
// get_cell("A1") # should return 55 in this case

// Assumptions
// * In memory storage
// * All cell location inputs will be well formed (no need to validate in code)
// * All cell value inputs will be well formed (no need to validate in code)
// * Cells value inputs are either a summation of two other cells or an int
// * Empty cells are treated as zero when accessed


/**
 *  Input -> name of the cell and the value/formula
 *  Output -> getting the value
 *  Create a cell class
 *  constructor -> name and value
 *  getter -> argument cell name- > looks up the hashmap, gets the value of the cell
 *  if it is a formula, parses the formula and gets the cells names and operator.
 *  fetches values of the cells and performs the operation
 * Store instances of the cells in a hashmap
 *
 */

class Cell {
    constructor(name, value = 0) {
        this.name = name;
        this.value = value;
    }
}
const map = {};
function set_cell(name, value) {
    map[name] = new Cell(name, value);
}

function get_cell(name) {
    if (!map[name]) {
        return 0;
    }
    const cell = map[name];
    // console.log(`${JSON.stringify(map)}`)
    //console.log(JSON.stringify(map))
    if (cell.value.startsWith("=")) {
        return parseFormula(cell.value, name);
    }
    return cell.value;
}

function parseFormula(formula, name) {

    if (!isNaN(formula)) {
        return formula;
    }
    //formula
    const [firstCellName, secondCellName] = formula.substr(1).split('+');
    //console.log(firstCellName,secondCellName)
    let firstCellVal = 0;
    if (map[firstCellName]) {
        firstCellVal = map[firstCellName].value;
        console.log(`${firstCellName} ${firstCellVal}`);
    } else {
        map[firstCellName] = new Cell(firstCellName);
    }
    let secondCellVal = 0;
    if (map[secondCellName]) {
        secondCellVal = map[secondCellName].value;
        console.log(`${secondCellName} ${secondCellVal}`);
    } else {
        map[secondCellName] = new Cell(secondCellName);

    }
    return (parseInt(parseFormula(firstCellVal)) + parseInt(parseFormula(secondCellVal)));
}


set_cell("C1", "45")
set_cell("B1", "23")
set_cell("A1", "=B1+C1")
console.log(get_cell("A1"))
set_cell("C1", "50")
console.log(get_cell("A1"))
