BlogMenuDescription = {};

BlogMenuDescription.displayName = 'BlogMenu';

BlogMenuDescription.render = function () {
  var menuItems;

  menuItems = [
    <NavElement title="Coding Tips" route="/codingTips" />
  ];

  return (
    <NavMenu items={ menuItems } />
  );
};

BlogMenuDescription.navigateRoute_ = function (route) {
  location.href = route;
};

BlogMenu = React.createClass(BlogMenuDescription);
