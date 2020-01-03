const fs = require('fs')
const path = require("path")
const text = fs.readFileSync(path.join(__dirname) + "/input.txt", "utf8")
// const text = fs.readFileSync(path.join(__dirname) + "/inputTest.txt", "utf8")

const textArray = text.split(',')

var posA = 0
var posB = 0
var posC = 0

// function to add
function addPos(a, b, c) {
    //console.log(a, b, c)
    // console.log(c)
    textArray[c] = Number(a) + Number(b)
    //console.log(textArray[c])
}

// function to multiply
function multPos(a, b, c) {
    textArray[c] = Number(a) * Number(b)
}

//grab value of position a
function getPosVal(a) {
    return textArray[a]
}

for ( i = 0; i < textArray.length; i += 4) {
    var temp = 0
    // posA = 0, posB = 0, posC = 0
    // console.log(`${textArray[i]}, ${textArray[i+1]}, ${textArray[i+2]}, ${textArray[i+3]}`)
    
    //add multipli or end
    // console.log(i)
    if (textArray[i] == 1) {
        posA = getPosVal(textArray[i+1])
        posB = getPosVal(textArray[i+2])
        posC = textArray[i+3]

        addPos(posA, posB, posC)
    } else if (textArray[i] == 2) {
        posA = getPosVal(textArray[i+1])
        posB = getPosVal(textArray[i+2])
        posC = textArray[i+3]

        multPos(posA, posB, posC)
    } else {
        break
    }
    console.log(textArray)
}


