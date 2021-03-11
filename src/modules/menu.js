const Menu = (() => {

    const setMenu = () => {
        const content = document.querySelector('#content');

        const menuDiv = document.createElement('div');
        menuDiv.classList.add('menu');
        const section1 = document.createElement('section'),
            section2 = document.createElement('section'),
            section3 = document.createElement('section');

        const h2_1 = document.createElement('h2'), h2_2 = document.createElement('h2'), h2_3 = document.createElement('h2');

        const ul_1 = document.createElement('ul'), ul_2 = document.createElement('ul'), ul_3 = document.createElement('ul');

        const li1_1 = document.createElement('li'), li2_1 = document.createElement('li'), li3_1 = document.createElement('li'), li4_1 = document.createElement('li');

        const li1_2 = document.createElement('li'), li2_2 = document.createElement('li'), li3_2 = document.createElement('li'), li4_2 = document.createElement('li');

        const li1_3 = document.createElement('li'), li2_3 = document.createElement('li'), li3_3 = document.createElement('li'), li4_3 = document.createElement('li');

        h2_1.textContent = 'Breakfast', h2_2.textContent = 'Lunch', h2_3.textContent = 'Dinner';

        li1_1.textContent = 'Bambiha Bole', li2_1.textContent = 'Sanju', li3_1.textContent = 'Old Skool', li4_1.textContent = 'Death Route';

        li1_2.textContent = 'Same Beef', li2_2.textContent = 'East Side Flow', li3_2.textContent = 'Dollar', li4_2.textContent = 'Issa Jatt';

        li1_3.textContent = 'Dhakka', li2_3.textContent = 'So High', li3_3.textContent = 'Famous', li4_3.textContent = 'Tochan';

        ul_1.appendChild(li1_1), ul_1.appendChild(li2_1), ul_1.appendChild(li3_1), ul_1.appendChild(li4_1);

        ul_2.appendChild(li1_2), ul_2.appendChild(li2_2), ul_2.appendChild(li3_2), ul_2.appendChild(li4_2);

        ul_3.appendChild(li1_3), ul_3.appendChild(li2_3), ul_3.appendChild(li3_3), ul_3.appendChild(li4_3);

        section1.appendChild(h2_1), section1.appendChild(ul_1);
        section2.appendChild(h2_2), section2.appendChild(ul_2);
        section3.appendChild(h2_3), section3.appendChild(ul_3);

        menuDiv.appendChild(section1), menuDiv.appendChild(section2), menuDiv.appendChild(section3);

        content.appendChild(menuDiv);
    };

    return { setMenu };
})();
export default Menu;