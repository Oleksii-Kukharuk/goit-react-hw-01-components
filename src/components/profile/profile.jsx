import PropTypes from 'prop-types';
import defaultImg from './default.png';
import { ProfileCard } from './profile.styled';
import {
  ImgWraper,
  Paragraph,
  UserName,
  UserStat,
  UserStatItem,
  Quantity,
} from './profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar = defaultImg,
  stats,
}) => {
  return (
    <ProfileCard>
      <div className="description">
        <ImgWraper
          src={avatar}
          alt="User avatar"
          className="avatar"
          width="200px"
        />
        <UserName> {username}</UserName>
        <Paragraph>@{tag}</Paragraph>
        <Paragraph>{location}</Paragraph>
      </div>

      <UserStat>
        <UserStatItem>
          <span className="label">Followers</span>
          <Quantity> {stats.followers}</Quantity>
        </UserStatItem>
        <UserStatItem>
          <span className="label">Views</span>
          <Quantity> {stats.views}</Quantity>
        </UserStatItem>
        <UserStatItem>
          <span className="label">Likes</span>
          <Quantity> {stats.likes}</Quantity>
        </UserStatItem>
      </UserStat>
    </ProfileCard>
  );
};

Profile.propTypes = {
  userName: PropTypes.string,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
