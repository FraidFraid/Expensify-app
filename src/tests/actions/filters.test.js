import {
    setStartDate,
    setEndDate,
    sortByAmount,
    sortByDate,
    setTextFilter
} from '../../actions/filters.js'
import moment from 'moment'

test('should generate set start date action object',() => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
} )

test('should generate set end date action object',() => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should generate set sort by amount action object',() => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should generate set sort by date action object',() => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should generate set sort by text action object with text ', () => {
    const text = 'rent'
    const action = setTextFilter(text)
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: text
    })
})

test('should generate set sort by text action object with text ', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})