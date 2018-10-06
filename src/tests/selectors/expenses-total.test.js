import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
    const total = selectExpensesTotal([])
    expect(total).toBe(0)
})

test('should return  195 if expense 0', () => {
    const total = selectExpensesTotal([expenses[0]])
    expect(total).toBe(195)
})

test('should return  114195 as a total', () => {
    const total = selectExpensesTotal(expenses)
    expect(total).toBe(114195)
})