const Home = (() => {

    const setHome = () => {

        const content = document.querySelector('#content');

        const homeDiv = document.createElement('div')
        homeDiv.classList.add('home');

        const h3 = document.createElement('h3');
        const h2 = document.createElement('h2');
        const span = document.createElement('span');

        span.textContent = 'Muqabalas !';
        h2.appendChild(span);
        h3.textContent = 'We offer one of the most exotic';
        homeDiv.appendChild(h3);
        homeDiv.appendChild(h2);

        content.appendChild(homeDiv);
    };
    return { setHome };
})();

export default Home;