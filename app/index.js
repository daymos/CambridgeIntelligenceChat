import * as ctrls from './controllers';
import * as dom from './updateViewHelpers';


// onload render everything
window.onload = () => {
  dom.addOnclick(ctrls.run);
  ctrls.initDb();
  ctrls.listAll();
};
