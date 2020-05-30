'use strict';

// 1. V souboru index.html smažte obsah elementu episode-list. V JavaScriptu vyberte tento element a s použitím vlastnosti innerHTML v něm vytvořte jednu epizodu podcastu dle hodnot uložených v proměnných number, title a guest.

const num = '126';
const title = 'Robot, který snědl koblihu';
const guest = 'Radovan Siwek';

const episodesListElm = document.querySelector('.episodes-list');
episodesListElm.innerHTML =
  `<div class="episode">
        <div class="episode__num">${num}</div>
        <div class="episode__body">
          <div class="episode__title">${title}</div>
          <div class="episode__guest">host: ${guest}</div>
        </div>
      </div>`;


// 2. Mějme následující pole obsahující několik epizod našeho podcastu. Napište cyklus, který projde toto pole a pro každou položku vytvoří novou epizodu uvnitř elementu episodes-list.

const episodes = [
  [127, 'Hledání plyšového Yettiho', 'Vojtěch Ryba'],
  [128, 'Moderní hrachová polévka', 'Kamila Štancová'],
  [129, 'Poloautomatické zrcadlo', 'Janka Janovská'],
  [130, 'Máčené hlavy parlamentu', 'Jonáš Daněk'],
  [131, 'Služby na hraně přívěsu', 'Tereza Křivánková'],
  [132, 'Klasifikace sněžných klokanů', 'Josef Stix'],
  [133, 'Rybolov v Oceánu bouří', 'Ludmila Gajová'],
];

for (let i = 0; i < episodes.length; i++) {
  episodesListElm.innerHTML +=
    `<div class="episode">
  <div class="episode__num"> ${episodes[i][0]}</div>
  <div class="episode__body">
  <div class="episode__title">${episodes[i][1]}</div>
  <div class="episode__guest">host: ${episodes[i][2]}</div>
  </div>
  </div>`;
};
