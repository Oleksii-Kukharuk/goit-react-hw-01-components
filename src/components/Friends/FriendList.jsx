import PropTypes from 'prop-types';
import {
  ListItem,
  Online,
  Offline,
  Wraper,
  ListWraper,
} from './Friends.styled';

export const FriendList = ({ friends }) => {
  return (
    <ListWraper>
      <Wraper>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <ListItem key={id}>
            {isOnline ? <Online /> : <Offline />}
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </ListItem>
        ))}
      </Wraper>
    </ListWraper>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
