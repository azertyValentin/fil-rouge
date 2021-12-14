import { createStore } from 'redux'
import config from '../config/config'
import People from '../models/People';

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
    if (action.type === 'REMOVE_PERSON') {
        return Object.assign({}, state, {
            peoples: state.peoples.map(people => {
                if (people.id === action.payload.id) {
                    return new People(people.id, people.name, 0)
                }
                return people;
            })
        })
    }
    return state
}

const store = createStore(reducer)

export default store;