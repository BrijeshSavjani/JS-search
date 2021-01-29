function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    return result;
  }
  
function Compare(item,index)
{
    var value = data[index].toLowerCase;
    if(value.includes(name.toLowerCase))
    {
        alert(value);
    }
}
function Search ()
{
    var name = document.getElementById("Searchbar").value;
    var attrib2 = document.getElementById("Attribute2").value;
    var attrib3 = document.getElementById("Attribute3").checked;
    data.forEach(Compare(element => dat,index));

}