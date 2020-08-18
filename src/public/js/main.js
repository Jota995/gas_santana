let tab_container = Array.prototype.slice.apply(document.querySelectorAll('.tab'));
let containers = Array.prototype.slice.apply(document.querySelectorAll('.cards-container'));
let date = document.querySelector('.fecha');

let icons_tab = Array.prototype.slice.apply(document.querySelectorAll('.icon-tab'));
let name_tab = Array.prototype.slice.apply(document.querySelectorAll('.name-tab'));

document.querySelector('.tabs').addEventListener('click', event => {
    if (event.target.classList.contains('tab')) {
        let i = tab_container.indexOf(event.target);
        tab_container.map(tab => tab.classList.remove('tab-active'));
        tab_container[i].classList.add('tab-active');
        containers.map(cont => cont.classList.remove('card-container-active'));
        containers[i].classList.add('card-container-active');

        if(i === 1){
            date.classList.add("fecha-active");
        }else{
            date.classList.remove("fecha-active");
        }
    }
    if (event.target.classList.contains('icon-tab')){
        let i = icons_tab.indexOf(event.target);
        tab_container.map(tab => tab.classList.remove('tab-active'));
        tab_container[i].classList.add('tab-active');
        containers.map(cont => cont.classList.remove('card-container-active'));
        containers[i].classList.add('card-container-active');

        if(i === 1){
            date.classList.add("fecha-active");
        }else{
            date.classList.remove("fecha-active");
        }
        
    }
    if (event.target.classList.contains('name-tab')){
        let i = name_tab.indexOf(event.target);
        tab_container.map(tab => tab.classList.remove('tab-active'));
        tab_container[i].classList.add('tab-active');
        containers.map(cont => cont.classList.remove('card-container-active'));
        containers[i].classList.add('card-container-active');

        if(i === 1){
            date.classList.add("fecha-active");
        }else{
            date.classList.remove("fecha-active");
        }

    }
})