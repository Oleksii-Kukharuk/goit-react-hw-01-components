import { Profile } from 'components/Profiles/Profile';
import user from 'origin/user';
import { Statistics } from 'components/Statistic/Statistic';
import data from 'origin/data';
import { FriendList } from 'components/Friends/FriendList';
import friends from 'origin/friends';
import { TransactionHistory } from 'components/Transactions/Transactions';
import transactions from 'origin/transactions.json';
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
