window.onload = function() {
    let preloader = document.getElementById('preload');
       if (preloader) {
           setInterval(function() {
               preloader.style.display = 'none';
           }, 990);
       }
}

const contactsBtns = document.querySelectorAll('.contacts-btn-form');
const contactsMessage = document.querySelectorAll('.dropdown-form__btn');

contactsBtns.forEach((contactBtn) => {
    contactBtn.addEventListener('click', function(){
        let hideTime = 0;
        const form = document.getElementById(contactBtn.dataset.formId);
        contactBtn.classList.toggle('rotate')
        form.classList.toggle('none');

        contactsMessage.forEach((messageBtn) => {
            messageBtn.addEventListener('click', function(){
                const messageForm = document.getElementById(messageBtn.dataset.messageId);
                form.classList.add('none');
                contactBtn.classList.toggle('rotate')
                messageForm.classList.remove('none');
                let timerId = setInterval(function(){
                    hideTime++;
                    if (hideTime >= 5){
                        messageForm.classList.add('none');
                        clearInterval(timerId);
                        hideTime = 0;
                    }
                }, 1000);
            });
        });
    });
});

const selectBtn = document.querySelectorAll('.templates-selected__button');

selectBtn.forEach((item)=>{
    item.addEventListener('click', function(){
        for (let elem of selectBtn){
            elem.classList.remove('select-btn');
        }

        this.classList.add('select-btn')

    });
});









