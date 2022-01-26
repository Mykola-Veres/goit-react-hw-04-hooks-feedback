import { StatisticsList, StatisticsItem } from './Statistics.styled';
import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <StatisticsList>
      <StatisticsItem>
        <p>Good:{good}</p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Neutral:{neutral}</p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Bad:{bad}</p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Total:{total}</p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Positive feedback:{positivePercentage}%</p>
      </StatisticsItem>
    </StatisticsList>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
