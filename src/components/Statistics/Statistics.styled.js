import styled from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-color: red;
  border: 4px;
`;

export const StatisticsItem = styled.li`
  font-size: 18px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
