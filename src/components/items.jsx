import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import Item from './item';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    axios
      .get('https://thewirecutter.com/wp-json/wp/v2/posts')
      .then((res) => {
        const items = res.data.map(item => ({
          id: _.get(item, 'id', -1),
          title: _.get(item, 'title.rendered', 'Title Missing'),
          url: _.get(item, '_links.self[0].href', '/404'),
        }));
        this.setState({ items });
      })
      .catch((err) => {
        console.warn(err); // eslint-disable-line no-console
      });
  }

  render() {
    const { items } = this.state;
    return (
      <ul className="items">
        {!_.isEmpty(items)
          ? items.map(item => <Item key={item.id} item={item} />)
          : 'Loading...'}
      </ul>
    );
  }
}
export default Items;
