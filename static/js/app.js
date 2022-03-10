// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}

for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
 }

function buildTable(data) {
// First, clear out any existing data
tbody.html("");

// Next, loop through each object in the data
// and append a row and cells for each value in the row
data.forEach((dataRow) => {
    
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
    }
    );
    });
}




// 3. Use this function to update the filters. 
function updateFilters() {





  // 6. Call function to apply all filters and rebuild the table
  filterTable();

}

// 7. Use this function to filter the table when data is entered.
function filterTable() {

// 1. Create a variable to keep track of all the filters as an object.
  let filter = "";
  
  // 8. Set the filtered data to the tableData.
  let filteredData = tableData;

  // 4a. Save the element that was changed as a variable.

  // 4b. Save the value that was changed as a variable.

  let date = d3.select("#datetime").property("value");

  let city = d3.select("#citytext").property("value");
  let state = d3.select("#statetext").property("value");
  let shape = d3.select("#shapetext").property("value");

  console.log(date);
  console.log(city);
  console.log(state);
  console.log(shape);

  // 4c. Save the id of the filter that was changed as a variable.
  // 5. If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object.

  if (date){filter = filter + 'D';}

  
  if (city){filter = filter + 'C';}

  if (state){filter = filter + 'S';}

  if (shape){filter = filter + 'P';}

  console.log(filter);

  // 9. Loop through all of the filters and keep any data that
  // matches the filter values
  switch (filter){
    case 'D':
      filteredData = filteredData.filter(row => row.datetime === date);
      break;
    case 'C':
      filteredData = filteredData.filter(row => row.city == city);
      break;
    case 'S':
      filteredData = filteredData.filter(row => row.state == state);
    break;
    case 'P':
      filteredData = filteredData.filter(row => row.shape == shape);
    break;
    case 'DC':
      filteredData = filteredData.filter(row => row.datetime === date);
      filteredData = filteredData.filter(row => row.city == city);
      break;
    case 'DS':
      filteredData = filteredData.filter(row => row.datetime === date);
      filteredData = filteredData.filter(row => row.state == state);
    break;
    case 'DP':
        filteredData = filteredData.filter(row => row.datetime === date);
        filteredData = filteredData.filter(row => row.shape == shape);
    break;
    case 'CS':
      filteredData = filteredData.filter(row => row.city == city);
      filteredData = filteredData.filter(row => row.state == state);
    break;
    case 'CP':
        filteredData = filteredData.filter(row => row.city == city);
        filteredData = filteredData.filter(row => row.shape == shape);
    break;
    case 'DCS':
      filteredData = filteredData.filter(row => row.datetime === date);
      filteredData = filteredData.filter(row => row.city == city);
      filteredData = filteredData.filter(row => row.state == state);
      break;
    case 'DCP':
        filteredData = filteredData.filter(row => row.datetime === date);
        filteredData = filteredData.filter(row => row.city == city);
        filteredData = filteredData.filter(row => row.shape == shape);
        break;
     case 'CSP':
      filteredData = filteredData.filter(row => row.city == city);
      filteredData = filteredData.filter(row => row.state == state);
      filteredData = filteredData.filter(row => row.shape == shape);
      break;
     case 'DCSP':
      filteredData = filteredData.filter(row => row.datetime === date);
       filteredData = filteredData.filter(row => row.city == city);
       filteredData = filteredData.filter(row => row.state == state);
       filteredData = filteredData.filter(row => row.shape == shape);
       break;
     }

  
  

  // 10. Finally, rebuild the table using the filtered data
  buildTable(filteredData);
}


function handleSelect(fav_Country) {
  // Grab the datetime value from the filter
  //let fav_country = d3.select("#favourite").property("value");
  
  let filteredData = tableData;

   // Check to see if a Country was entered and filter the
  // data using that Country
  if (fav_Country != '---Choose Country---') {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.country === fav_Country);
  };

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
};


// 2. Attach an event to listen for changes to each filter
d3.select("#datetime").on("change", filterTable);
d3.select("#citytext").on("change", filterTable);
d3.select("#statetext").on("change", filterTable);
d3.select("#shapetext").on("change", filterTable);

// Build the table when the page loads
buildTable(tableData);