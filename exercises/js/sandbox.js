//jquery exercise 2.1 Selecting

//1. Select all of the div elements that have a class of "module".
$("div.module");
//$("div.module").addClass("count");

//2. Come up with three selectors that you could use to get the third item in the #myList unordered list. Which is the best to use? Why?
$("#myList #myListItem").addClass("myListItem");
$('#myList li:nth-child(3)'); //this is best way to get the info for any element with indexing without using any class or ID.
$('#myList li#listItem_2').next();
//$('#myList li:eq(2)').text();

//3. Select the label for the search input using an attribute selector.
$("form#search label[for = 'q' ]").addClass("findLabel");

//4 Figure out how many elements on the page are hidden
var elemCount = $(":hidden").length;
//alert(elemCount);

//5. Figure out how many image elements on the page have an alt attribute.
var imageLength = $("img[alt]").length;
//alert(imageLength)

//6. Select all of the odd table rows in the table body.
$("table tbody tr:odd");
