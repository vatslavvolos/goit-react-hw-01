import css from "./TransactionHistory.module.css";
export default function TransactionHistory({ transaction }) {
  return (
    <table className={css.tableTransactions}>
      <thead className={css.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transaction.map((action) => (
          <tr className={css.trTable} key={action.id}>
            <td className={css.tdTable}>{action.type}</td>
            <td className={css.tdTable}>{action.amount} </td>
            <td className={css.tdTable}>{action.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
