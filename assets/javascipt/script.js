const speakersList = [
  {
    image: 'assets/images/speaker_01.png',
    name: 'Yochai Benkler',
    status: 'Berkman professor of Entrepreneuriat Legal Studies of Harvard Law Shool',
    description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006',
  },
  {
    image: 'assets/images/speaker_02.png',
    name: 'Kilnam Chon',
    status: '',
    description: 'Kilnam Chon helped bring the Internet to Asia and is an ouspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Society\'s (ISOC) Internet Hall of Frame',
  },
  {
    image: 'assets/images/speaker_03.png',
    name: 'SohYeong Noh',
    status: 'Director of Art Centre Nabi and a board member of ACE Morocco',
    description: 'As the main venue for new media art production in Morocco, Nabi promots cross-disciplinary collaboration and understanding amoung science technology, humanities, and the arts',
  },
  {
    image: 'assets/images/speaker_04.png',
    name: 'Julia Leda',
    status: 'President of Young Pirates of Europe',
    description: 'European ingetration, political democracy and participation of youth though online as her major condem, Reda\'s report outlining potentiel changes to EU copyright law was approved by the Parliament in July',
  },
  {
    image: 'assets/images/speaker_05.png',
    name: 'Lila Tretikov',
    status: 'Executive Director of the Wikimedia Foundation',
    description: 'Lila is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia.',
  },
  {
    image: 'assets/images/speaker_06.png',
    name: 'Ryan Merkley',
    status: 'CEO of ACE',
    description: 'Ryan had been leading open-source projects.',
  },
];
const speakersContainer = document.querySelector('#featured-speakers-list');
const partners = document.querySelector('#partners');
const footer = document.querySelector('footer');
function generateAll(test) {
  speakersContainer.innerHTML = '';
  speakersList.every((speaker, index) => {
    if (test === 1 && index === 2) {
      speakersContainer.innerHTML += `
    <button id="more-button" type="button" onClick="moreClicked(true)">MORE<i class="fa-solid fa-angle-down"></i></button>
    `;
      partners.style.display = 'none';
      footer.style.display = 'none';
      return false;
    }
    speakersContainer.innerHTML += `
  <div class="speaker-container">
                            <div class ="speaker-image">
                                <img src="${speaker.image}" alt="${speaker.name} picture"/>
                            </div>
                            <div class="speaker-informations">
                                    <div class="speaker-name">
                                        <h3>${speaker.name}</h3>
                                    </div>
                                    <div class="speaker-status">
                                        <p>${speaker.status}</p>
                                    </div>
                                    <div class="speaker-description">
                                        <p>${speaker.description}</p>
                                    </div>
                            </div>
    </div>
    `;
    partners.style.display = 'block';
    footer.style.display = 'block';
    return !(test === 1 && index === 2);
  });
}
let moreClick = false;
function moreClicked(test) {
  if (test === true) {
    generateAll(0);
    moreClick = true;
  }
}
window.onload = () => {
  if (window.innerWidth >= 768) {
    generateAll(0);
  } else {
    generateAll(1);
  }
};

window.onresize = () => {
  if (window.innerWidth >= 768) {
    generateAll(0);
  } else if (moreClick === false) {
    generateAll(1);
  }
};
moreClicked(false);