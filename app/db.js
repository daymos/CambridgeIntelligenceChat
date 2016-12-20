// add :: String JSON -> undefined
export const add = newModel => localStorage.setItem('chatDate', newModel);

export const getAll = () => localStorage.getItem('chatData');

