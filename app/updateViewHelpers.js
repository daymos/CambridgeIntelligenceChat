import $ from 'jquery';

export const addOnclick = (fn) => {
  document.getElementById('send').addEventListener('click', () => fn());
};

// updateDom :: String Domelements -> void
export const updateDom = (el) => {
  $('.ulcontainer').append(el);
};

export const clearAll = (target) => () => $(target).remove();
