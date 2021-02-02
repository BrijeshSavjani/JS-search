<h1>JS-search</h1>
A JS based system to search JS Objects for a website that I'm developing. To use simpily fill in the search bar and press search. Please feel free to use this in your projects.

<h2>How to customise</h2>

<h3>Modifying how it is ouputted</h3>

The items that have matched the users search criteria are held in a public JS list called accepted_items in the Search.JS file. The OutputResults() function is used to programatically output the results into a table. Modify this function to modify the format of the table. This is then styled in CSS using the results_table CSS class. The current CSS code can be find in style tags in the index.html file.
</br>

<img src = "readme-images/output.png"/>

<h3>Modifying Attributes & attribute names <i>(+Adding Attributes)</i></h3>
All of the objects that will be searched are stored in the information.js file. They are in an list called data.
<h4>Modifiying attribute values & attribute names</h4>
Please not that these instructions are **only** for modifying the name/value for an attribute. If you would like to add a new attriubute then please read the next section. The value and or name can be changed with a simple swap. The code will run the exact the same except the output will have the new heading name and/or value.
</br>
<h4>Adding a new attribute</h4>
This is slightly more complicated to do however it is still relatively simple.
<ol>
  <li>The first step is to add the new attrinute the items in the data array that you will find in the information.js file. Please note that all the files need to have the same     attributes or the code will not work.</li>
  </br>
  <li>The second step is to create a HTML element from which the user can enter their desired attribute value.To do this simpily go into the index.html file and an input to the       SearchBar div. Give this input a sensible id. We will need to fetch the value of this from the JS file later.</li>
  </br>
  <li>Next navigate to the wanted_attribute list that can be found in the Compare(object) function in the Search.JS file. Add 
  ```
  document.getElementById("[your id name here]")
  ```</li>
  </ol>
