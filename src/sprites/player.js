import 'phaser';

class Player extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key);
    this.scene = config.scene;
    this.spriteKey = config.key;
    // this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
    // this.body.setCollideWorldBounds(true);
  }
}

export default Player;