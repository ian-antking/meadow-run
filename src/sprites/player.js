import 'phaser';
import createAnimations from '../helpers/create-animation';
import playerAminations from '../config/player-animations';
import createStateMachine from '../helpers/create-state-machine';
import playerStates from '../config/player-states';

class Player extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key);
    this.scene = config.scene;
    this.spriteKey = config.key;
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
    this.scene.physics.add.collider(this.scene.platformGroup, this);

    this.state = createStateMachine(this.scene, this, playerStates);
    createAnimations(this, this.scene, playerAminations);
    this.state.setInitialState('move');
    this.body.setSize(50, 90);
    this.body.setOffset(25, 30);
    this.setDepth(1);
  }

  get isAlive() {
    return this.body.y < this.scene.game.config.height;
  }

  jump() {
    this.body.setVelocityY(-300);
  }

  update(command) {
    this.x = 100;
    this.anims.play(this.state.name, true);
    this.state.updateState(command);
  }
}

export default Player;
