AmCharts.loadFile( "http://cesarlpb.github.io/files/sample.csv", {}, function( response ) {

  /**
   * Parse CSV
   */
  var data = AmCharts.parseCSV( response, {
    "useColumnNames": true
  } );
  
  
  // Data loader
  // Create the table
  var table = document.createElement("table");
  
  // Add headers
  var row = document.createElement("tr");
  for(var key in data[0]) {
    var col = document.createElement("th");
    col.innerHTML = key;
    row.appendChild(col);
  }
  table.appendChild(row);
  
  // Add rows
  for(var i = 0; i < data.length; i++) {
    var row = document.createElement("tr");
    for(var key in data[i]) {
      var col = document.createElement("td");
      col.innerHTML = data[i][key];
      row.appendChild(col);
    }
    table.appendChild(row);
  }
  
  // Add table to document
  document.getElementById("datatable").appendChild(table);

} );