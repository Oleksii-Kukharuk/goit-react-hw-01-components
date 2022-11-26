// import PropTypes from 'prop-types';
import { Wraper, Row, TrType } from './Transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Wraper className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Row key={id}>
            <TrType type={type}>{type}</TrType>
            <td>{amount}</td>
            <td>{currency}</td>
          </Row>
        ))}
      </tbody>
    </Wraper>
  );
};
