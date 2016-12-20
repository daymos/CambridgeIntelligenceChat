import * as $ from 'jQuery';

export const compose = (...args) => value => args.reduce((acc, fn) => fn(acc), value);

// stringify ::  Object -> String
export const stringify = data => JSON.stringify(data);

// updateModel :: (Object, Object) -> Object
export const updatedModel = newMsg => currentModel => Object.assign(currentModel, newMsg);

// parse :: String -> Object
export const parse = data => JSON.stringify(data);

// updateView :: Object -> String DomElement
export const genLiComponent = data => (
  `<li>
  <div class='from'>from ${data.from}</div>
  <div class='text'>${data.text}</div>
  <div class='time'>at ${data.time}</div>
  </li>`
);
// genUlComponent :: fn -> Functor -> Functor Object
export const genArrayOfLiComponents = fn => data => data.map(fn);


// newMsgObj ::  String  -> Object
export const newMsgObj = (txt, from = 'me') => ({ id: Date.now(), txt, from });

// getTextFromDom :: String  -> String
export const getTextFromDom = target => $(`#${target}`).val();

