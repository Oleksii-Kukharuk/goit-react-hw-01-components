import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  padding: 5px;
  width: 350px;
`;

export const Online = styled.span`
  margin-top: 22px;
  margin-right: 10px;
  height: 13px;
  width: 13px;
  border-radius: 50%;
  background-color: green;
  margin-left: 20px;
`;

export const Offline = styled.span`
  margin-top: 22px;
  margin-right: 10px;
  height: 13px;
  width: 13px;
  border-radius: 50%;
  background-color: red;
`;

export const Wraper = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListWraper = styled.ul`
  padding: 0;
`;
