let isMobile = {
   Android: function () { return navigator.userAgent.match(/Android/i); },
   BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
   iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
   Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
   Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
   any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
}

let body = document.querySelector('body');

if (isMobile.any()) {
   body.classList.add('touchscreen');
   let arrow = document.querySelectorAll('.arrow');

   for (let i = 0; i < arrow.length; i = i + 1) {
      let submenu = arrow[i].nextElementSibling;
      let thisArrow = arrow[i];
      let thisLink = arrow[i].previousElementSibling;

      thisLink.classList.add('parent');
      arrow[i].addEventListener('click', (event) => {
         submenu.classList.toggle('open');
         thisArrow.classList.toggle('active');
      })
   }
} else {
   body.classList.add('mouse');
}