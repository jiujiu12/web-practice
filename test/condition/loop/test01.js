// do...while will execute at least one time.
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 0);

let myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
let list = document.createElement('ul');

// Add your code here
for(let i in myArray){
  let li = document.createElement('li');
  list.appendChild(li);
  let textContent = myArray[i] ;
  li.textContent =textContent;
}
// Don't edit the code below here!
const section = document.querySelector('section');
section.appendChild(list);