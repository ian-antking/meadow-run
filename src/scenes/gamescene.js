import 'phaser';
import Player from '../sprites/player';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
  }

  create() {
    this.ground = this.add.tileSprite(0, this.game.config.height - 70, this.game.config.width, 70, 'tiles', 2);
    this.ground.setOrigin(0, 0);
    this.physics.world.enable(this.ground);
    this.ground.body.setAllowGravity(false);
    this.ground.body.setImmovable(true);
    // this.ground.setGravity(0);
    this.player = new Player({
      scene: this,
      key: 'female-adventurer',
      hazardGroup: this.hazardGroup,
      x: 100,
      y: 200,
    });
  }
}
