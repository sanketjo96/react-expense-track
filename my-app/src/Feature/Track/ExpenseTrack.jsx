import React, { Component } from 'react'
import { expenseData } from '../../Data/Seed'
import ExpenseForm from '../Form/ExpenseForm'
import ExpenseList from './List/ExpenseList'
import ExpensePlot from './Plot/ExpensePlot'
import { v4 as uuidv4 } from 'uuid';

export default class ExpenseTrack extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: expenseData,
      isFormVisible: false,
      formData: {
        name: '',
        price: '',
        month: 1,
      }
    }
  }

  onNameChange = (name) => {
    this.setState({
      formData: {
        ...this.state.formData,
        name: name
      }
    })
  }

  onPriceChange = (price) => {
    this.setState({
      formData: {
        ...this.state.formData,
        price: price
      }
    })
  }

  onMonthChange = (month) => {
    this.setState({
      formData: {
        ...this.state.formData,
        month: month
      }
    })
  }

  addExpense = () => {
    this.setState((prevState) => ({
      isFormVisible: !prevState.isFormVisible
    }))
  }

  submit = (e) => {
    e.preventDefault()
    this.setState((prevState) => ({
      isFormVisible: false,
      data: [...prevState.data, { id: uuidv4(), ...prevState.formData }]
    }))
  }

  render() {
    return (
      <div>
        <ExpensePlot></ExpensePlot>
        <button className="primary" onClick={this.addExpense} type="submit">Add Expense</button>
        {
          this.state.isFormVisible
            ? <ExpenseForm
              submit={this.submit}
              name={this.state.formData.name}
              price={this.state.formData.price}
              month={this.state.formData.month}
              onNameChange={this.onNameChange}
              onPriceChange={this.onPriceChange}
              onMonthChange={this.onMonthChange}></ExpenseForm>
            : <ExpenseList expenseData={this.state.data} ></ExpenseList>
        }

      </div>
    )
  }
}
