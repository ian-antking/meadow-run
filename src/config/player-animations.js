const playerAnimations = [
  {
    isStatic: false,
    name: 'attack',
    start: 0,
    end: 2,
    frameRate: 10,
    repeat: 0,
  },
  {
    isStatic: true,
    name: 'duck',
    frameRate: 10,
  },
  {
    isStatic: true,
    name: 'fall',
    frameRate: 10,
  },
  {
    isStatic: true,
    name: 'hurt',
    prefix: 'shoveBack',
    frameRate: 10,
  },
  {
    isStatic: true,
    name: 'idle',
    frameRate: 10,
  },
  {
    isStatic: true,
    name: 'jump',
    frameRate: 10,
  },
  {
    isStatic: true,
    name: 'kick',
    frameRate: 10,
  },
  {
    isStatic: false,
    name: 'move',
    prefix: 'run',
    start: 0,
    end: 2,
    frameRate: 10,
    repeat: -1,
  },
  {
    isStatic: true,
    name: 'shove',
    frameRate: 10,
  },
  {
    isStatic: true,
    name: 'slide',
    frameRate: 10,
  },
];

export default playerAnimations;
