import State from '../../utils/state';

class FallState extends State {
  constructor(name, prefab) {
    super(name, prefab);
    this.doubleJump = false;
  }

  enter() {
    this.addKeyListener('jumpListener', 'jump', 'down', () => {
      if (!this.doubleJump) {
        this.setState('jump');
        this.doubleJump = true;
      }
    });
  }

  execute() {
    if (this.prefab.body.touching.down) {
      this.doubleJump = false;
      return 'move';
    }
    return this.name;
  }

  exit() {
    this.cleanupListener('jump');
  }
}

export default FallState;
