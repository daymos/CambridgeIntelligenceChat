// add :: String JSON -> undefined
export const add = newModel => localStorage.setItem('chatData', newModel);

export const getAll = () => localStorage.getItem('chatData');

export const initDb = () => add(JSON.stringify([{id: new Date(), txt:'welcome, ', from: 'greetings AI'}, {id: new Date(), txt:'how are you today?', from: 'greetings AI'}]))



