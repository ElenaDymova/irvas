const modals = (state) => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]');


        const message = {
            profile: 'Пожалуйста, введите размеры',
            end: 'Пожалуйста, выберите тип отопления'
        };

        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        


        trigger.forEach(item => {
            const handleClick = (e) => {
                if (e.target) {
                    e.preventDefault();
                }
        
                let shouldOpenModal = true;
        
                if (modal.classList.contains('popup_calc_profile')) {
                    if (!state.width || !state.height) {
                        shouldOpenModal = false;
                        document.querySelector('.popup_calc_content').appendChild(statusMessage);
                        statusMessage.textContent = message.profile;
                    } else {
                        statusMessage.remove();
                    }
                }
        
                if (modal.classList.contains('popup_calc_end')) {
                    if (!state.profile) {
                        shouldOpenModal = false;
                        document.querySelector('.popup_calc_profile_content').appendChild(statusMessage);
                        statusMessage.textContent = message.end;
                    } else {
                        statusMessage.remove();
                    }
                }
        
                if (shouldOpenModal) {
                    windows.forEach(item => {
                        item.style.display = 'none';
                    });
        
                    modal.style.display = 'block';
                    clearTimeout(timerId);
                    document.body.style.overflow = 'hidden';
                }
            };
        
            item.addEventListener('click', handleClick);
        });
            

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }

    let timerId;
    function showModalByTime(selector, time) {
        timerId = setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }
    

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    showModalByTime('.popup', 5000);
}

export default modals;