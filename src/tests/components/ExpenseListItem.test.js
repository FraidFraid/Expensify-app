import React from 'react'
import ExpenseListItem from '../../components/ExpenseListItem'
import { shallow } from 'enzyme' 
import expenses from '../fixtures/expenses'

test('should render list Item', () => {
    const wrapper = shallow(<ExpenseListItem
        description = {expenses[1].description}
        amount = {expenses[1].amount}
        createdAt = {expenses[1].createdAt}
        id = {expenses[1].id}
        
        />)
    expect(wrapper).toMatchSnapshot()
})