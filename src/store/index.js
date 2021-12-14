import { createStore } from 'redux'
import config from '../config/config'

function getPeoples() {
    const parsedConfig = JSON.parse(JSON.stringify(config));
    const peoples = parsedConfig.persons;
    const peoplesTab = [];

    Object.keys(peoples).forEach(function(key) {
        peoplesTab.push(peoples[key]);
    });
    return peoplesTab;
}

const initialState = {
    peoples: getPeoples()
}

const reducer = (state = initialState, action) => {
if (action.type === 'TODO') {
    return Object.assign({}, state, {})
}
return state
}

const store = createStore(reducer)

export default store;