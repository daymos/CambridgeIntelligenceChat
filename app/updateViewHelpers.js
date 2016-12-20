import $ from 'jQuery';
import add from './controllers';

export const addOnclick = () => {
  $('.send').click(add);
};

// updateDom :: String Domelements -> void
export const updateDom = (el) => {
  $('.ulcontainer').append(el)
}
