const Contact = (() => {

    const setContact = () => {

        const content = document.querySelector('#content');

        const contactDiv = document.createElement('div');
        contactDiv.classList.add('contact');

        const div_1 = document.createElement('div'), div_2 = document.createElement('div'), div_3 = document.createElement('div'), div_4 = document.createElement('div');

        const h3_1 = document.createElement('h3'), h3_2 = document.createElement('h3'), h3_3 = document.createElement('h3'), h3_4 = document.createElement('h3');

        const p_1 = document.createElement('p'), p_2 = document.createElement('p'), p_3 = document.createElement('p'), p_4 = document.createElement('p');

        h3_1.textContent = 'Opening Hours', h3_2.textContent = 'Phone', h3_3.textContent = 'Email', h3_4.textContent = 'Location';

        p_1.textContent = '24/7', p_2.textContent = '+91 XXX-XXX-XXXX', p_3.textContent = 'enquiry@jatt.com', p_4.textContent = 'Pind Moosa, Punjab';

        div_1.innerHTML = '<i class="fa fa-coffee" aria-hidden="true"></i>', div_1.appendChild(h3_1), div_1.appendChild(p_1);

        div_2.innerHTML = '<i class="fa fa-phone" aria-hidden="true"></i>', div_2.appendChild(h3_2), div_2.appendChild(p_2);

        div_3.innerHTML = '<i class="fa fa-envelope" aria-hidden="true"></i>', div_3.appendChild(h3_3), div_3.appendChild(p_3);

        div_4.innerHTML = '<i class="fa fa-map-marker" aria-hidden="true"></i>', div_4.appendChild(h3_4), div_4.appendChild(p_4);

        contactDiv.appendChild(div_1), contactDiv.appendChild(div_2), contactDiv.appendChild(div_3), contactDiv.appendChild(div_4);

        content.appendChild(contactDiv);
    };

    return { setContact };
})();

export default Contact;