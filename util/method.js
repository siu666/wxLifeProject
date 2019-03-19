const debounce=(func, wait = 500)=> {
  let timeout;
  return function (event) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.call(this, event)
    }, wait);
  };
};

  module.exports = {
    debounce: debounce
  }