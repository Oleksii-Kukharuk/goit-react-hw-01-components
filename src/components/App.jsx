import { Profile } from './profile/profile';
import user from '../origin/user';
import { Statistics } from './statistics/statistics';
import { data } from '../origin/data';

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
      <Statistics />
    </div>
  );
};
