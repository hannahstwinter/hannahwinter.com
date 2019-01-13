NavElementDescription = {};

NavElementDescription.displayName = 'NavElement';

NavElementDescription.propTypes = {
  title: React.PropTypes.string.isRequired
};

NavElementDescription.render = function () {
  return (<span>{ this.props.title }</span>);
};

NavElement = React.createClass(NavElementDescription);
