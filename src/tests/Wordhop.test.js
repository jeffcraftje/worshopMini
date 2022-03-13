import '@testing-library/jest-dom'
import { loginReducer } from '../reducers/loginReducer'
import { types, typesEmpleoyees } from '../types/types'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'


const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Validacion loginReducer', () => {
    test('validaciuon de loginReducer', () => {
        const initState = {};
        const action = {
            type: types.login,
            payload: {
                id: "abc",
                displayname: "jefferson"
            }
        };
        const state = loginReducer(initState, action);
        expect(state).toEqual({
            id: "abc",
            name: "jefferson"
        })
    })
    test('validacion cierre login', () => {
        const initState = {
            id: "abc",
            name: "jefferson"
        };
        const action = {
            type: types.logout,
        }
        const state = loginReducer(initState, action);
        expect(state).toEqual({})
    })
    test('validacion default', () => {
        const initState = {
            id: "abc",
            name: "jefferson"
        };
        const action = {
            type: types.hola,
        }
        const state = loginReducer(initState, action);
        expect(state).toEqual(initState)
    })
    test('Comparar type', () => {
        expect(types).toEqual({
            login: 'login',
            logout: 'logout',
            register: 'register'
        })
    })
    test('comparar typesEmpleoyees', () => {
        expect(typesEmpleoyees).toEqual({
            register: 'Register',
            list: 'List',
            delete: 'Delete',
            search: 'search'
        })
    })
})
