  
function OutputResults(results)
{
  var old_table = document.getElementById("Results");
  if (old_table != null){old_table.remove();}
  var body = document.getElementsByTagName('body')[0];
  var total_results = results.length;
  var results_table = document.createElement("table");
  var table_head = document.createElement("thead");
  var headings = [document.createElement("th"),document.createElement("th"),document.createElement("th"),document.createElement("th")];
  headings[0].appendChild(document.createTextNode("Name"));
  headings[1].appendChild(document.createTextNode("Atribute 1 Value"));
  headings[2].appendChild(document.createTextNode("Atribute 2 Value"));
  headings[3].appendChild(document.createTextNode("Atribute 3 Value"));
  table_head.appendChild(headings[0]);table_head.appendChild(headings[1]);table_head.appendChild(headings[2]);table_head.appendChild(headings[3]);
  results_table.id = "Results";
  results_table.appendChild(table_head);
  body.appendChild(results_table);
}
function Search ()
{
    var name = document.getElementById("Searchbar").value;
    var attrib2 = document.getElementById("Attribute2").value;
    var attrib3 = document.getElementById("Attribute3").checked;
    var i = 0;
    var i = 0;
    var accepted_properties =[];
    while (i < data.length)
    {
      if (data[i].Name.includes(name,0))
      {
        if (attrib3 == data[i].Attribute3)
        {
          if (attrib2 = "All"){accepted_properties.push(data[i]);}
          if(data[i].Attribute2 == attrib2) 
           {
              accepted_properties.push(data[i]);
          }
        }

      }
      i += 1;
    }
    OutputResults(accepted_properties);
    console.log(accepted_properties);

}