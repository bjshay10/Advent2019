const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
})

//total fuel
var totalFuel = 0
var fuelCost = 0
var fuelCostTemp = 0
var moduleWeight = 0
var moduleFuelCost = 0

// async function calcFuel(x) {
//     var temp = Math.floor(x / 3) - 2
//     if (temp < 3)
//         return 0
//     else
//         return(temp)
// }

lineReader.on('line', (line) => {
    // set init line value
    var l = line
    
    fuelCost = 0
    moduleWeight = l
    //calc fuel cost for line
    //recursive until value is 0
    do {
        moduleFuelCost = Math.floor(moduleWeight / 3) - 2
        fuelCost = fuelCost + moduleFuelCost
        moduleWeight = moduleFuelCost
        //console.log(`moduleWeight: ${moduleWeight}; fuelCost: ${fuelCost}`)
    } while (moduleWeight > 4)
    totalFuel = totalFuel + fuelCost
    console.log(totalFuel)
})

// const fs = require("fs");
// const path = require("path");
// const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8");
// let output = text
//   .split("\n")
//   .map(d => calcFuel(d))
//   .reduce((acc, curr) => acc + curr, 0);
// console.log(output);

// function calcFuel(mass) {
//   let fuel = calcFuelPerModule(mass);
//   if (fuel > 0) {
//     let fuelFuel = calcFuel(fuel);
//     if (fuelFuel > 0) {
//       fuel += calcFuel(fuel);
//     }
//   }
//   return fuel;
// }

// function calcFuelPerModule(mass) {
//   return Math.floor(+mass / 3) - 2;
// }

