import State from '../../utils/state';

class FallState extends State {
  constructor(name, prefab) {
    super(name, prefab);
    this.doubleJump = false;
  }


  execute(command) {
    if (this.prefab.body.touching.down) {
      this.doubleJump = false;
      return 'move';
    }

    if (command === 'jumpDown' && !this.doubleJump) {
      this.doubleJump = true;
      return 'jump';
    }

    return this.name;
  }
}

export default FallState;
