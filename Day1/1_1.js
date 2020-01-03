const lineReader = require('readline').createInterface({
        input: require('fs').createReadStream('./input.txt')
})

//total fuel
var totalFuel = 0

lineReader.on('line', (line) => {
    //line
    var l = line
    //div by 3
    var div3 = l / 3

    //round down
    var rndDown = Math.floor(div3)

    //subtract 2
    var sub2 = rndDown - 2

    // add to total
    totalFuel = totalFuel + sub2

    console.log(totalFuel)
})