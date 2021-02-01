var accepted_properties =[]; 
function OutputResults(results)
{
  var old_table = document.getElementById("Results");
  if (old_table != null){old_table.remove();}
  var body = document.getElementsByTagName('body')[0];
  var results_table = document.createElement("table");
  var table_head = document.createElement("thead");
  var headings = [document.createElement("th"),document.createElement("th"),document.createElement("th"),document.createElement("th")];
  headings[0].appendChild(document.createTextNode("Name"));
  headings[1].appendChild(document.createTextNode("Atribute 1 Value"));
  headings[2].appendChild(document.createTextNode("Atribute 2 Value"));
  headings[3].appendChild(document.createTextNode("Atribute 3 Value"));
  headings.forEach(item => table_head.appendChild(item));
  for (let RowIndex = 0; RowIndex < results.length; RowIndex++)
  {
    var row = document.createElement("tr");
    var row_values = [document.createElement("td"),document.createElement("td"),document.createElement("td"),document.createElement("td")];
    row_values[0].appendChild(document.createTextNode(results[RowIndex].Name));
    row_values[1].appendChild(document.createTextNode(results[RowIndex].Attribute1));
    row_values[2].appendChild(document.createTextNode(results[RowIndex].Attribute2));
    row_values[3].appendChild(document.createTextNode(results[RowIndex].Attribute3));
    row_values.forEach(item => row.appendChild(item));
    results_table.appendChild(row);
  }
  results_table.id = "Results";
  results_table.className ="results_table";
  results_table.appendChild(table_head);
  body.appendChild(results_table);
}
function Comapre(object)
{
  var wanted_attribute = [document.getElementById("Searchbar").value,document.getElementById("Attribute2").value,document.getElementById("Attribute3").checked];
  var i = 0;
  var attributes_matched = 0;
  for (var attribute in object)
  {
    if(wanted_attribute[i] == "All"){wanted_attribute[i] = ""};
    var value = object[attribute].toString();
    if (value.includes(wanted_attribute[i].toString(),0)){attributes_matched += 1;}
    i+= 1;
  }
  if(attributes_matched == 3){accepted_properties.push(object);}
  
}
function Search ()
{
    accepted_properties =[];
    data.forEach(item => Comapre(item));
    OutputResults(accepted_properties);
}