const filterBox = Array.from(document.querySelectorAll('.filter-class'));
const filterButtons =  Array.from(document.querySelectorAll('.templates-selected__button'));

filterButtons.forEach((item) => {
    item.addEventListener('click', filterButtonsHandler);
});

function filterButtonsHandler(event) {
    let currentFilterClass = event.target.dataset['f'];

    filterBox.forEach((elem) => {
        if (currentFilterClass === 'all') {
            elem.classList.remove('none');
        } else {
            elem.classList.remove('none');
            if (!elem.classList.contains(currentFilterClass)) {
                elem.classList.add('none');
            }
        }
    });
}