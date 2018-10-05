import { addExpense, editExpense, removeExpense} from '../../actions/expenses'

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '132abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '132abc'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense( '132abc', { note: 'updated' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '132abc',
        updates: {
            note: 'updated'
        }
    })
})

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 10955,
        createdAt: 1000,
        note: 'this was last month rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
    expense: {
        ...expenseData,
        id: expect.any(String)
    }
    })
})

test('should setup add expense action object with default values', () => {
const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
})