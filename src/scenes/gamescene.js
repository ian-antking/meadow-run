import 'phaser';
import Player from '../sprites/player';
import Platform from '../sprites/plaform';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
    this.difficulty = 1;
    this.speed = 400;
    this.command = [];
  }

  preload() {
  }

  create() {
    this.platformGroup = this.add.group();
    this.addPlatform(this.game.config.width, 0, this.game.config.height - 70);

    this.jumpButton = this.add.image(700, 500, 'jump-button')
      .setDepth(5)
      .setInteractive()
      .on('pointerdown', () => {
        this.command.push('jumpDown');
      })
      .on('pointerup', () => {
        this.command.push('jumpUp');
      });

    this.controls = this.input.keyboard.addKeys({
      jump: 'up',
    });

    this.player = new Player({
      scene: this,
      key: 'female-adventurer',
      platformGroup: this.platformGroup,
      x: 100,
      y: this.game.config.height - 130,
    });

    this.cameras.main.setBackgroundColor('#ccccff');
  }

  generateLevelIndex(levels) {
    const index = Math.floor(Math.random() * levels.length);
    const difficulty = this.difficulty <= 3 ? this.difficulty : 3;
    const range = {
      high: difficulty + difficulty,
      low: difficulty - difficulty,
    };
    return index <= range.high && index >= range.low ? index : this.generateLevelIndex(levels);
  }

  generatePlatformLevel() {
    const levels = [530, 460, 390, 320, 250, 180];
    const levelIndex = this.generateLevelIndex(levels);
    const level = levels[levelIndex];
    return level;
  }

  generatePlatformWidth() {
    const tileCount = Math.ceil(Math.random() * 12);
    const tileWidth = 70;
    return tileCount * tileWidth;
  }

  addPlatform(platformWidth, posX, posY) {
    this.platformGroup.add(new Platform({
      scene: this,
      x: posX,
      y: posY || this.generatePlatformLevel(),
      width: platformWidth || this.generatePlatformWidth(),
      height: 70,
      key: 'tiles',
      frame: 2,
      speed: this.speed,
    }));
  }

  generatePlatformDistance() {
    return Math.ceil(Math.random() * 12) * 70;
  }

  update() {
    const platforms = this.platformGroup.getChildren();
    const recentPlatform = platforms[platforms.length - 1];
    if (!this.player.isAlive || this.player.body.touching.right) {
      this.scene.restart();
    }
    platforms.forEach(platform => {
      platform.update(this.speed);
    });
    if (recentPlatform.x + recentPlatform.width <= 800 - this.generatePlatformDistance()) {
      this.addPlatform(null, 800);
    }
    this.player.update(this.command.pop());
  }
}
