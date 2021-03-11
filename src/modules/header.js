const Header = (() => {
    const setHeader = () => {

        const content = document.querySelector('#content');

        const header = document.createElement('header'),
            h1 = document.createElement('h1'),
            ul = document.createElement('ul'),
            li_1 = document.createElement('li'),
            li_2 = document.createElement('li'),
            li_3 = document.createElement('li');

        h1.textContent = 'JattDaDhaba';
        li_1.textContent = 'Home', li_2.textContent = 'Menu', li_3.textContent = 'Contact';

        li_1.setAttribute('id', 'Home'), li_2.setAttribute('id', 'Menu'),
            li_3.setAttribute('id', 'Contact');

        ul.appendChild(li_1), ul.appendChild(li_2), ul.appendChild(li_3);

        header.appendChild(h1), header.appendChild(ul);
        content.appendChild(header);
    };

    return { setHeader };
})();

export default Header;