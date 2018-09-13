import 'phaser';

import { Scene } from './scenes/scene';


const gameConfig = {
  width: 640,
  height: 400,
  scene: Scene
};

new Phaser.Game(gameConfig);
