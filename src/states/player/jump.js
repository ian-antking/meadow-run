import State from '../../utils/state';

class JumpState extends State {
  constructor(name, prefab) {
    super(name, prefab);
    this.timeOut = false;
  }

  enter() {
    this.timeOut = false;
    this.timers.jumpTimer = setTimeout(() => this.timeOut = true, 500);
  }

  execute(command) {
    if (this.timeOut) {
      return 'fall';
    }

    this.prefab.jump();

    if (this.prefab.body.touching.up) {
      return 'fall';
    }

    return command !== 'jumpUp' ? this.name : 'fall';
  }
}

export default JumpState;
