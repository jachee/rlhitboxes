const data = require('./hitboxes.json');
const rowStart = "<tr>"
const cellStart = "<td>"
const cellEnd = "</td>"
const rowEnd = "</tr>"

for(var i=0; i < data.length; i++) {
  var car = data[i]['model']
  var box = data[i]['hitbox']
  console.log(rowStart + cellStart + car + cellEnd + cellStart + box + cellEnd + rowEnd)
}
