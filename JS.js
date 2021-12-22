const open = document.querySelector('.open');
const close = document.querySelector('.close');
const wrap = document.querySelectorAll('.wrap');

open.addEventListener('click', function() {
    for (let x = 0; x < wrap.length; x++) {
        wrap[x].classList.add('visible');
    }
});

close.addEventListener('click', function() {
    for (let x = 0; x < wrap.length; x++) {
        wrap[x].classList.remove('visible');
    }
});