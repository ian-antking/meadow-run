import State from '../../utils/state';

class MoveState extends State {
  constructor(name, prefab) {
    super(name, prefab);
  }

  execute(command) {
    if (this.prefab.body.velocity.y > 0) {
      return 'fall';
    }
    switch (command) {
      case 'jumpDown':
        return 'jump';
      default:
        return this.name;
    }
  }
}

export default MoveState;
