NavMenuDescription = {};

NavMenuDescription.displayName = 'NavMenu';

NavMenuDescription.propTypes = {
  items: React.PropTypes.array.isRequired
};

NavMenuDescription.render = function () {
  var itemsList;

  itemsList = this.props.items.map(function (item) {
    return <li className="nav-menu-item">{ item }</li>;
  });

  return (
    <ul className="nav-menu">
      { itemsList }
    </ul>
  );
};

NavMenuDescription.navigateRoute_ = function (route) {
  location.href = route;
};

NavMenu = React.createClass(NavMenuDescription);
