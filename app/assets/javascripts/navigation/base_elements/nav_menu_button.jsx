NavMenuButtonDescription = {};

NavMenuButtonDescription.displayName = 'NavMenuButton';

NavMenuButtonDescription.propTypes = {
  title: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  route: React.PropTypes.string,
  menu: React.PropTypes.object,
  visibleMenu: React.PropTypes.string,
  setVisibleMenuItem: React.PropTypes.func
};

NavMenuButtonDescription.render = function () {
  var handleClick, buttonClassNames;

  handleClick = this.props.menu ? this.setVisibleMenuItem : this.navigateRoute_;
  buttonClassNames = "nav-menu-button " + this.props.className;

  return (
    <span onBlur={ this.unSetVisibleMenuItem }>
      <span className={ buttonClassNames } onClick={ handleClick }>
        { this.props.title }
      </span>
      { this._getMenu() }
    </span>
  );
};

NavMenuButtonDescription._getMenu = function () {
  return this.props.title && (this.props.title == this.props.visibleMenu) ?
    <span className={ "nav-menu-container " + this.props.className }>{ this.props.menu }</span> :
    null;
};

NavMenuButtonDescription.unSetVisibleMenuItem = function () {
  this.props.setVisibleMenuItem(null);
};

NavMenuButtonDescription.setVisibleMenuItem = function () {
  this.props.setVisibleMenuItem(this.props.title);
};

NavMenuButtonDescription.navigateRoute_ = function () {
  location.href = this.props.route;
};

NavMenuButton = React.createClass(NavMenuButtonDescription);
