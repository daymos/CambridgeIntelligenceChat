 /* eslint-disable */
import * as db from './db'
import * as H from './helpers'
import { updateDom, addOnclick } from './updateViewHelpers.js'

export const addMessage = (newMsgObj) =>(
  H.compose( 
    db.add,
    H.stringify,
    H.updatedModel(newMsgObj), 
    H.trace('parsed: '),
    H.parse,
    H.trace('content of ls is: ')
           )(db.getAll())
)

export const listAll = () => H.compose(
  updateDom, 
  H.encapsulateLiInsideUl,
  H.genArrayOfLiComponents(H.genLiComponent),
  H.parse,
)(db.getAll())


// newData :: void -> Object newMsg
export const fetchData = () => (
  H.compose(
    H.newMsgObj,
  )(H.getTextFromDom('input'))
);


export const storeInModel = () => (
  H.compose(
    addMessage, 
  )(fetchData())
)

export const initDb = () => db.add(JSON.stringify([{time:0, text:'welcome', from: 'me'}, {time:1, text:'how are yoo today?', from: 'me'}]))

