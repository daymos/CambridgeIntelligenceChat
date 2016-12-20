 /* eslint-disable */
import * as db from './db'
import * as H from './helpers'
import { updateDom, addOnclick } from './updateViewHelpers.js'

export const addMessage = (newMsgObj) =>(
  H.compose( 
    dbHandler.add,
    H.updatedModel(newMsgObj), 
    H.parse,
    db.getAll)()
)

export const listAll = () => H.compose(
   updateDom, 
  H.trace('complete Ul and li'),
  H.encapsulateLiInsideUl,
  H.trace('string with multiple li elements: '),
  H.genArrayOfLiComponents(H.genLiComponent),
  H.trace('parsed: '),
  H.parse,
  H.trace('raw: '),
)(db.getAll())


// newData :: void -> Object newMsg
export const fetchData = () => (
  H.compose(
    newMsgObj,
    getTextFromDom('input')
  )()
);


export const add = () => (
  H.compose(
    addMessage, 
    fetchData 
  )
)

export const initDb = () => db.add(JSON.stringify([{time:0, text:'welcome', from: 'me'}]))

