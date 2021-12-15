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
    if (action.type === 'REMOVE_PERSON_TO_ROOM') {
        return Object.assign({}, state, {
            peoples: state.peoples.map(people => {
                if (people.id === action.payload.id) {
                    return new People(people.id, people.name, 0)
                }
                return people;
            })
        })
    }
    if (action.type === 'ADD_PERSON_TO_ROOM') {
        return Object.assign({}, state, {
            peoples: state.peoples.map(people => {
                if (people.id === action.payload.person.id) {
                    return new People(people.id, people.name, action.payload.selectedRoom)
                }
                return people;
            })
        })
    }
    if (action.type === 'ADD_PERSON') {
        const newId = state.peoples[state.peoples.length-1].id+1
        return Object.assign({}, state, {
            peoples: [...state.peoples, new People(newId, action.payload, 0)]
        })
    }
    if (action.type === 'REMOVE_PERSON') {
        return Object.assign({}, state, {
            peoples: state.peoples.filter(people => action.payload !== people.id)
        })
    }
    return state
}

const store = createStore(reducer)

export default store;