import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 350px;
  height: 375px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; ;
`;

export const ImgWraper = styled.img`
  border-radius: 50%;
  outline: hidden;
  background-color: tomato;
`;

export const UserName = styled.p`
  font-weight: 900;
  text-align: center;
`;

export const Paragraph = styled.p`
  /* font-weight: 500; */
  text-align: center;
  color: gray;
  margin: 5px;
`;

export const UserStat = styled.ul`
  height: 50px;
  width: 100%;
  list-style: none;
  display: flex;
  padding-left: 0;
  margin: 0;
  justify-content: center;
`;

export const UserStatItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
  color: gray;
`;

export const Quantity = styled.span`
  font-size: large;
  font-weight: 700;
  color: black;
`;
