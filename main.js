let btn = document.getElementById('main-btn')
let popup = document.getElementById('popup');
let close = document.getElementById('close');
let contaierPopoup = document.getElementById('contaier-popoup');
let done = document.getElementById('done');
let circle = document.getElementsByClassName('circle-container');

btn.onclick = () => {
    popup.style.display = 'block';

}

close.onclick = () => {
    popup.style.display = 'none';

}


const check_todo = (elem) => {
    if (elem.getAttribute('data-attr') == 'undone') {
        elem.setAttribute('data-attr', 'done');
        elem.innerHTML = "<i class='fas fa-check-circle done'></i>";
    } else {
        elem.setAttribute('data-attr', 'undone');
        elem.innerHTML = '<i class="far fa-circle circle"> </i>';
    }
}

for (i = 0; i < circle.length; i++) {
    circle[i].click = check_todo(circle[i]);
}