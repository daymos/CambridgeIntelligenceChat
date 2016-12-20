 /* eslint-disable */
import * as db from './db'
import * as H from './helpers'
import { updateDom, addOnclick, clearAll } from './updateViewHelpers.js'

export const listAll = () => H.compose(
  updateDom, 
  H.encapsulateLiInsideUl,
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

export const initDb = () => db.add(JSON.stringify([{time:0, text:'welcome', from: 'me'}, {time:1, text:'how are yoo today?', from: 'me'}]))


export const run =  () => (
  H.compose(
    addMessageToModel, 
  )(fetchDomDataAndFormat())
)


