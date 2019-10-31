import State from '../../utils/state';

class JumpState extends State {
  constructor(name, prefab) {
    super(name, prefab);
  }

  enter() {
    this.updates = 0;
    this.timeOut = false;
  }

  execute(command) {
    this.updates += 1;
 
    if (this.updates === 30) {
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
