function Search ()
{
    var name = document.getElementById("Searchbar").value;
    var attrib2 = document.getElementById("Attribute2").value;
    var attrib3 = document.getElementById("Attribute3").checked;
    var json_file;
    fetch ("https://raw.githubusercontent.com/BrijeshSavjani/JS-search/main/information.json")
        . then(x => x.text())
        .then(y => json_file);
    console.log(json_file);

}