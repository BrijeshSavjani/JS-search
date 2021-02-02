var accepted_items =[]; //Items that were found to be within the search criteria
function OutputResults()
{
  var old_table = document.getElementById("Results"); //Tries to get the table (if one hjas already been generated)
  if (old_table != null){old_table.remove();}//If it exists then delete it. (To avoid multiple reult tables)
  var body = document.getElementsByTagName('body')[0]; 
  var results_table = document.createElement("table");//Create table & table head
  var table_head = document.createElement("thead");
  var headings = []; //All attributes (Columns) on table
  for (attribute in accepted_items[0]) //Foreach attribute in object
  {
    headings.push(document.createElement("th")); //Create heading (Column)
    headings[headings.length - 1].appendChild(document.createTextNode(attribute.toString()));//Add text node with a vlue of the attribute name
  }
  headings.forEach(item => table_head.appendChild(item));//Append eaching heading into the table head
  var index =  0;
  while (index < accepted_items.length)
  {
    var row = document.createElement("tr"); //Create row for each accepted item. (While loop so index can be used)
    var row_values = [];//Value from item
    var k =0;
    result = accepted_items[index]; //Current accepted item
    for (attributes in result)
    {
      row_values.push(document.createElement("td")); //Create value
      row_values[k].appendChild(document.createTextNode(result[attributes])); //Add value
      k+= 1;// Increment k
    }
    index +=1;//increment index(Next value)
    row_values.forEach(item => row.appendChild(item));//Append all row values into row
    results_table.appendChild(row);//Append row into table
  }
  results_table.id = "Results"; //Set table id so it can be referenced later
  results_table.className ="results_table";//Class name for styling
  results_table.appendChild(table_head);//Append table head into table
  body.appendChild(results_table);//Add table into body
}
function Comapre(object)
{
  var wanted_attribute = [document.getElementById("Searchbar").value,document.getElementById("Attribute2").value,document.getElementById("Attribute3").checked];
  //Fetch wanted values from document
  var i = 0;
  var attributes_matched = 0; //Total amount of attributes that match criteria
  for (var attribute in object)
  {
    if(wanted_attribute[i] == "All"){wanted_attribute[i] = ""}; //If it says all then replace with balnk (So matches to all filters)
    var value = object[attribute].toString(); //Stores the objects actual value
    var matches = value.includes(wanted_attribute[i].toString(),0);//if it includes the wanted value
    if (matches){attributes_matched += 1;} 
    //^If actual value containes wanted attribute value then incremet match counter.
    i+= 1;
  }
  if(attributes_matched == 3){accepted_items.push(object);}//If all attributes are matched
  
}
function Search () //Called upon click
{
    accepted_items =[]; //Reset items that fit search criteria to none
    data.forEach(item => Comapre(item));//Fills in accepted items by comparing
    OutputResults();//Output results
}