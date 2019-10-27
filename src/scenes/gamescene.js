import 'phaser';
import Player from '../sprites/player';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
  }

  create() {
    this.player = new Player({
      scene: this,
      key: 'female-adventurer',
      hazardGroup: this.hazardGroup,
      x: 200,
      y: 200,
    });
  }
}
