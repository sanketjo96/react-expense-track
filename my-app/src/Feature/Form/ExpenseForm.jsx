import React, { Component } from 'react'
import { months } from '../../Data/Month'
import './ExpenseForm.css'

export default class ExpenseForm extends Component {
    render() {
        return (
            <div className='expense-form'>
                <form onSubmit={this.props.submit}>
                    <div className="text-input">
                        <label>Item Name</label>
                        <input htmlFor="input1" type="text" value={this.props.name} onChange={(e) => this.props.onNameChange(e.target.value)}></input>
                    </div>

                    <div className="text-input">
                        <label id="input2">Item Price</label>
                        <input htmlFor="input2" type="text" value={this.props.price} onChange={(e) => this.props.onPriceChange(e.target.value)}></input>

                    </div>

                    <div className="text-input">
                        <label>Month</label>
                        <select value={this.props.month} onChange={(e) => this.props.onMonthChange(e.target.value)}>
                            {months.map((mon) => (
                                <option key={mon.name} value={mon.id}>{mon.name}</option>
                            ))}
                        </select>
                    </div>

                    <button className="primary" type="submit">Submit</button>
                    <button onClick={this.hanldeOnCancel}>Cancel</button>
                </form>
            </div>
        )
    }
}
