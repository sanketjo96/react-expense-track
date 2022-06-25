import React, { Component } from 'react'
import { expenseData } from '../../Data/Seed'
import ExpenseForm from '../Form/ExpenseForm'
import ExpenseList from './List/ExpenseList'
import ExpensePlot from './Plot/ExpensePlot'
import { v4 as uuidv4 } from 'uuid';
import { aggregateExpense } from '../../Service/Transform'

export default class ExpenseTrack extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: expenseData,
      isAddMode: true,
      isFormVisible: false,
      formData: {
        id: '',
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
        price: parseInt(price, 10)
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

  onCancel = () => {
    this.setState((prevState) => ({
      ...prevState,
      isFormVisible: false
    }))
  }

  switchToAddForm = () => {
    this.setState((prevState) => ({
      isFormVisible: !prevState.isFormVisible
    }))
  }

  switchToUpdateForm = (e, itemId) => {
    const { id, name, month, price} = this.state.data.find(item => item.id === itemId)
    this.setState((prevState) => ({
      ...prevState,
      isFormVisible: true,
      isAddMode: false,
      formData: {
        id,
        name,
        month,
        price
      }
    }))
  }

  submit = (e) => {
    e.preventDefault()
    if (this.state.isAddMode) {
      this.setState((prevState) => ({
        ...prevState,
        isFormVisible: false,
        data: [...prevState.data, { id: uuidv4(), ...prevState.formData }]
      }))
    } else {
      this.setState((prevState) => ({
        ...prevState,
        isFormVisible: false,
        data: prevState.data.map(item => {
          if (item.id === prevState.formData.id) {
            return prevState.formData
          } else {
            return item;
          }
        })
      }))
    }

  }

  deleteExpense = (e, id) => {
    this.setState((prevState) => ({
      ...prevState,
      data: prevState.data.filter((item) => item.id !== id)
    }))
  }

  render() {
    const transformedData = aggregateExpense(this.state.data)
    return (
      <div>
        <ExpensePlot y={Object.values(transformedData)} x={Object.keys(transformedData)}></ExpensePlot>
        <button className="primary" onClick={this.switchToAddForm} type="submit">Add Expense</button>
        {
          this.state.isFormVisible
            ? <ExpenseForm
              submit={this.submit}
              onCancel={this.onCancel}
              name={this.state.formData.name}
              price={this.state.formData.price}
              month={this.state.formData.month}
              onNameChange={this.onNameChange}
              onPriceChange={this.onPriceChange}
              onMonthChange={this.onMonthChange}></ExpenseForm>
            : <ExpenseList expenseData={this.state.data} delete={this.deleteExpense} update={this.switchToUpdateForm}></ExpenseList>
        }

      </div>
    )
  }
}
