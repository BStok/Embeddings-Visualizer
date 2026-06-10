import React from 'react';

export default function maco(definition) {
  return class MacoComponent extends React.Component {
    constructor(props) {
      super(props);
      definition(this);
    }
  };
}

maco.template = function template(render) {
  return function MacoTemplate(props) {
    return render(props);
  };
};
