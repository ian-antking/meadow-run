import State from '../../utils/state';

class MoveState extends State {
  constructor(name, prefab) {
    super(name, prefab);
  }

  execute(controls) {
    const {
      jump,
    } = controls;

    if (this.prefab.body.velocity.y > 0) {
      return 'fall';
    }
    if (jump.isDown) {
      return 'jump';
    }
    return this.name;
  }
}

export default MoveState;
