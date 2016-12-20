
export const compose = (...args) => value => args.reverse().reduce((acc, fn) => fn(acc), value);

// stringify ::  Object -> String
export const stringify = data => JSON.stringify(data);

// updateModel :: (Object, Object) -> Object
export const updatedModel = newMsg => currentModel => currentModel.concat([newMsg]);

// parse :: String -> Object
export const parse = data => JSON.parse(data);

// updateView :: Object -> String DomElement
export const genLiComponent = data => (
  `<li>
  <div class='from'>from ${data.from}</div>
  <div class='text'>${data.text}</div>
  <div class='time'>sent at ${data.time}</div>
  </li>`
);

// encapsulateLiInsideUl :: String DomEl -> String DomEl
export const encapsulateLiInsideUl = lis => `<ul id='oldMessages'>${lis}</ul>`;

// genUlComponent :: fn -> Functor -> Functor Object
export const genArrayOfLiComponents = fn => data => {
  return data.map(fn);
};

// newMsgObj ::  String  -> Object
export const newMsgObj = (txt, from = 'me') => ({ id: Date.now(), txt, from });

// getTextFromDom :: String  -> String
export const getTextFromDom = target => document.getElementById(target).value;

export const trace =(msg) => (val) => {
  console.log(msg, val, typeof val);
  return val;
};

