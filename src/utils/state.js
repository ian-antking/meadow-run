class State {
  constructor(name, prefab) {
    this.name = name;
    this.prefab = prefab;
    this.timers = {};
    this.listeners = {};
  }

  addDelayedCall(name, time, callback, args, context) {
    this.timers[name] = this.prefab.addDelayedCall(time, callback, args, context);
  }

  addKeyListener(name, key, condition, callback, args = null) {
    this.listeners[name] = this.prefab.addKeyListener(key, condition, callback, args);
  }

  cleanupTimers() {
    Object.keys(this.timers).forEach(timer => {
      this.timers[timer].remove();
    });
  }

  cleanupListener(key) {
    this.prefab.scene.controls[key].removeAllListeners();
  }

  enter() {
  }

  execute() {
    return this.name;
  }

  exit() {
  }

  handleInput() {
    return this.maintainState();
  }

  setState(state) {
    this.prefab.state.setState(state);
  }
}

export default State;
