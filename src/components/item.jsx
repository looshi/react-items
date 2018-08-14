import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ item }) => (
  <li className="item">
    <a href={item.url}>{item.title}</a>
    <div>{item.id}</div>
  </li>
);
Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Item;
