/*
 * My jQuery selectors
 *
 * Apply a style such as a yellow background to the following elements.
 * Test your selectors one at a time.
 */

// all elements
//$("*").css("background-color", "yellow");

// all p elements

// $("p").css("background-color", "yellow"); checked


// the p element with an ID of "intro"

// $("#intro").css("background-color", "yellow"); checked


// all elements with a class of "note"

// $(".note").css("background-color", "yellow"); checked

// all DIV elements with a class of note

//$("div.note").css("background-color", "yellow");

// all p elements in the article element

//$("article p").css("background-color", "yellow");

// the last element in any section which is a p tag

//$("p:last").css("background-color", "yellow");

// the first paragraph on the page

//$("p:first").css("background-color", "yellow");

// all p elements which have a link

//$("[href]").css("background-color", "yellow");

// the second li within nested ul element

//$("ul li:nth-child(2)").css("background-color", "yellow");

// every second and third p element

//$("p:nth-of-type(2)").css("background-color", "yellow"); //not finished
$("p:nth-of-type(n+2)").css("background-color", "yellow");