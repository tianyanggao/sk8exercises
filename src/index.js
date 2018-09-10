import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/root/Main'
import{HashRouter} from 'react-router-dom'
// import './styles/stylesheet.css'
import './index.css'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import reducer from './Reducer/reducer';
import registerServiceWorker from './registerServiceworker';
import ReduxThunk from 'redux-thunk'
// import'./styles/stylesheet.css'
// import rootReducer from './Redux/reducer'

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

ReactDOM.render(
        <Provider store={store}><HashRouter>
        <Main /></HashRouter>
        </Provider>,
        document.getElementById('root'));
    registerServiceWorker();
