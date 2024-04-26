import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
});

console.log(document.querySelector('.decoration_slider'));
console.log(document.querySelector('.no_click'));
console.log(document.querySelector('.decoration_content > div > div'));
console.log(document.querySelector('.after_click'));