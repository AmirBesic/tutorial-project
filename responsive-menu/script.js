/*ovo je responsive menu */
const mobileMenu = () => {
    let menu = document.querySelector(".header ul");
    let btn = document.querySelector(".header button");

    if(btn.innerText === "Menu"){

        menu.style.display ="block";
        btn.innerText = "Close";
    }else {
        menu.style.display = "none";
        btn.innerText = "Menu";

    }
}

/*ovo je galerija */

let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNum=0;

const moveRight=() => {
    displayNone();
    imgNum++;
    if(imgNum === pictures.length){
        imgNum = 0;
        }
pictures[imgNum].style.display = 'block';
};

const moveLeft =  () => {
    displayNone();
    imgNum--;
    if(imgNum === -1){
        imgNum = pictures.length-1;
    }
    pictures[imgNum].style.display ='block';
};

rightBtn.addEventListener('click',moveRight);
leftBtn.addEventListener('click',moveLeft);

const displayNone = () => {
    pictures.forEach((img) => {
        img.style.display ='none';
    })
}

const portfolioSort = (button) => {
    let category = button.getAttribute('data-category');
    let porfolioItems = document.querySelectorAll('.portfolio-single-item');

    porfolioItems.forEach((item)=> {
        item.style.display ='none';
    })
    if(category==='sve'){
        porfolioItems.forEach((item) => {
            item.style.display = 'block';
        })
    }
    porfolioItems.forEach((item) => {
        if(item.getAttribute('data-category').includes(category)){
            item.style.display ='block';
         }
    })
}

/*otvaramo modal */

const openModal=() =>{
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');

    modalWindow.style.display = 'block';
    overlay.style.display = 'block';

}
const closeModal = () => {
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');

    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
}