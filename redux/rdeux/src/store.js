import rootReduced from "./reducers";
import {createStore} from 'redux' 
const store=createStore(rootReduced)
export default store