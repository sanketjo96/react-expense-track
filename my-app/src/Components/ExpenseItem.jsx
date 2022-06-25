import React from 'react'
import './ExpenseItem.css'
import EditIcon from '../icons/icons8-edit.svg'
import DeleteIcon from '../icons/icons8-remove.svg'
import { months } from '../Data/Month'

export default function ExpenseItem(props) {
    return (
        <div className='expense-item-container'>
            <div className='expense-item-seg month'>{months.find(item => item.id == props.month).name}</div>
            <div className='expense-item-seg name'>{props.name}</div>
            <div className='expense-item-seg price'>{props.price}</div>

            <div className="icons">
                <div className='expense-item-seg icon' onClick={(e) => props.update(e, props.id)}>
                    <img className='edit-icon' alt={'edit'} src={EditIcon} />
                </div>

                <div className='expense-item-seg icon' onClick={(e) => props.delete(e, props.id)} >
                    <img className='delete-icon' alt={'delete'} src={DeleteIcon}/>
                </div>
            </div>
        </div>
    )
}
