import { createStore } from 'redux';

import todoreducer from './todoreducer';

export default createStore(
    todoreducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )