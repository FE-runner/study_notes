/**
 * @description
 * @param {*} $el
 * @param {function} cb
 */
function extraHandler($el, cb, event = 'mouseup') {
  $(document)
    .on(event, (e) => {
      if (!$el.is(e.target) && $el.has(e.target).length === 0) {
        cb && cb();
      }
    });
}