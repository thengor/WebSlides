/**
 * @type {{transition: ?string}}
 */
const CACHE = {
  transition: null
};

/**
 * Figures which event to listen for a transition end.
 * @return {string}
 */
function transitionEnd() {
  if (CACHE.transition) {
    return CACHE.transition
  }

  const el = document.createElement('ws');
  const TRANSITIONS = {
    'transition'      : 'transitionend',
    'OTransition'     : 'oTransitionEnd',
    'MozTransition'   : 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd'
  };

  for (let t in TRANSITIONS){
    if (el.style[t] !== undefined){
      CACHE.transition = TRANSITIONS[t];
      break;
    }
  }

  return CACHE.transition;
}

export default { transitionEnd };
