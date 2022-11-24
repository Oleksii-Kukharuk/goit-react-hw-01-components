import { Profile } from '../Profile/Profile';
import user from '../../origin/User';
import { Statistics } from '../Statistics/Statistics';
import data from '../../origin/Data';
import { FriendList } from '../Friends/FriendList';
import friends from '../../origin/Friends';
import { TransactionHistory } from '../transactions/history';
import transactions from '../../origin/Transactions.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <div>
      <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
        <FriendList friends={friends} />;
        <TransactionHistory items={transactions} />;
      </Container>
    </div>
  );
};
