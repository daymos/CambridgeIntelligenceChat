import * as ctrls from './controllers';
import * as dom from './updateViewHelpers';
import * as H from './helpers';

// listen for localStorage event and rerender all

// onload render everything
window.onload = () => {
  // list all
  dom.addOnclick(ctrls.storeInModel);
  ctrls.initDb();
  ctrls.listAll();
  window.addEventListener('storage', console.log.bind('storage was updated'), false);
  console.log('loading')
};
