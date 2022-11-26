import styled from '@emotion/styled';

export const Wraper = styled.table`
  width: 350px;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
`;

export const Row = styled.tr`
  text-align: center;
  padding: 1px;
`;

export const TrType = styled.td`
  color: ${props => {
    if (props.type === 'invoice') {
      return 'green';
    }
    if (props.type === 'payment') {
      return 'red';
    }
  }};
  background-color: ${props => {
    if (props.type === 'deposit') {
      return 'yellowgreen';
    }
    if (props.type === 'withdrawal') {
      return 'rgb(243, 39, 73)';
    }
  }};
`;
