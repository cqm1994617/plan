import React from 'react';

export default function (ComponentClass) {
  return class HOC extends ComponentClass {

    render() {
      const elementTree = super.render();
      elementTree.props.children = elementTree.props.children.filter((z) => {
        return z.type !== "ul" && z;
      });
      const newTree = React.cloneElement(elementTree);
      return newTree;
    }
  }
}
