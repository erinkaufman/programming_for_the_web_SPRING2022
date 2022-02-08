// select empty div and assign it to a variable
const myEmptyDiv = document.querySelector("#myEmptyDiv");
// put an h1 inside of it
// create a new element
const heading = document.createElement('h1');
heading.innerHTML = "My friend Joseph lloves llamas!";
// need to attach it to an already existing element in the DOM
heading.addEventListener('click' , handleHeadingClick);
heading.style.cursor = 'pointer';
myEmptyDiv.appendChild(heading);
function handleHeadingClick () {
    document.body.style.backgroundColor = "pink";
}