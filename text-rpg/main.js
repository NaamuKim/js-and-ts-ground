import App from './App.js';
const $startScreen = document.querySelector('#start-screen');
const $gameMenu = document.querySelector('#game-menu');
const $battleMenu = document.querySelector('#battle-menu');
const $heroName = document.querySelector('#hero-name');
const $heroLevel = document.querySelector('#hero-level');
const $heroHp = document.querySelector('#hero-hp');
const $heroXp = document.querySelector('#hero-xp');
const $heroAtt = document.querySelector('#hero-att');
const $monsterName = document.querySelector('#monster-name');
const $monsterHp = document.querySelector('#monster-hp');
const $monsterAtt = document.querySelector('#monster-att');
const $message = document.querySelector('message');

new App({
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
});
