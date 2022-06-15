import Login from './login.service';
import Collection from './collection.service';

//create new object
const api = () => ({
  Collection: () => ({ ...Collection }),
  Login: () => ({ ...Login })
});
export default api;