'use strict';
const episodes = [
  [127, 'Hledání plyšového Yettiho', 'Vojtěch Ryba'],
  [128, 'Moderní hrachová polévka', 'Kamila Štancová'],
  [129, 'Poloautomatické zrcadlo', 'Janka Janovská'],
  [130, 'Máčené hlavy parlamentu', 'Jonáš Daněk'],
  [131, 'Služby na hraně přívěsu', 'Tereza Křivánková'],
  [132, 'Klasifikace sněžných klokanů', 'Josef Stix'],
  [133, 'Rybolov v Oceánu bouří', 'Ludmila Gajová'],
];

// Otevřete si aplikaci v prohlížeči a přesuňte se do JavaScriptové konzole. Zkuste ručně vyrobit DOM element jedné epizody.
// 1. Pomocí funkce document.createElement vytvořte prázdný div a uložte si jej do proměnné episodeElm. Vyzkoušejte v konzoli, že se element povedlo vytvořit.
// 2. Nastavte elementu třídu episode a opět zkontrolujte, že se změna podařila.
// 3. Nastavte elementu innerHTML. Obsah je docela dlouhý řetězec, který se v konzoli píše nepohodlně. Vložte tedy do innerHTML zatím jen div s číslem episody. Opět otestujte, že se operace povedla.
// 4. Vyberte v konzoli element episodes-list a vložte do něj váš nový DOM element pomocí metody appendChild.

// Reseni:
// const episodeElm = document.createElement('div');
// episodeElm.className = 'episode';
// episodeElm.innerHTML = `
// <div class="episode__num">150</div>
// `;
// episodesList.appendChild(episodeElm);


// Nyní přesuneme náš kód z konzole do funkce.
// 1. Ve vašem programu vytvořte funkci renderEpisode, která bude mít tři parametry: num, title a guest. Funkce vrátí nový DOM element sestavený stejným způsobem jako jsme prve použili v konzoli. Atribut innerHTML už nastavte na plný obsah elementu a zakompounujte do něj údaje z parametrů funkce.
// 2. V programu najdete cyklus, který vytváři strukturu podcastu. Upravte tento cyklus tak, aby používal funkci renderEpisode a metodu appendChild.

let renderEpisode = (num, title, guest) => {
  const episodeElm = document.createElement('div');
  episodeElm.className = 'episode';
  episodeElm.innerHTML = `
    <div class="episode__num">${num}</div>
    <div class="episode__body">
      <div class="episode__title">${title}</div>
      <div class="episode__guest">${guest}</div>
    </div>
  `;
  return episodeElm;
};

const updateEpisodes = () => {
  const episodesListElm = document.querySelector('.episodes-list');
  episodesListElm.innerHTML = '';
  for (let i = 0; i < episodes.length; i++) {
    const episodeElm = renderEpisode(episodes[i][0], episodes[i][1], episodes[i][2]);
    episodesListElm.appendChild(episodeElm);
  }
};

updateEpisodes();
