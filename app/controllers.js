 /* eslint-disable */
import * as db from './db'
import * as H from './helpers'
import { updateDom, addOnclick, clearAll } from './updateViewHelpers.js'

export const listAll = () => H.compose(
  updateDom, 
  H.encapsulateLiInsideUl,
  H.trace('list of li: '),
  H.genArrayOfLiComponents(H.genLiComponent),
  H.parse,
)(db.getAll())

export const addMessageToModel = (newMsgObj) =>(
  H.compose( 
    listAll,
    clearAll('#oldMessages'),
    db.add,
    H.stringify,
    H.updatedModel(newMsgObj), 
    H.parse,
           )(db.getAll())
)

// newData :: void -> Object newMsg
export const fetchDomDataAndFormat = () => (
  H.compose(
    H.newMsgObj,
  )(H.getTextFromDom('input'))
);

export const initDb = () => db.add(JSON.stringify([{id: new Date(), txt:'welcome, ', from: 'greetings AI'}, {id: new Date(), txt:'how are you today?', from: 'greetings AI'}]))


export const run =  () => (
  H.compose(
    addMessageToModel, 
  )(fetchDomDataAndFormat())
)


