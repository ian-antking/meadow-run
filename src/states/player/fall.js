import State from '../../utils/state';

class FallState extends State {
  constructor(name, prefab) {
    super(name, prefab);
  }

  execute() {
    return this.prefab.body.touching.down ? 'move' : this.name;
  }
}

export default FallState;
