// import PropTypes from 'prop-types';
import { Wraper, Row } from './transactions.styled';
import './payment_type.css';

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
            <td className={type}>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </Row>
        ))}
      </tbody>
    </Wraper>
  );
};
