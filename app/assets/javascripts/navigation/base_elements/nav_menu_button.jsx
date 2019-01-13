NavMenuButtonDescription = {};

NavMenuButtonDescription.displayName = 'NavMenuButton';

NavMenuButtonDescription.propTypes = {
  title: React.PropTypes.string.isRequired,
  menu: React.PropTypes.object,
  route: React.PropTypes.string,
  className: React.PropTypes.string,
  visibleMenuId: React.PropTypes.number,
  menuId: React.PropTypes.number,
  setVisibleMenuItem: React.PropTypes.func
};

NavMenuButtonDescription.render = function () {
  var menu, onClickFunction, classNames;

  menu = (this.props.visibleMenuId == this.props.menuId) ? this.props.menu : null;
  onClickFunction = this.props.menu ? this.setVisibleMenuItem : this.navigateRoute_;
  classNames = "nav-menu-button " + this.props.className;

  return (
    <span onBlur={ this.unSetVisibleMenuItem }>
      <span className={ classNames } onClick={ onClickFunction } tabIndex={ this.props.menuId }>
        { this.props.title }
      </span>
      <span>{ menu }</span>
    </span>
  );
};

NavMenuButtonDescription.unSetVisibleMenuItem = function () {
  this.props.setVisibleMenuItem(null);
};

NavMenuButtonDescription.setVisibleMenuItem = function () {
  this.props.setVisibleMenuItem(this.props.menuId);
};

NavMenuButtonDescription.navigateRoute_ = function () {
  location.href = this.props.route;
};

NavMenuButton = React.createClass(NavMenuButtonDescription);
