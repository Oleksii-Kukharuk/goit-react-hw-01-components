import PropTypes from 'prop-types';
import { shape } from 'prop-types';
import { Stats, StatItem, SectionTitle } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <SectionTitle>{title}</SectionTitle>}

      <Stats>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </StatItem>
        ))}
      </Stats>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    shape({
      id: PropTypes.string,
      label: PropTypes.string,
      package: PropTypes.number,
    })
  ),
};
