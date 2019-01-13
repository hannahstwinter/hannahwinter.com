NavMenuDescription = {};

NavMenuDescription.displayName = 'NavMenu';

NavMenuDescription.propTypes = {
  items: React.PropTypes.array.isRequired
};

NavMenuDescription.render = function () {
  var itemsList;

  itemsList = this.props.items.map(function (item) {
    var navigateRoute;

    navigateRoute = function () {
      location.href = item.props.route;
    };

    return <li className="nav-menu-item" onMouseDown={ navigateRoute } key={ item.props.title }>{ item }</li>;
  });

  return (
    <ul className="nav-menu">
      { itemsList }
    </ul>
  );
};

NavMenu = React.createClass(NavMenuDescription);
