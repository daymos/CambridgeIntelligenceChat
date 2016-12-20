 /* eslint-disable */
import * as db from './db'
import * as help from './helpers'

export const addMessage = (newMsgObj) =>(
  compose( 
    dbHandler.add,
    help.updatedModel(newMsgObj), 
    help.parse,
    db.getAll)()
)

export const listAll = compose(
  updateDom, 
  encapsulateLiInsideUl,
  genArrayOfLiComponents(genLiComponent),
  help.parse,
)(db.getAll())


// newData :: void -> Object newMsg
export const fetchData = () => (
  compose(
    newMsgObj,
    getTextFromDom('input')
  )()
);
