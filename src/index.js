import Header from './modules/header'
import Home from './modules/home'
import Menu from './modules/menu'
import Contact from './modules/contact'

(() => {

    Header.setHeader();
    Home.setHome();


    const home = document.querySelector('#Home');
    const menu = document.querySelector('#Menu');
    const contact = document.querySelector('#Contact');
    const nav = document.querySelectorAll('header li');

    home.classList.add('active');

    const clearContent = () => {
        const content = document.querySelector('#content');
        content.removeChild(content.lastChild);
        nav.forEach(item => item.classList.remove('active'));
    }

    const displayHome = (e) => {
        clearContent();
        Home.setHome();
        e.target.classList.add('active');
    }

    const displayMenu = (e) => {
        clearContent();
        Menu.setMenu();
        e.target.classList.add('active');
    }

    const displayContact = (e) => {
        clearContent();
        Contact.setContact();
        e.target.classList.add('active');
    }

    home.addEventListener('click', displayHome);
    menu.addEventListener('click', displayMenu);
    contact.addEventListener('click', displayContact);


})();