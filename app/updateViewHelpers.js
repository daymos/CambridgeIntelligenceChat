import $ from 'jQuery';

export const addOnclick = (fn) => {
  $('#send').click(() =>fn())
}

// updateDom :: String Domelements -> void
export const updateDom = (el) => {
  $('.ulcontainer').append(el)
}
