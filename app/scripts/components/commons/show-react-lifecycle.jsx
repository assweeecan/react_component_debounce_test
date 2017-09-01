import React from 'react';

export default (prefix = '', suffix = '') => (ReactElement) => {
  class ShowLifecycle extends React.Component {
    constructor(props) {
      super(props);
      console.log(`%c ${`${prefix}${ReactElement.name}${suffix}`} constructor`, 'color:#e64b00');
    }

    componentWillMount() {
      console.log(`%c ${`${prefix}${ReactElement.name}${suffix}`} componentWillMount`, 'color:#ffdf24');
    }

    componentDidMount() {
      console.log(`%c ${`${prefix}${ReactElement.name}${suffix}`} componentDidMount`, 'color:#ace682');
    }

    componentWillReceiveProps() {
      console.log(`%c ${`${prefix}${ReactElement.name}${suffix}`} componentWillReceiveProps`, 'color:#00c5e6');
    }

    shouldComponentUpdate() {
      console.log(`%c ${`${prefix}${ReactElement.name}${suffix}`} shouldComponentUpdate`, 'color:#000000');
      return true;
    }

    componentWillUpdate() {
      console.log(`%c ${`${prefix}${ReactElement.name}${suffix}`} componentWillUpdate`, 'color:#e6dc21');
    }

    componentDidUpdate() {
      console.log(`%c ${`${prefix}${ReactElement.name}${suffix}`} componentDidUpdate`, 'color:#80e613');
    }

    componentWillUnmount() {
      console.log(`%c ${`${prefix}${ReactElement.name}${suffix}`} componentWillUnmount`, 'color:#e60900');
    }

    render() {
      console.log(`%c ${`${prefix}${ReactElement.name}${suffix}`} render`, 'color:#00e635');
      return (<ReactElement {...this.props} />);
    }
  }

  ShowLifecycle.defaultProps = ReactElement.defaultProps;
  ShowLifecycle.propTypes = ReactElement.propTypes;
  ShowLifecycle.displayName = `ShowLifecycle(${ReactElement.name})`;

  return ShowLifecycle;
};
