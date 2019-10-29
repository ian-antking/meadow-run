import 'phaser';
import Player from '../sprites/player';
import Platform from '../sprites/plaform';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
  }

  create() {
    this.platformGroup = this.add.group();
    this.addPlatform(this.game.config.width, 0);

    this.controls = this.input.keyboard.addKeys({
      jump: 'up',
    });

    this.pointer = this.input.activePointer;

    this.player = new Player({
      scene: this,
      key: 'female-adventurer',
      platformGroup: this.platformGroup,
      x: 100,
      y: this.game.config.height - 130,
    });

    this.cameras.main.setBackgroundColor('#ccccff');

    this.time.addEvent({
      delay: 700,
      callback: () => this.addPlatform(70, this.game.config.width),
      callbackScope: this,
      repeat: -1,
    });
  }

  addPlatform(platformWidth, posX) {
    this.platformGroup.add(new Platform({
      scene: this,
      x: posX,
      y: this.game.config.height - 70,
      width: platformWidth,
      height: 70,
      key: 'tiles',
      frame: 2,
    }));
  }

  update() {
    if (!this.player.isAlive || this.player.body.touching.right) {
      this.scene.restart();
    }
    this.platformGroup.getChildren().forEach(platform => {
      platform.update();
    });
    this.player.update(this.controls);
  }
}
