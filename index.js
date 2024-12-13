// `getElementById()`

// - **Instructions**:
//   - Use `getElementById()` to select the element with the `id` of "title".
//   - Log the selected element to the console.

const domintro = document.getElementById("title").innerText;

// #### Ticket 1b: `getElementsByClassName()`

// - **Instructions**:
//   - Use `getElementsByClassName()` to select elements with the class of "content".
//   - Log the selected elements to the console.

// The arrow function (element => element.textContent):

//     Takes one parameter (element).
//     Returns the textContent of element.
//     Does so concisely without the need for the function keyword, return, or braces.

const domclass = document.getElementsByClassName(`content`);

// Array.from(domclass).map(element => element.textContent);

const classcontent = Array.from(domclass).map(function(element){
    return element.textContent;
});

// #### Ticket 1c: `getElementsByTagName()`
// - **Instructions**:
//   - Use `getElementsByTagName()` to select all `<li>` elements on the page.
//   - Log the selected elements to the console.

const listItems = document.getElementsByTagName(`li`);

const listArray = Array.from(listItems).map(element => element.textContent);
listArray.forEach(item => console.log(item.textContent));

// #### Ticket 1d: `querySelector()`

// - **Instructions**:
//   - Use `querySelector()` to select the first element with the class "highlight".
//   - Log the selected element to the console.

const highlight = document.querySelector(`.highlight`).innerText;

// #### Ticket 1e: `querySelectorAll()`

// - **Instructions**:
//   - Use `querySelectorAll()` to select all elements with the class "highlight".
//   - Log the selected elements to the console.

const listHighlight = document.querySelectorAll(`.highlight`);

listHighlight.forEach(element => {
    console.log(element.textContent);
});

const parent = document.getElementById("itemList");

console.log(parent.firstElementChild.textContent);