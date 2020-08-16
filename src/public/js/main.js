let tab_container = Array.prototype.slice.apply(document.querySelectorAll('.tab'));
let containers = Array.prototype.slice.apply(document.querySelectorAll('.container'));

document.querySelector('.tabs').addEventListener('click', event => {
    if (event.target.classList.contains('tab')) {
        let i = tab_container.indexOf(event.target);
        tab_container.map(tab => tab.classList.remove('active'));
        tab_container[i].classList.add('active');
        containers.map(cont => cont.classList.remove('active-container'));
        containers[i].classList.add('active-container');
    }
})