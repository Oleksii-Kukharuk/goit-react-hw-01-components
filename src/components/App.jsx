import { Profile } from './profile/profile';
import user from '../origin/user';
import { Statistics } from './statistics/statistics';
import data from '../origin/data';
import { FriendList } from './friends/friend_list';
import friends from '../origin/friends';
import { TransactionHistory } from './transactions/history';
import transactions from '../origin/transactions.json';

export const App = () => {
  return (
    <div>
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
    </div>
  );
};
