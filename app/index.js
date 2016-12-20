import * as ctrls from './controllers';
import * as dom from './updateViewHelpers';
import * as db from './db';

window.onload = () => {
  dom.addOnclick(ctrls.run);
  db.initDb();
  ctrls.listAll();
};
