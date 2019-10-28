import 'phaser';

class Player extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key);
    this.scene = config.scene;
    this.spriteKey = config.key;
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
    this.scene.physics.add.collider(this.scene.ground, this);
  }

  update() {
    this.x = 100;
  }
}

export default Player;
