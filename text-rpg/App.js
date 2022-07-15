import Hero from './Hero.js';
import Monster from './Monster.js';

function App({
  $startScreen,
  $gameMenu,
  $battleMenu,
  $heroName,
  $heroLevel,
  $heroHp,
  $heroXp,
  $heroAtt,
  $monsterName,
  $monsterHp,
  $monsterAtt,
  $message,
}) {
  class Game {
    constructor(name) {
      this.monster = null;
      this.hero = null;
      this.monsterList = [
        { name: '슬라임', hp: 25, att: 10, xp: 10 },
        { name: '스켈레톤', hp: 50, att: 15, xp: 20 },
        { name: '마왕', hp: 150, att: 35, xp: 50 },
      ];
      this.start(name);
    }
    start(name) {
      $gameMenu.addEventLister('submit', this.onGameMenuInput);
      $battleMenu.addEventLister('submit', this.onBattleMenuInput);
      this.changeScreen('game');
      this.hero = new Hero(this, name);
      this.updateHeroState();
    }
    changeScreen(screen) {
      if (screen === 'start') {
        $startScreen.style.display = 'block';
        $gameMenu.style.display = 'none';
        $battleMenu.style.display = 'none';
      } else if (screen === 'game') {
        $startScreen.style.display = 'none';
        $gameMenu.style.display = 'block';
        $battleMenu.style.display = 'none';
      } else if (screen === 'battle') {
        $startScreen.style.display = 'none';
        $gameMenu.style.display = 'none';
        $battleMenu.style.display = 'block';
      }
    }
    onGameMenuInput = (e) => {
      e.preventDefault();
      const input = e.target['menu-input'].value;
      if (input === '1') {
        this.changeScreen('battle');
      } else if (input === '2') {
        //휴식
      } else if (input === '3') {
        //종료
      }
    };
    onBattleMenuInput = (e) => {
      e.preventDefault();
      const input = e.target['battle-input'].value;
      if (input === '1') {
        //공격
        this.changeScreen();
      } else if (input === '2') {
        //회복
      } else if (input === '3') {
        //도망
        this.changeScreen('game');
      }
    };
    updateHeroState() {
      const { hero } = this;
      if (hero == null) {
        $heroName.textContent = '';
        $heroLevel.textContent = '';
        $heroHp.textContent = '';
        $heroXp.textContent = '';
        $heroAtt.textContent = '';
        return;
      }
      $heroName.textContent = hero.name;
      $heroLevel.textContent = `${hero.lev}Lev`;
      $heroHp.textContent = `HP: ${hero.hp}/${hero.maxHp}`;
      $heroAtt.textContent = `ATT: ${hero.att}`;
    }
  }
  $startScreen.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target['name-input'].value;
    const game = new Game(name);
  });
}

export default App;
