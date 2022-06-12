import React, { Component } from 'react'
import ExpenseItem from '../../../Components/ExpenseItem'
import './ExpenseList.css'

export default class ExpenseList extends Component {
  render() {
    return (
      <div className='expense-list-container'>
        {this.props.expenseData.map(item => {
          return <ExpenseItem
            key={item.id}
            name={item.name}
            month={item.month}
            price={item.price}>
          </ExpenseItem>
        })}
      </div>
    )
  }
}
