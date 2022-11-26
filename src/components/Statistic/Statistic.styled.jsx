import styled from '@emotion/styled';

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  padding-left: 0;
  margin: 0;
  justify-content: center;
  width: 350px;
`;

export const SectionTitle = styled.h2`
  text-align: center;
`;

export const StatItem = styled.li`
  font-size: large;
  flex-grow: 1;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  background-color: #${props => {
      return Math.floor(Math.random() * 16777215).toString(16);
    }};
`;
