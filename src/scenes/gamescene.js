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
    this.addPlatform(this.game.config.width, 0, this.game.config.height - 70);

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
  }

  addPlatform(platformWidth, posX, posY) {
    const levels = [530, 460, 390, 320, 250, 180];
    this.platformGroup.add(new Platform({
      scene: this,
      x: posX,
      y: posY || levels[Math.floor(Math.random() * levels.length)],
      width: platformWidth || Math.ceil(Math.random() * 12) * 70,
      height: 70,
      key: 'tiles',
      frame: 2,
    }));
  }

  update() {
    const platforms = this.platformGroup.getChildren();
    const recentPlatform = platforms[platforms.length - 1];
    if (!this.player.isAlive || this.player.body.touching.right) {
      this.scene.restart();
    }
    platforms.forEach(platform => {
      platform.update();
    });
    if (recentPlatform.x + recentPlatform.width <= 800) {
      this.addPlatform(null, 800);
    }
    this.player.update(this.controls);
  }
}
