class StateMachine {
  constructor(scene) {
    this.states = {};
    this.currentState = null;
    this.scene = scene;
  }

  get name() {
    return this.currentState.name;
  }

  addState(state) {
    this.states[state.name] = state;
  }

  setInitialState(stateName) {
    this.currentState = this.states[stateName];
    this.currentState.enter();
    this.currentState.enter();
  }

  setState(nextState, args = []) {
    this.currentState.exit();
    this.currentState = this.states[nextState];
    this.currentState.enter(null, args);
  }

  handleInput(controls, pointer, args = []) {
    const nextStateName = this.currentState.execute(controls);
    if (nextStateName !== this.currentState.name) {
      this.currentState.exit();
      this.currentState = this.states[nextStateName];
      this.currentState.enter(controls, args);
    }
  }
}

export default StateMachine;
