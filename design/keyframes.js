/** @see https://tailwindcss.com/docs/animation */
const keyframes = {
  'scale': {
    '0%': {
      opacity: 0,
      transform: 'scale(0.8)'
    },
    '100%': {
      opacity: 1,
      transform: 'scale(1)'
    }
  },
  'from-t-25': {
    from: {
      opacity: 0,
      transform: 'translate(0, -25px)'
    },
    to: {
      opacity: 1,
      transform: 'translate(0)'
    }
  },
  'from-r-25': {
    from: {
      opacity: 0,
      transform: 'translate(25px, 0)'
    },
    to: {
      opacity: 1,
      transform: 'translate(0)'
    }
  },
  'from-b-25': {
    from: {
      opacity: 0,
      transform: 'translate(0, 25px)'
    },
    to: {
      opacity: 1,
      transform: 'translate(0)'
    }
  },
  'from-l-25': {
    from: {
      opacity: 0,
      transform: 'translate(-25px, 0)'
    },
    to: {
      opacity: 1,
      transform: 'translate(0)'
    }
  }
};

module.exports = keyframes;
