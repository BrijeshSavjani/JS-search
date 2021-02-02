var accepted_items =[]; 
function OutputResults(results)
{
  var old_table = document.getElementById("Results");
  if (old_table != null){old_table.remove();}
  var body = document.getElementsByTagName('body')[0];
  var results_table = document.createElement("table");
  var table_head = document.createElement("thead");
  var headings = [];
  for (attribute in data[0])
  {
    headings.push(document.createElement("th"));
    headings[headings.length - 1].appendChild(document.createTextNode(attribute.toString()));
  }
  headings.forEach(item => table_head.appendChild(item));
  var index =  0;
  while (index < results.length)
  {
    var row = document.createElement("tr");
    var row_values = [];
    var k =0;
    result = results[k];
    for (attributes in result)
    {
      row_values.push(document.createElement("td"));
      row_values[k].appendChild(document.createTextNode(result[attributes]));
      k+= 1;
    }
    index +=1;
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
  if(attributes_matched == 3){accepted_items.push(object);}
  
}
function Search ()
{
    accepted_items =[];
    data.forEach(item => Comapre(item));
    OutputResults(accepted_items);
}