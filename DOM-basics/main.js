//Grab Single element
// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.querySelector('.container'));
// console.log(document.querySelector('#my-form'));
// console.log(document.querySelector('h1'));

//Grab Multiple elements
// const colItems = document.querySelectorAll('.item');
// console.log(document.getElementsByClassName('item'));
// const nodeItems = document.getElementsByTagName('li');

// colItems.forEach(item => console.log(item));

// for(let i = 0; i < nodeItems.length; i++){
//     console.log(nodeItems[i]);
// }

//DOM Manipulation
// ul.remove();


//Event listners
// const btn = document.querySelector('.btn');
// const ul = document.querySelector('.items');
// btn.style.backgroundColor = 'red';
// btn.style.textTransform = 'uppercase';

// btn.addEventListener('click', e => {
//     e.preventDefault();
//     ul.firstElementChild.textContent = 'HTML';
//     ul.children[1].innerText = 'CSS';
//     ul.lastElementChild.innerHTML = '<h1>JavaScript</h1>';
// })

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerText = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
}