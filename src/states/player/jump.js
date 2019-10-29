import State from '../../utils/state';

class JumpState extends State {
  constructor(name, prefab) {
    super(name, prefab);
  }

  enter() {
    this.addDelayedCall('jumpTimer', 500, () => this.prefab.state.setState('fall'), [], this);
  }

  execute(controls) {
    const {
      jump,
    } = controls;
    if (jump.isDown) {
      this.prefab.jump();
    }
    if (jump.isUp) {
      return 'fall';
    }
    return this.prefab.body.velocity.y > 0 ? 'fall' : this.name;
  }

  exit() {
    this.cleanupTimers();
  }
}

export default JumpState;
