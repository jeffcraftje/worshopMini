import { typesEmpleoyees } from "../types/types";


const initialState = {
    employees: [],
    search: ''
}


export const employeesReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesEmpleoyees.register:
            return {
                employees: [action.payload]
            }
        case typesEmpleoyees.list:
            return {
                employees: [...action.payload]
            }
        case typesEmpleoyees.delete:
            return {
                employees: state.employees.filter(emp => emp.correo !== action.payload)
            }
        case  typesEmpleoyees.search:
            return{
                employees: action.payload
            }
        default:
            return state;
    }
}
