import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({items}) =>{
    return (
<table className={css['transaction-history']}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody> 
    {items.map(({id, type, amount, currency}, index) =>(
        <tr key={id} style ={{backgroundColor:
        index % 2 ===0 ? "rgb(242, 241, 246)" : "rgb(241, 238, 252)"}}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    ))
    }
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}