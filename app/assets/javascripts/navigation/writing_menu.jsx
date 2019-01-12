WritingMenuDescription = {};

WritingMenuDescription.displayName = 'WritingMenu';

WritingMenuDescription.render = function () {
  var menuItems;

  menuItems = [
    <NavElement title="Poetry" route="/poetry" />,
    <NavElement title="Prose" route="/prose" />,
    <NavElement title="Other Shirt" route="/otherShirt" />
  ];

  return (
    <NavMenu items={ menuItems } />
  );
};

WritingMenuDescription.navigateRoute_ = function (route) {
  location.href = route;
};

WritingMenu = React.createClass(WritingMenuDescription);
