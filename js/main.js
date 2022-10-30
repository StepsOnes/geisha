const contactsBtns = document.querySelectorAll('.contacts-btn-form');
const contactsMessage= document.querySelectorAll('.dropdown-form__btn');


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
                }, 1000)
            })
        })
    })
});







