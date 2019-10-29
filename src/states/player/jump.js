import State from '../../utils/state';

class JumpState extends State {
  constructor(name, prefab) {
    super(name, prefab);
  }

  enter() {
    this.prefab.jump();
  }

  execute() {
    return this.prefab.body.velocity.y > 0 ? 'fall' : this.name;
  }
}

export default JumpState;
