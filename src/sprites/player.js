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
    this.body.setSize(50, 100);
    this.body.setOffset(25, 20);
  }

  get isAlive() {
    return this.body.y < this.scene.game.config.height;
  }

  addDelayedCall(time, callback, args, context) {
    return this.scene.time.delayedCall(time, callback, args, context);
  }

  jump() {
    this.body.setVelocityY(-300);
  }

  update(controls, pointer) {
    this.x = 100;
    this.anims.play(this.state.name, true);
    this.state.handleInput(controls, pointer);
  }
}

export default Player;
