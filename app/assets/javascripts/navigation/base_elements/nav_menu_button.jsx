NavMenuButtonDescription = {};

NavMenuButtonDescription.displayName = 'NavMenuButton';

NavMenuButtonDescription.propTypes = {
  title: React.PropTypes.string.isRequired,
  menu: React.PropTypes.object,
  route: React.PropTypes.string,
  className: React.PropTypes.string
};

NavMenuButtonDescription.getInitialState = function () {
  return {
    menuVisible: false
  }
};

NavMenuButtonDescription.render = function () {
  var menu, onClickFunction;

  menu = this.state.menuVisible ? this.props.menu : null;
  onClickFunction = this.props.menu ? this.toggleMenuVisibility_ : this.navigateRoute_;
  classNames = "nav-menu-button " + this.props.className;

  return (
    <span>
      <span className={ classNames } onClick={ onClickFunction } >{ this.props.title }</span>
      <span>{ menu }</span>
    </span>
  );
};

NavMenuButtonDescription.toggleMenuVisibility_ = function () {
  this.setState({ menuVisible: !this.state.menuVisible });
};

NavMenuButtonDescription.navigateRoute_ = function () {
  location.href = this.props.route;
};

NavMenuButton = React.createClass(NavMenuButtonDescription);
