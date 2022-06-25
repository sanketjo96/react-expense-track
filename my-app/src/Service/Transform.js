import { months } from "../Data/Month"

export const aggregateExpense = (expenseData) => {
    const map = {}
    expenseData.map(expense => {
        const monthName = months.find(item => item.id == expense.month).name
        if (map[monthName]) {
            map[monthName] += expense.price
        } else {
            map[monthName] = expense.price
        }
    })

    return map;
}