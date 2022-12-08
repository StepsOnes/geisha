const boxes = Array.from(document.querySelectorAll(".accordion__header"));
const boxes2 = Array.from(document.querySelectorAll(".faq__accordion__header"));

boxes.forEach((box) => {
    box.addEventListener('click', boxHandler);
});

boxes2.forEach((box) => {
    box.addEventListener('click', boxHandler2)
});


function boxHandler(e){
    e.preventDefault();
    let currentBox = e.target.closest('.accordion__header');
    let currentBody = currentBox.nextElementSibling;

    currentBody.classList.toggle('active-body');
    currentBody.classList.toggle('body-margin');
    currentBox.classList.toggle('none--border');



    if (currentBody.classList.contains('active-body')) {
        currentBody.style.maxHeight = (currentBody.scrollHeight + 20) + "px"; // открываем контент
        currentBox.classList.remove('arrow-rotate__2');
        currentBox.classList.add('arrow-rotate__1');
    } else {
        currentBody.style.maxHeight = 0;
        currentBox.classList.remove('arrow-rotate__1');
        currentBox.classList.add('arrow-rotate__2');
    }
}

function boxHandler2(e){
    e.preventDefault();
    let currentBox = e.target.closest('.faq__accordion__header');
    let currentBody = currentBox.nextElementSibling;

    currentBody.classList.toggle('active-body');
    currentBox.classList.toggle('faq__rotate');

    if (currentBody.classList.contains('active-body')) {
        currentBody.style.maxHeight = (currentBody.scrollHeight) + "px"; // открываем контент
    } else {
        currentBody.style.maxHeight = 0;
    }
}

// if(boxes[0]){
//     boxes[0].nextElementSibling.classList.add('active-body');
// if (boxes[0].nextElementSibling.classList.contains('active-body')) {
//     boxes[0].nextElementSibling.style.maxHeight = (boxes[0].nextElementSibling.scrollHeight + 60) + "px"; // открываем контент
//     boxes[0].nextElementSibling.classList.toggle('body-margin');
//     boxes[0].classList.toggle('none--border');
// }
// }