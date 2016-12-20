import * as db from './db';
import * as H from './helpers';
import { updateDom, clearAll } from './updateViewHelpers.js';

export const listAll = () => H.compose(
  updateDom,
  H.encapsulateLiInsideUl,
  H.genArrayOfLiComponents(H.genLiComponent),
  H.parse,
)(db.getAll());

export const addMessageToModel = (newMsgObj) => (
  H.compose(
    db.add,
    H.stringify,
    H.updatedModel(newMsgObj),
    H.parse,
           )(db.getAll())
);

// newData :: void -> Object newMsg
export const fetchDomDataAndFormat = () => (
  H.compose(
    H.newMsgObj,
  )(H.getTextFromDom('input'))
);


export const run = () => (
  H.compose(
    listAll,
    clearAll('#oldMessages'),
    addMessageToModel,
  )(fetchDomDataAndFormat())
);

