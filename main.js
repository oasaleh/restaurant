(() => {
  'use strict';
  !(function () {
    const t = document.getElementById('content'),
      e = (function (t, e, n, c) {
        const d = document.createElement('section');
        d.setAttribute('id', 'header');
        const i = document.createElement('header');
        i.setAttribute('id', 'title-bar');
        const o = document.createElement('p');
        return (
          o.setAttribute('class', 'title'),
          (o.textContent = 'Halal Guys'),
          i.appendChild(o),
          d.appendChild(i),
          d
        );
      })();
    t.appendChild(e);
  })();
})();
