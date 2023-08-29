import PropTypes from 'prop-types';

const TodoItem = ({ itemProp }) => <li>{itemProp.title}</li>;
TodoItem.propTypes = {
  itemProp: PropTypes.node.isRequired,
};
export default TodoItem;
