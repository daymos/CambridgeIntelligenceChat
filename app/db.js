// add :: String JSON -> undefined
export const add = newModel => localStorage.setItem('chatData', newModel);

export const getAll = () => localStorage.getItem('chatData');

