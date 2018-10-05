import expenseReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses"
import moment from 'moment'

test('should set up dzfault state', () => {
    const action = { type: '@@INIT' }
    const state  = expenseReducer(undefined, action)
    expect(state).toEqual([])
})

test('should remove expense', () => {
const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
}
const state = expenseReducer(expenses, action)
expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if cant find it', () => {
const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
}
const state = expenseReducer(expenses, action)
expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
})

test('should add expense', () => {
    const expense = {
        id:'109',
        description: 'Flowers',
        note: '', 
        amount: 95000,
        createdAt: moment(0).add(2, 'days').valueOf() 
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expenseReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[1], expenses[2], expense])
    })

test ('should update an expense', () => {
    const description = 'Malabar'
    const action = {
        type: 'EDIT_EXPENSE',
        id : expenses[1].id, 
        updates : {
            description
        }
    }
    const state = expenseReducer(expenses, action)
    expect(state[1].description).toBe('Malabar')
    })

    test ('should not update an expense if cant find it', () => {
    const description = 'Malabar'
    const action = {
        type: 'EDIT_EXPENSE',
        id : '-1', 
        updates : {
            description
        }
    }
    const state = expenseReducer(expenses, action)
    expect(state).toEqual(expenses)
    })