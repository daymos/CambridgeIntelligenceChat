import $ from 'jquery';

export const addOnclick = (fn) => $('#send').click(() => fn());

export const updateDom = (el) => $('.ulcontainer').append(el);

export const clearAll = (target) => () => $(target).remove();
