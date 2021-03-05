const fs = require("fs")

function readAndWriteJSONData(inputJSON, outputJSON, key) {
    let rawdata = fs.readFileSync(inputJSON);
    let parsedData = JSON.parse(rawdata);
    let valuesArray = []
    for (let object of parsedData) {
        valuesArray.push(object[key])
    }    
    valuesArray = valuesArray.sort() 
    let json = { valuesArray }
    let data = JSON.stringify(json)
    fs.writeFileSync(outputJSON, data);
}
// readAndWriteJSONData("data.json", "data-output1.json", "city")
module.exports = readAndWriteJSONData