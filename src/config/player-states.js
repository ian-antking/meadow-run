import MoveState from '../states/player/move';
import JumpState from '../states/player/jump';
import FallState from '../states/player/fall';

const playerStates = {
  move: MoveState,
  jump: JumpState,
  fall: FallState,
};

export default playerStates;
