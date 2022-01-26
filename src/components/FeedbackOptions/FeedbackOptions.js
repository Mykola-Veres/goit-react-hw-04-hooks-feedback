import { BtnList, BtnItem, Btn } from './Feedback.styled';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <BtnList>
      {options.map(option => {
        return (
          <BtnItem
            key={option}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            <Btn>{option}</Btn>
          </BtnItem>
        );
      })}
    </BtnList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
