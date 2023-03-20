import home from './pages/home/index.js';
import sobre from './pages/sobre/index.js';
import './auth.js';

const main = document.querySelector('#root');

const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case ' ':
        main.appendChild(home());
        break;
      case '#sobre':
        main.appendChild(sobre());
        break;
      default:
        main.appendChild(home());
    }
  });
};

window.addEventListener('load', () => {
  main.appendChild(home());
  init();
});
