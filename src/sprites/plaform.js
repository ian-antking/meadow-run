import 'phaser';

class Platform extends Phaser.GameObjects.TileSprite {
  constructor(config) {
    const {
      scene,
      x,
      y,
      width,
      height,
      key,
      frame,
    } = config;
    super(scene, x, y, width, height, key, frame);
    this.width = config.width;
    this.scene = config.scene;
    this.setOrigin(0, 0);
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
    this.body.setImmovable(true);
    this.body.setVelocityX(-300);
    this.body.setAllowGravity(false);
  }

  get offScreen() {
    return this.x + this.width < 0;
  }

  update() {
    if (this.offScreen) {
      this.destroy();
    }
  }
}

export default Platform;
