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
$("table tbody tr:odd").length;


//jquery exercise 2.2 Traversing
//1. Select all of the image elements on the page; log each image's alt attribute.
$("img").each(function(index){
    var thisAlt = $(this).attr("alt");
    console.log(thisAlt);
});

//2. Select the search input text box, then traverse up to the form and add a class to the form.
$("input[type='text'].input_text").parent("form#search").addClass("findForm");

//3. Select the list item inside #myList that has a class of "current" and remove that class from it; add a class of "current" to the next list item.
$("#myList li.current").next("li").addClass("current").siblings("li").removeClass("current");
//$("#myList li.current").next("li").addClass("current").prev("li").removeClass("current");

//4. Select the select element inside #specials; traverse your way to the submit button.
$("#specials select").parents("form").find("input[type='submit']").addClass("selectSubmit");

//5. Select the first list item in the #slideshow element; add the class "current" to it, and then add a class of "disabled" to its sibling elements.
$("#slideshow li:first").addClass("current").siblings("li").addClass("disabled");