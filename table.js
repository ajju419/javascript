// Create an array of data for the table
var arrayOfArrays = [
    ["Name", "Age", "Country"],
    ["Ajaryya", "25", "bhimavaram"],
    ["Bonam", "20", "vijaywada"],
    ["Ajju", "23", "hyderabad"],
  ];
  
  // Generate additional data by duplicating existing arrays
  var numberOfDuplicates = 10; // Change this value as needed
  
  for (var i = 0; i < numberOfDuplicates; i++) {
    var duplicate = arrayOfArrays.slice(1); // Exclude the header row
    arrayOfArrays = arrayOfArrays.concat(duplicate);
  }
  
  // Create a table element
  var table = document.createElement("table");
  
  // Create a table header row
  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  
  // Iterate over the first array of the arrayOfArrays to create table headers
  for (var i = 0; i < arrayOfArrays[0].length; i++) {
    var th = document.createElement("th");
    th.textContent = arrayOfArrays[0][i];
    headerRow.appendChild(th);
  }
  
  thead.appendChild(headerRow);
  table.appendChild(thead);
  
  // Create a table body
  var tbody = document.createElement("tbody");
  
  // Iterate over the remaining arrays of the arrayOfArrays to create table rows and cells
  for (var i = 1; i < arrayOfArrays.length; i++) {
    var row = document.createElement("tr");
  
    for (var j = 0; j < arrayOfArrays[i].length; j++) {
      var cell = document.createElement("td");
      cell.textContent = arrayOfArrays[i][j];
      row.appendChild(cell);
    }
  
    tbody.appendChild(row);
  }
  
  table.appendChild(tbody);
  
  // Add the table to the document
  document.body.appendChild(table);
  