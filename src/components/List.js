import React from 'react';
import Item from './Item';

const List = ({ items }) => {
  return (
    <div className="list-wrapper">
      {
        items.map((item, index) => (<Item key={`item-${index}`} item={item} />))
      }
    </div>
  );
};

export default List;
