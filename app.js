const featureSection = document.querySelector('.speak-group');
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close');
const links = document.querySelectorAll('a');
const url = window.location.href;
const data = [
  {
    name: 'Ali Morshedlou',
    imgSrc: './images/speakers/ali-morshedlou.jpg',
    jobTitle: 'BEng. Computer Science',
    about:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },

  {
    name: 'David Mumma',
    imgSrc: './images/speakers/david-mumma.jpg',
    jobTitle: 'BEng. Mechanical Engineering',
    about:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },

  {
    name: 'Gift Habeshaw',
    imgSrc: './images/speakers/gift-habeshaw.jpg',
    jobTitle: 'BEng. Food Engineering',
    about:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },

  {
    name: 'Christina Wocinte',
    imgSrc: './images/speakers/christina-wocintechchat.jpg',
    jobTitle: 'BEng. Civil Engineering',
    about:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },

  {
    name: 'Elin Tabitha',
    imgSrc: './images/speakers/elin-tabitha.jpg',
    jobTitle: 'BEng. Industrial Chemistry',
    about:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },

  {
    name: 'Juan Enclada',
    imgSrc: './images/speakers/juan-encalada.jpg',
    jobTitle: 'BEng. Electrical Engineering',
    about:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
];

let htmlContent = '';

data.forEach((item) => {
  htmlContent += `<li class='speaker'>
  <article>
    <div class='img-holder'>
    <img
    class='cheese'
    src="./images/home/empty-chessboard-svgrepo-com.svg"
    alt='cheese-bg'
  />
    <img
      class='speaker-img'
      src=${item.imgSrc}
      alt='speakers'
    />
  </div>
  <div class='speaker-info'>
    <h4 class='speaker-name'>${item.name}</h4>
    <p class='job-title'>${item.jobTitle}</p>
    <div class='line'></div>
    <p class='about'>
     ${item.about}
    </p>
  </div>
</li>
</article>`;

  featureSection.innerHTML = htmlContent;
});

const handelBurger = () => {
  mobileMenu.classList.toggle('active');
};

const handelCloseMenu = () => {
  mobileMenu.classList.toggle('active');
};

burger.addEventListener('click', handelBurger);

closeMenu.addEventListener('click', handelCloseMenu);

links.forEach((link) => {
  if (link.href === url) link.id = 'active-link';
});