import { NotificationText } from './Notification.styled';
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <NotificationText>{message}</NotificationText>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
